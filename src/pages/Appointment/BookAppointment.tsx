"use client";

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import client from "@/lib/apiClient";
import { getExpert } from "@/graphql/queries";
import { createAppointment } from "@/graphql/mutations";
import { useAuth } from "@/hooks/useAuth";
import { showToast } from "@/lib/toast";
import { generateMeetingLink } from "@/lib/utils";
import { sendNotification } from "@/lib/firebase/messaging";

// Enum for concern types
enum ConcernType {
  IN_CLINIC = "IN_CLINIC",
  AUDIO_CALL = "AUDIO_CALL",
  VIDEO_CALL = "VIDEO_CALL",
}

// Define slot type
type TimeSlot = {
  startTime: string;
  endTime: string;
};

// Define schedule type
type WeeklySchedule = {
  dayOfWeek: string;
  isAvailable: boolean;
  inClinicSlots?: TimeSlot[];
  audioCallSlots?: TimeSlot[];
  videoCallSlots?: TimeSlot[];
};

// Define the type for the appointment form
type AppointmentForm = {
  appointmentDateTime: string;
  startTime: string;
  endTime: string;
  location?: string;
  phoneNumber?: string;
  concernType: ConcernType;
};

// Initial form state
const initialFormState: AppointmentForm = {
  appointmentDateTime: new Date().toISOString().slice(0, 16),
  startTime: "",
  endTime: "",
  location: "",
  phoneNumber: "",
  concernType: ConcernType.IN_CLINIC,
};

