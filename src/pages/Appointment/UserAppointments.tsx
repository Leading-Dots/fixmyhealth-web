"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import client from "@/lib/apiClient";
import { listAppointments } from "@/graphql/queries";
import { useAuth } from "@/hooks/useAuth";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Appointment = {
  id: string;
  concernType?: string | null;
  concernStatus?: string | null;
  appointmentDateTime?: string | null;
  startTime?: string | null;
  endTime?: string | null;
  status?: string | null;
  location?: string | null;
  meetingLink?: string | null;
  phoneNumber?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  expertID?: string | null;
  userId?: string | null;
};

const UserAppointments: React.FC = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedConcernType, setSelectedConcernType] = useState<string>("ALL");

  useEffect(() => {
    if (user?.id) {
      fetchAppointments(user.id);
    }
  }, [user?.id]);

  const fetchAppointments = async (userId: string) => {
    try {
      const filterKey = user?.role === "doctor" ? "expertID" : "userId";
      const response = await client.graphql({
        query: listAppointments,
        variables: {
          filter: { [filterKey]: { eq: userId } },
        },
      });

      const items = response.data.listAppointments?.items || [];

      const mappedItems: Appointment[] = items.map((item: any) => ({
        id: item.id,
        concernType: item.concernType || "N/A",
        concernStatus: item.concernStatus || "N/A",
        appointmentDateTime: item.appointmentDateTime || "",
        startTime: item.startTime || "N/A",
        endTime: item.endTime || "N/A",
        status: item.status || "N/A",
        location: item.location || "N/A",
        meetingLink: item.meetingLink || "",
        phoneNumber: item.phoneNumber || "N/A",
        createdAt: item.createdAt || "",
        updatedAt: item.updatedAt || "",
        expertID: item.expertID || "",
        userId: item.userId || "",
      }));

      setAppointments(mappedItems);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const isUpcoming = (appointmentDateTime?: string | null) => {
    if (!appointmentDateTime) return false;
    const appointmentDate = new Date(appointmentDateTime);
    const currentDate = new Date();
    return appointmentDate >= currentDate;
  };

  const filteredAppointments = appointments.filter((appt) =>
    selectedConcernType === "ALL" || appt.concernType === selectedConcernType
  );

  const upcomingAppointments = filteredAppointments.filter((appt) =>
    isUpcoming(appt.appointmentDateTime)
  );
  const pastAppointments = filteredAppointments.filter(
    (appt) => !isUpcoming(appt.appointmentDateTime)
  );

  const renderAppointmentCard = (appointment: Appointment) => (
    <div
      key={appointment.id}
      className={`p-4 rounded-lg border transition ${
        isUpcoming(appointment.appointmentDateTime)
          ? "bg-green-100 border-green-400"
          : "bg-yellow-100 border-yellow-400"
      }`}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">
          {appointment.concernType?.replace("_", " ") || "N/A"}
        </h3>
        <Badge
          className={`${
            isUpcoming(appointment.appointmentDateTime)
              ? "bg-green-500"
              : "bg-yellow-500"
          } text-white`}
        >
          {isUpcoming(appointment.appointmentDateTime) ? "Upcoming" : "Past"}
        </Badge>
      </div>

      <p className="text-sm text-gray-700">
        📅{" "}
        {appointment.appointmentDateTime
          ? new Date(appointment.appointmentDateTime).toLocaleDateString(
              "en-US",
              {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )
          : "N/A"}
      </p>
      <p className="text-sm text-gray-700">
        ⏰ {appointment.startTime || "N/A"} - {appointment.endTime || "N/A"}
      </p>

      {appointment.concernType === "IN_CLINIC" && (
        <p className="text-sm text-gray-700">
          📍 Location: {appointment.location || "N/A"}
        </p>
      )}
      {appointment.concernType === "VIDEO_CALL" && appointment.meetingLink && (
        <p className="text-sm text-blue-500">
          🔗{" "}
          <a
            href={appointment.meetingLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Meeting
          </a>
        </p>
      )}

      <p className="text-xs text-gray-500 mt-2">
        Status: {appointment.status || "N/A"}
      </p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5">
      <Card className="shadow-lg rounded-xl">
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="text-xl">My Appointments</CardTitle>
          <Select onValueChange={setSelectedConcernType} defaultValue="ALL">
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All Types</SelectItem>
              <SelectItem value="IN_CLINIC">In Clinic</SelectItem>
              <SelectItem value="AUDIO_CALL">Audio Call</SelectItem>
              <SelectItem value="VIDEO_CALL">Video Call</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>

        <CardContent>
          {isLoading ? (
            <p className="text-gray-500">Loading appointments...</p>
          ) : (
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="history">Appointment History</TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming">
                {upcomingAppointments.length === 0 ? (
                  <p className="text-gray-500">No upcoming appointments.</p>
                ) : (
                  <div className="space-y-4">
                    {upcomingAppointments.map(renderAppointmentCard)}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="history">
                {pastAppointments.length === 0 ? (
                  <p className="text-gray-500">No past appointments.</p>
                ) : (
                  <div className="space-y-4">
                    {pastAppointments.map(renderAppointmentCard)}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserAppointments;
