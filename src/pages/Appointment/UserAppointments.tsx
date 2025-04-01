"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import client from "@/lib/apiClient";
import { listAppointments } from "@/graphql/queries";
import { useAuth } from "@/hooks/useAuth";

// Corrected Appointment type based on GraphQL
type Appointment = {
  id: string;
  concernType?: string | null; // Fixed concernType type
  concernStatus?: string | null;
  appointmentDateTime?: string | null; // Fixed this to handle null/undefined
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

  useEffect(() => {
    if (user?.id) {
      fetchAppointments(user.id);
    }
  }, [user?.id]);

  // Fetch appointments based on userId
  const fetchAppointments = async (userId: string) => {
    try {
      const response = await client.graphql({
        query: listAppointments,
        variables: {
          filter: { userId: { eq: userId } },
        },
      });

      const items = response.data.listAppointments?.items || [];
      console.log("Appointment items:", items);

      // Type assertion to handle nullable/undefined values
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

  // Check if appointment is upcoming or past
  const isUpcoming = (appointmentDateTime?: string | null) => {
    if (!appointmentDateTime) return false;
    const appointmentDate = new Date(appointmentDateTime);
    const currentDate = new Date();
    return appointmentDate >= currentDate;
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5">
      <Card className="shadow-lg rounded-xl">
        <CardHeader>
          <CardTitle className="text-xl">My Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <p className="text-gray-500">Loading appointments...</p>
          ) : appointments.length === 0 ? (
            <p className="text-gray-500">No appointments found.</p>
          ) : (
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className={`p-4 rounded-lg border transition ${
                    isUpcoming(appointment.appointmentDateTime)
                      ? "bg-green-100 border-green-400"
                      : "bg-yellow-100 border-yellow-400"
                  }`}
                >
                  {/* Concern Type and Status */}
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">
                      {appointment.concernType?.replace("_", " ") || "N/A"}
                    </h3>
                    <Badge
                      className={`${
                        isUpcoming(appointment.appointmentDateTime)
                          ? "bg-green-500 text-white"
                          : "bg-yellow-500 text-white"
                      }`}
                    >
                      {isUpcoming(appointment.appointmentDateTime)
                        ? "Upcoming"
                        : "Past"}
                    </Badge>
                  </div>

                  {/* Date and Time */}
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
                    ⏰ {appointment.startTime || "N/A"} -{" "}
                    {appointment.endTime || "N/A"}
                  </p>

                  {/* Location or Meeting Link */}
                  {appointment.concernType === "IN_CLINIC" && (
                    <p className="text-sm text-gray-700">
                      📍 Location: {appointment.location || "N/A"}
                    </p>
                  )}
                  {appointment.concernType === "VIDEO_CALL" &&
                    appointment.meetingLink && (
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

                  {/* Appointment Status */}
                  <p className="text-xs text-gray-500 mt-2">
                    Status: {appointment.status || "N/A"}
                  </p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserAppointments;
