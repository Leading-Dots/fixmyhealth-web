import React, { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import client from "@/lib/apiClient";
import { listAppointments } from "@/graphql/queries";
import { ConcernStatus, ConcernType } from "@/API";
import { format } from "date-fns";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

interface Appointment {
  id: string;
  concernType: ConcernType;
  appointmentDateTime: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  expertID: string;
  userId: string;
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
  __typename: "Appointment";
}

const AppointmentSection: React.FC = () => {

  const navigate = useNavigate();
  const { user } = useAuth();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setIsLoading] = useState(true);

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

      const now = new Date();
      const items = response.data.listAppointments?.items || [];

      const mappedItems: Appointment[] = items
        .filter(
          (item: any) =>
            item.status === ConcernStatus.PENDING &&
            item.appointmentDateTime &&
            new Date(item.appointmentDateTime) >= now
        )
        .sort(
          (a: any, b: any) =>
            new Date(a.appointmentDateTime).getTime() -
            new Date(b.appointmentDateTime).getTime()
        )
        .map((item: any) => ({
          id: item.id,
          concernType: item.concernType ?? "GENERAL",
          appointmentDateTime: item.appointmentDateTime ?? "",
          startTime: item.startTime || "N/A",
          endTime: item.endTime || "N/A",
          createdAt: item.createdAt || "",
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

  if (loading) {
    return <p className="text-gray-500">Loading appointments...</p>;
  }

  if (appointments.length === 0) {
    return (
      <div className="text-center text-gray-600">
        You have no upcoming appointments.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Your Upcoming Appointments</h2>
      <div className="flex flex-row gap-4 overflow-x-auto">
        {appointments.map((appointment) => {
          const isDoctor = user?.role === "doctor";
          const person = isDoctor ? appointment?.user : appointment?.expert;

          return (
            <Card
              key={appointment.id}
              className="min-w-[280px] max-w-[320px] border-2 border-gray-200 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition duration-300 space-y-2"
              onClick={() => navigate("/my-appointments")}
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={person?.profilePictureUrl}
                    alt="User"
                  />
                  <AvatarFallback>
                    {person?.firstName?.[0] ?? "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="text-sm">                  
                  {user?.role === "doctor" ? "Patient:" : "Appointment with:"}
                  <p>
                  {user?.role === "doctor"
                    ? `${appointment.user?.firstName} ${appointment.user?.lastName}`
                    : `Dr. ${appointment.expert?.firstName} ${appointment.expert?.lastName}`}
                </p>
                  <p className="text-xs text-gray-500">
                    {appointment.concernType.replace("_", " ")} Consultation
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-700">
                <p>
                  <span className="font-medium">Date:</span>{" "}
                  {format(new Date(appointment.appointmentDateTime), "yyyy-MM-dd")}
                </p>
                <p>
                  <span className="font-medium">Time:</span>{" "}
                  {appointment.startTime} - {appointment.endTime}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AppointmentSection;
