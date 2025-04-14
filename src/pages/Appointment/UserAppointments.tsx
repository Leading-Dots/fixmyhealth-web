"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import client from "@/lib/apiClient";
import { listAppointments } from "@/graphql/queries";
import { updateAppointment } from "@/graphql/mutations";
import { useAuth } from "@/hooks/useAuth";
import { ConcernStatus } from "@/API";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Appointment = {
  id: string;
  concernType?: string | null;
  concernStatus?: ConcernStatus;
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
  expert: {
    firstName?: string;
    lastName?: string;
    profilePictureUrl?: string;
  } | null;  
  user: {
    firstName?: string;
    lastName?: string;
    profilePictureUrl?: string;
  } | null;
};

const UserAppointments: React.FC = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tab, setTab] = useState<"upcoming" | "history">("upcoming");
  const [filterType, setFilterType] = useState<string>("ALL");

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
        concernStatus: item.concernStatus || ConcernStatus.PENDING,
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
        expert: item.expert
          ? {
              firstName: item.expert.firstName || "",
              lastName: item.expert.lastName || "",
              profilePictureUrl: item.expert.profilePictureUrl || "",
            }
          : null,
        user: item.user
        ? {
            firstName: item.user.firstName || "",
            lastName: item.user.lastName || "",
            profilePictureUrl: item.user.profilePictureUrl || "",
          }
        : null,
        __typename: "Appointment",
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

  const updateConcernStatus = async (id: string, newStatus: ConcernStatus) => {
    try {
      await client.graphql({
        query: updateAppointment,
        variables: {
          input: {
            id,
            concernStatus: newStatus,
          },
        },
      });

      setAppointments((prev) =>
        prev.map((appt) =>
          appt.id === id ? { ...appt, concernStatus: newStatus } : appt
        )
      );
    } catch (error) {
      console.error("Error updating concern status:", error);
    }
  };

  const filteredAppointments = appointments.filter((appt) => {
    const upcoming = isUpcoming(appt.appointmentDateTime);
    const matchesTab = tab === "upcoming" ? upcoming : !upcoming;
    const matchesFilter =
      filterType === "ALL" || appt.concernType === filterType;
    return matchesTab && matchesFilter;
  });

  return (
    <div className="mx-auto ">
      <div className="flex justify-between items-center mb-4">
        <div className="space-x-2">
          <button
            onClick={() => setTab("upcoming")}
            className={`px-4 py-2 rounded ${
              tab === "upcoming"
                ? "bg-secondary text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setTab("history")}
            className={`px-4 py-2 rounded ${
              tab === "history"
                ? "bg-secondary text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            History
          </button>
        </div>

        <select
          className="border px-2 py-1 rounded"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="ALL">All</option>
          <option value="IN_CLINIC">In Clinic</option>
          <option value="AUDIO_CALL">Audio Call</option>
          <option value="VIDEO_CALL">Video Call</option>
        </select>
      </div>

      <Card className="shadow-lg rounded-xl">
        <CardContent className="pt-6">
          {isLoading ? (
            <p className="text-gray-500">Loading appointments...</p>
          ) : filteredAppointments.length === 0 ? (
            <p className="text-gray-500">No appointments found.</p>
          ) : (
            <div className="space-y-4">
              {filteredAppointments.map((appointment) => {
                const upcoming = isUpcoming(appointment.appointmentDateTime);                
                const isDoctor = user?.role === "doctor";
                const person = isDoctor ? appointment?.user : appointment?.expert;

                let cardClasses = "p-4 rounded-lg border transition ";
                if (appointment.concernStatus === "PENDING") {
                  cardClasses += "border-yellow-400";
                } else if (appointment.concernStatus === "ANSWERED") {
                  cardClasses += "border-green-400";
                } else if (appointment.concernStatus === "CLOSED") {
                  cardClasses += "border-gray-400";
                } else {
                  cardClasses += "border-gray-300";
                }

                return (
                  <div key={appointment.id} className={cardClasses}>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={person?.profilePictureUrl}
                          alt="Doctor"
                        />
                        <AvatarFallback>
                          {person?.firstName?.[0] ?? "D"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-sm">
                      {user?.role === "doctor" ? "Patient:" : "Appointment with:"}
                      <p>
                      {user?.role === "doctor"
                        ? `${appointment.user?.firstName} ${appointment.user?.lastName}`
                        : `Dr. ${appointment.expert?.firstName} ${appointment.expert?.lastName}`}
                    </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-2 mt-2">
                      <h3 className="text-lg font-semibold capitalize">
                        {appointment.concernType?.replace("_", " ") || "N/A"}
                      </h3>
                      <Badge
                        className={`${
                          isUpcoming(appointment.appointmentDateTime) &&
                          appointment.concernStatus === "PENDING"
                            ? "bg-green-500 text-white hover:bg-green-500"
                            : "bg-gray-500 text-white hover:bg-gray-500"
                        }`}
                      >
                        {isUpcoming(appointment.appointmentDateTime) &&
                        appointment.concernStatus === "PENDING"
                          ? "Upcoming"
                          : "Past"}
                      </Badge>
                    </div>

                    <p className="text-sm text-gray-700">
                      📅{" "}
                      {appointment.appointmentDateTime
                        ? new Date(
                            appointment.appointmentDateTime
                          ).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : "N/A"}
                    </p>
                    <p className="text-sm text-gray-700">
                      ⏰ {appointment.startTime || "N/A"} -{" "}
                      {appointment.endTime || "N/A"}
                    </p>

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

                    <div className="text-xs text-gray-600 mt-2">
                      <span className="font-medium">Concern Status:</span>{" "}
                      {user?.role === "doctor" &&
                      appointment.concernStatus !== "CLOSED" ? (
                        <select
                          value={appointment.concernStatus ?? "PENDING"}
                          onChange={(e) =>
                            updateConcernStatus(
                              appointment.id,
                              e.target.value as ConcernStatus
                            )
                          }
                          className="ml-2 px-2 py-1 border rounded text-xs"
                        >
                          <option value="PENDING">Pending</option>
                          <option value="ANSWERED">Answered</option>
                          <option value="CLOSED">Closed</option>
                        </select>
                      ) : (
                        <span className="ml-1">
                          {appointment.concernStatus}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserAppointments;
