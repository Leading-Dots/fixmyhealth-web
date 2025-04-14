import React, { useEffect, useState } from "react";
import { listHealthConcerns } from "@/graphql/queries";
import client from "@/lib/apiClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import { UserCheck } from "lucide-react";
import { ConcernStatus, ConcernType } from "@/API";
import { useNavigate } from "react-router-dom";
import { showToast } from "@/lib/toast";
import { createAppointment, deleteHealthConcern, updateHealthConcern } from "@/graphql/mutations";
import { generateMeetingLink } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { del } from "aws-amplify/api";
import { ConfirmModal } from "../common/ConfirmModal";

interface HealthConcern {
  id: string;
  title: string;
  description: string;
  concernStatus?: ConcernStatus | null;
  attachments?: string | null;
  createdAt: string;
  userID: string;
  concernType: string;
  preferredDate?: string;
  preferredTimeSlot?: string;
  user?: {
    firstName?: string;
    lastName?: string;
    profilePictureUrl?: string;
  };
}

const UnassignedHealthConcerns: React.FC = () => {

  const { user } = useAuth();
  const navigate = useNavigate();
  const [concerns, setConcerns] = useState<HealthConcern[]>([]);  
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedConcern, setSelectedConcern] = useState<HealthConcern | null>(null);


  useEffect(() => {
    fetchConcerns();
  }, []);

  const fetchConcerns = async () => {
    try {
      const response = await client.graphql({
        query: listHealthConcerns,
        variables: {
          filter: {
            expertId: { attributeExists: false },
          },
        },
      });

      const items = response.data.listHealthConcerns?.items ?? [];

      const mapped: HealthConcern[] = items.map((item: any) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        concernStatus: item.concernStatus ?? null,
        attachments: item.attachments ?? null,
        createdAt: item.createdAt,
        userID: item.userID,
        concernType: item.concernType,
        preferredDate: item.preferredDate ?? undefined,
        preferredTimeSlot: item.preferredTimeSlot ?? undefined,
        user: {
          firstName: item?.user?.firstName || "",
          lastName: item?.user?.lastName || "",
          profilePictureUrl: item?.user?.profilePictureUrl || "",
        },
      }));

      setConcerns(mapped);
    } catch (error) {
      console.error("Error fetching concerns:", error);
    }
  };

  const handleAssignToSelf = async (concern: HealthConcern) => {
    setShowConfirm(true);
    try {  
      if (
        concern.concernType === "AUDIO_CALL" ||
        concern.concernType === "VIDEO_CALL"
      ) {

        const meetingLink = await generateMeetingLink(
          concern.concernType as ConcernType
        );

        let startTime = "";
        let endTime = "";

        if (concern?.preferredTimeSlot && concern?.preferredTimeSlot.includes(" - ")) {
          const [start, end] = concern?.preferredTimeSlot.split(" - ");
          startTime = start.trim();
          endTime = end.trim();
        }

        const appointmentDateTime = new Date(
          `${concern.preferredDate}T${startTime}:00Z`
        ).toISOString();  
  
        const input = {
          appointmentDateTime,
          concernType: concern.concernType as ConcernType,
          title: concern.title,
          description: concern.description,
          expertID: user.id,
          userId: concern.userID,
          status: ConcernStatus.PENDING,
          phoneNumber: "",
          location: user?.clinicLocation || "", 
          meetingLink,
          healthConcernID: concern.id,
          startTime,
          endTime
        };
  
        const response = await client.graphql({
          query: createAppointment,
          variables: { input },
        });
  
        if (response.data.createAppointment) {
          await deleteHealthConcernById(concern.id);
          showToast( "Appointment created.", "success");
          navigate("/my-appointments");
        }
      }else if (concern.concernType === "TEXT") {
        // Only update expertId to assign the concern
        await client.graphql({
          query: updateHealthConcern,
          variables: {
            input: {
              id: concern.id,
              expertId: user.id,
            },
          },
        });  
        showToast("Health concern assigned to you successfully.", "success");
        navigate("/assigned-concerns");
      }
    } catch (error) {
      console.error("Assign to self error:", error);
      showToast("Failed to assign concern.","error");
    }finally{
      setShowConfirm(false);
    }
  };
  
  const deleteHealthConcernById = async (id: string) => {
    try {
      await client.graphql({
        query: deleteHealthConcern,
        variables: { input: { id } },
      });
    } catch (err) {
      console.error("Error deleting concern:", err);
    }
  };
  

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Public Health Concerns</h2>
      {concerns.map((concern) => (
        <Card
          key={concern.id}
          className="flex items-center justify-between px-4 py-3 shadow-sm"
          onClick={ () => navigate(`/concern-details/${concern?.id}`)}
        >
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage
                src={concern.user?.profilePictureUrl}
                alt="Patient"
              />
              <AvatarFallback>
                {concern.user?.firstName?.[0] ?? "P"}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-lg">
                {concern.user?.firstName} {concern.user?.lastName}
              </p>
              <p className="text-sm text-gray-600">{concern.title} | {concern.concernType}</p>
              <div className="text-sm text-primary">
                <p className="font-medium">
                  {concern.preferredDate &&
                    `${format(new Date(concern.preferredDate), "yyyy-MM-dd")}`}
                </p>
                <p className="font-medium">
                  {concern?.preferredTimeSlot}
                </p>
              </div>
            </div>
          </div>
          <Button variant="outline" onClick={(e) => {
            e.stopPropagation();
            setShowConfirm(true);
            setSelectedConcern(concern);
          }}>
            <UserCheck /> Assign to Self
          </Button>
        </Card>
      ))}

      {concerns.length === 0 && (
        <p className="text-center text-gray-500">No Public concerns found.</p>
      )}
      <ConfirmModal
      open={showConfirm}
      onClose={() => setShowConfirm(false)}
      onConfirm={() => {
        if (selectedConcern) {
          handleAssignToSelf(selectedConcern);
        }
      }}
      title="Confirm Action"
      />
    </div>
  );
};

export default UnassignedHealthConcerns;