const BookAppointment: React.FC = () => {
  const { id } = useParams<{ id: string }>() as { id: string };
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useState<AppointmentForm>(initialFormState);
  const [weeklySchedule, setWeeklySchedule] = useState<WeeklySchedule[]>([]);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [futureDates, setFutureDates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0] // Default to current date
  );
  const [dateStatus, setDateStatus] = useState<{ [key: string]: string }>({});
  const [location, setLocation] = useState<string | null>(null);

  // Fetch expert data and set weekly schedule
  useEffect(() => {
    async function fetchExpertData() {
      try {
        const response = await client.graphql({
          query: getExpert,
          variables: { id },
        });

        const expert = response.data.getExpert;
        setLocation(expert?.clinicLocation ?? null);

        if (expert && expert.weeklySchedule) {
          const formattedSchedule = expert.weeklySchedule
            .filter((day: any) => day !== null)
            .map((day: any) => ({
              dayOfWeek: getDayName(day.dayOfWeek),
              isAvailable: day.isAvailable || false,
              inClinicSlots: day.inClinicSlots || [],
              audioCallSlots: day.audioCallSlots || [],
              videoCallSlots: day.videoCallSlots || [],
            }));
          setWeeklySchedule(formattedSchedule);
        }
      } catch (error) {
        console.error("Error fetching expert data:", error);
      }
    }

    if (id) {
      fetchExpertData();
    }
  }, [id]);

  // Generate future dates and set date status
  useEffect(() => {
    if (weeklySchedule.length > 0) {
      generateFutureDates();
    }
  }, [weeklySchedule]);

  // Update available slots for the current date on page load
  useEffect(() => {
    if (selectedDate && weeklySchedule.length > 0) {
      updateAvailableSlots(selectedDate, formData.concernType);
    }
  }, [selectedDate, weeklySchedule, formData.concernType]);

  // Helper to convert dayOfWeek number to day name
  const getDayName = (dayIndex: number): string => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[dayIndex];
  };

  // Generate next 14 days of dates
  const generateFutureDates = () => {
    const dates = [];
    const today = new Date();
    const status: { [key: string]: string } = {};
    for (let i = 0; i < 14; i++) {
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + i);
      const dateStr = futureDate.toISOString().split("T")[0];
      dates.push(dateStr);
      const dayOfWeek = futureDate.toLocaleDateString("en-US", {
        weekday: "long",
      });

      const schedule = weeklySchedule.find(
        (slot) => slot.dayOfWeek === dayOfWeek
      );
      status[dateStr] = schedule?.isAvailable ? "Available" : "Not Available";
    }
    setFutureDates(dates);
    setDateStatus(status);
  };

  // Handle concern type change
  const handleConcernTypeChange = (concernType: ConcernType) => {
    setFormData((prev) => ({
      ...prev,
      concernType,
      startTime: "",
      endTime: "",
    }));
    updateAvailableSlots(selectedDate, concernType);
  };

  // Get slots for selected date and concern type
  const updateAvailableSlots = (
    selectedDate: string,
    concernType: ConcernType
  ) => {
    if (!selectedDate) return;
    const selectedDay = new Date(selectedDate).toLocaleDateString("en-US", {
      weekday: "long",
    });
    const schedule = weeklySchedule.find(
      (slot) => slot.dayOfWeek === selectedDay
    );
    if (schedule?.isAvailable) {
      let slots: TimeSlot[] = [];
      switch (concernType) {
        case ConcernType.IN_CLINIC:
          slots = schedule.inClinicSlots || [];
          break;
        case ConcernType.AUDIO_CALL:
          slots = schedule.audioCallSlots || [];
          break;
        case ConcernType.VIDEO_CALL:
          slots = schedule.videoCallSlots || [];
          break;
      }
      setAvailableSlots(slots);
    } else {
      setAvailableSlots([]);
    }
  };

  // Handle date selection
  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setFormData((prev) => ({ ...prev, appointmentDateTime: date }));
    updateAvailableSlots(date, formData.concernType);
  };

  // Handle slot selection
  const handleSlotSelect = (startTime: string, endTime: string) => {
    setFormData((prev) => ({
      ...prev,
      startTime,
      endTime,
    }));
  };

  // Submit appointment
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format appointmentDateTime
    const selectedDateTime = new Date(
      `${formData.appointmentDateTime}T${formData.startTime}:00Z`
    ).toISOString();

    try {
      // Generate meeting link if required
      const meetingLink = await generateMeetingLink(formData.concernType);

      const input = {
        ...formData,
        appointmentDateTime: selectedDateTime,
        phoneNumber: user?.mobile || "",
        expertID: id,
        userId: user?.id,
        status: "PENDING",
        location: location || "",
        meetingLink,
      };

      const {data, errors}  = await client.graphql({
        query: createAppointment,
        variables: { input },
      });

      if (data) {
      
      //   // Notify Patient
      //  sendNotification({
      //     title: "Appointment Confirmed",
      //     body: `Your appointment with the expert has been successfully booked for ${selectedDate} at ${formData.startTime}.`,
      //     recipientId: user?.id,
      //     recipientRole: "patient",
      //   });
      
      //   // Notify Expert
      //  sendNotification({
      //     title: "New Appointment",
      //     body: `${user?.name || "A patient"} has booked an appointment for ${selectedDate} at ${formData.startTime}.`,
      //     recipientId: id, // expert ID
      //     recipientRole: "doctor",
      //   });
      
        navigate(`/expert-detail/${id}`);
        showToast("Appointment booked successfully!", "success");
      }
      

    } catch (error) {
      console.error("Error creating appointment:", error);
      showToast("Failed to book appointment. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };  

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="shadow-lg hover:shadow-xl transition rounded-xl">
        <CardContent className="pt-6">
          {/* Date Carousel */}
          <div className="flex overflow-x-scroll gap-3 mb-5 scrollbar-hide">
            {futureDates.map((date) => (
              <div
                key={date}
                className={`p-3 w-24 text-center rounded-lg cursor-pointer border transition-all duration-300 ${
                  selectedDate === date
                    ? "bg-secondary text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => handleDateSelect(date)}
              >
                <div className="text-sm font-medium">
                  {new Date(date).toLocaleDateString("en-US", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                  })}
                </div>
                <div
                  className={`text-xs mt-1 ${
                    dateStatus[date] === "Available"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {dateStatus[date]}
                </div>
              </div>
            ))}
          </div>

          {/* Tabs for Concern Type */}
          <Tabs
            defaultValue={ConcernType.IN_CLINIC}
            className="w-full"
            onValueChange={(value) =>
              handleConcernTypeChange(value as ConcernType)
            }
          >
            <TabsList className="inline-flex items-center gap-3 p-1 bg-muted rounded-full mx-auto mb-5">
              <TabsTrigger
                value={ConcernType.IN_CLINIC}
                className="px-4 py-1 text-sm rounded-full data-[state=active]:bg-secondary data-[state=active]:text-white"
              >
                IN CLINIC
              </TabsTrigger>
              <TabsTrigger
                value={ConcernType.AUDIO_CALL}
                className="px-4 py-1 text-sm rounded-full data-[state=active]:bg-secondary data-[state=active]:text-white"
              >
                AUDIO CALL
              </TabsTrigger>
              <TabsTrigger
                value={ConcernType.VIDEO_CALL}
                className="px-4 py-1 text-sm rounded-full data-[state=active]:bg-secondary data-[state=active]:text-white"
              >
                VIDEO CALL
              </TabsTrigger>
            </TabsList>

            {/* Time Slots Grid */}
            <div className="mb-5">
              <Label>Available Time Slots</Label>
              {availableSlots.length > 0 ? (
                <div className="grid grid-cols-3 gap-3 mt-3">
                  {availableSlots.map((slot, index) => (
                    <Button
                      key={index}
                      variant={
                        formData.startTime === slot.startTime
                          ? "default"
                          : "outline"
                      }
                      onClick={() =>
                        handleSlotSelect(slot.startTime, slot.endTime)
                      }
                      data-state={
                        formData.startTime === slot.startTime ? "on" : "off"
                      }
                      className={`transition-all duration-300 ${
                        formData.startTime === slot.startTime
                          ? "bg-secondary text-white hover:bg-secondary"
                          : "hover:bg-gray-200"
                      }`}
                    >
                      {`${slot.startTime} - ${slot.endTime}`}
                    </Button>
                  ))}
                </div>
              ) : (
                <div className="text-red-500 text-sm mt-3">
                  No slots available for this date.
                </div>
              )}
            </div>

            {/* Additional Fields */}
            {formData.concernType === ConcernType.IN_CLINIC && (
              <div className="mb-5">
                <Label>Clinic/Hospital Address</Label>
                <Input
                  type="text"
                  value={location || "Not available"}
                  readOnly
                />
              </div>
            )}

            {/* Submit Button */}
            <Button
              className="w-full bg-primary hover:bg-secondary"
              onClick={handleSubmit}
              disabled={isSubmitting || availableSlots.length === 0}
            >
              {isSubmitting ? "Booking..." : "Confirm Appointment"}
            </Button>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookAppointment;
