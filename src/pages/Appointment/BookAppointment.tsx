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
import { ArrowLeft } from "lucide-react";

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
  appointmentDateTime: "",
  startTime: "",
  endTime: "",
  location: "",
  phoneNumber: "",
  concernType: ConcernType.IN_CLINIC,
};

const BookAppointment: React.FC = () => {
  const { id } = useParams<{ id: string }>() as { id: string };
  const navigate = useNavigate();
  const [formData, setFormData] = useState<AppointmentForm>(initialFormState);
  const [weeklySchedule, setWeeklySchedule] = useState<WeeklySchedule[]>([]);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [futureDates, setFutureDates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [dateStatus, setDateStatus] = useState<{ [key: string]: string }>({});

  // Fetch expert data and set weekly schedule
  useEffect(() => {
    async function fetchExpertData() {
      try {
        const response = await client.graphql({
          query: getExpert,
          variables: { id },
        });

        const expert = response.data.getExpert;
        if (expert && expert.weeklySchedule) {
          const formattedSchedule = expert.weeklySchedule
            .filter((day: any) => day !== null)
            .map((day: any) => ({
              dayOfWeek: getDayName(day.dayOfWeek), // Convert dayOfWeek to name
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
    generateFutureDates();
  }, [id]);

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

      const schedule = weeklySchedule.find((slot) => slot.dayOfWeek === dayOfWeek);
      status[dateStr] = schedule?.isAvailable ? "Slots Available" : "No Slots Available";
      
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
  const updateAvailableSlots = (selectedDate: string, concernType: ConcernType) => {
    if (!selectedDate) return;
    const selectedDay = new Date(selectedDate).toLocaleDateString("en-US", {
      weekday: "long",
    });
    const schedule = weeklySchedule.find((slot) => slot.dayOfWeek === selectedDay);
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

  // Handle date selection from carousel
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
    try {
      const input = {
        ...formData,
        expertID: id,
        status: "PENDING",
      };
      const response = await client.graphql({
        query: createAppointment,
        variables: { input },
      });

      if (response.data.createAppointment) {
        alert("Appointment booked successfully!");
        navigate(`/expert/${id}`);
      }
    } catch (error) {
      console.error("Error creating appointment:", error);
      alert("Failed to book appointment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };  

  return (
    <div className="max-w-3xl mx-auto mt-10 p-5">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-500 mb-5"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back
      </button>

      <Card className="shadow-lg hover:shadow-xl transition rounded-xl">
        <CardHeader>
          <CardTitle className="text-xl">Book an Appointment</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Date Carousel */}
          <div className="flex overflow-x-scroll gap-3 mb-5 scrollbar-hide">
            {futureDates.map((date) => (
              <div
                key={date}
                className={`p-3 w-24 text-center rounded-lg cursor-pointer border transition-all duration-300 ${
                  selectedDate === date ? "bg-blue-500 text-white" : "bg-gray-100"
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
                    dateStatus[date] === "Slots Available"
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
            onValueChange={(value) => handleConcernTypeChange(value as ConcernType)}
          >
            <TabsList className="w-full flex justify-between mb-5">
              <TabsTrigger value={ConcernType.IN_CLINIC}>IN CLINIC</TabsTrigger>
              <TabsTrigger value={ConcernType.AUDIO_CALL}>AUDIO CALL</TabsTrigger>
              <TabsTrigger value={ConcernType.VIDEO_CALL}>VIDEO CALL</TabsTrigger>
            </TabsList>

            {/* Time Slots Grid */}
            <div className="mb-5">
              <Label>Available Time Slots</Label>
              {availableSlots.length > 0 ? (
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {availableSlots.map((slot, index) => (
                    <button
                      key={index}
                      className={`p-2 border rounded-lg text-sm cursor-pointer transition-all duration-300 ${
                        formData.startTime === slot.startTime
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100"
                      }`}
                      onClick={() => handleSlotSelect(slot.startTime, slot.endTime)}
                    >
                      {slot.startTime}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-red-500 mt-2">No slots available</p>
              )}
            </div>

            {/* Appointment Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {formData.concernType === ConcernType.IN_CLINIC && (
                <div>
                  <Label htmlFor="location">Clinic Location</Label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    value={formData.location || "Clinic Address Auto-filled"}
                    readOnly
                  />
                </div>
              )}

              {(formData.concernType === ConcernType.AUDIO_CALL ||
                formData.concernType === ConcernType.VIDEO_CALL) && (
                <div>
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                    required
                  />
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-secondary"
                disabled={isSubmitting || availableSlots.length === 0}
              >
                {isSubmitting ? "Booking..." : "Confirm Appointment"}
              </Button>
            </form>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookAppointment;
