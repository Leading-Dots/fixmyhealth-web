"use client";
import { useEffect, useState } from "react";
import client from "@/lib/apiClient";
import { getHealthConcern } from "@/graphql/queries";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { format } from "date-fns";
import { Loader2, UserCheck, X } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { ConcernStatus, ConcernType, HealthConcern } from "@/API";
import { ConfirmModal } from "@/components/common/ConfirmModal";
import { createAppointment, deleteHealthConcern, updateHealthConcern } from "@/graphql/mutations";
import { showToast } from "@/lib/toast";
import { generateMeetingLink } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";

export default function ConcernDetail() { 
  const { user } = useAuth();
  const navigate= useNavigate();
  const { id } = useParams<{ id: string }>() as { id: string };
  const [concern, setConcern] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);  
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedConcern, setSelectedConcern] = useState<HealthConcern | null>(null);

  useEffect(() => {
    if (id) fetchConcern(id as string);
  }, [id]);

  const fetchConcern = async (concernId: string) => {
    try {
      const res = await client.graphql({
        query: getHealthConcern,
        variables: { id: concernId },
      });
      setConcern(res.data.getHealthConcern);
    } catch (err) {
      console.error("Error fetching concern:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  if (!concern) {
    return <p className="text-center text-gray-500">Concern not found.</p>;
  }

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
    <div>      
    <Card className=" mx-auto my-6 p-4">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={concern.user?.profilePictureUrl} />
            <AvatarFallback>
              {concern.user?.firstName?.[0] ?? "P"}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-xl font-semibold">
              {concern.user?.firstName} {concern.user?.lastName}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {concern.title} | {concern.concernType}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-gray-800 font-medium">Description:</p>
        <p className="text-gray-600">{concern.description}</p>

        {concern?.preferredDate && (
        <div>
          <p className="text-gray-600">
            Preferred Date: {format(new Date(concern.preferredDate), "dd.MM.yyyy")}
          </p>
          <p className="text-gray-600">
          Preferred Time: {concern.preferredTimeSlot ? concern.preferredTimeSlot : ""}
        </p>
        </div>
          
        )}
        <div className="flex gap-4 pt-4">
          <Button variant="outline" onClick={(e) => {
            e.stopPropagation();
            setShowConfirm(true);
            setSelectedConcern(concern);
          }}><UserCheck/> Assign to Self</Button>
          <Button variant="destructive"><X/> Close Concern</Button>
        </div>
      </CardContent>
    </Card>
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
}
