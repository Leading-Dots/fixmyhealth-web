import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import client from "@/lib/apiClient";
import { createHealthConcern } from "@/graphql/mutations";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TimeSlotPicker } from "@/components/ui/time-slot-picker";
import { ConcernStatus, ConcernType } from "@/API";
import { useAuth } from "@/hooks/useAuth";
import { uploadPatientReports } from "@/lib/storage";

const PublicHealthConcern: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    attachment: null as File | null,
    concernType: ConcernType.TEXT,
    preferredDate: "",
    preferredTimeSlot: "",
  });
  
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = useCallback((field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = async () => {
    if (!formData.title || !formData.description) {
      alert("Please fill in required fields");
      return;
    }

    setSubmitting(true);
    try {
      let attachmentUrl = null;

      if (formData.attachment) {
        attachmentUrl = await uploadPatientReports(
          formData.attachment,
          user?.id
        );
      }

      const input = {
        title: formData.title,
        description: formData.description,
        concernStatus: ConcernStatus.PENDING,
        concernType: formData.concernType,
        attachments: attachmentUrl,
        preferredDate: formData.preferredDate || undefined,
        preferredTimeSlot: formData.preferredTimeSlot || undefined,
        userID: user?.id,
      };

      await client.graphql({
        query: createHealthConcern,
        variables: { input },
      });

      navigate("-1");
    } catch (error) {
      console.error("Failed to submit health concern:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const isCallConsultation =
    formData.concernType === ConcernType.AUDIO_CALL ||
    formData.concernType === ConcernType.VIDEO_CALL;

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2 mb-6">
        <h2 className="text-3xl">Ask a Health Concern</h2>
        <p className="text-gray-600 text-base">
          One of our experts will review your concern and respond soon
        </p>
      </div>

      <div className="space-y-2">
        <Label>Title</Label>
        <Input
          value={formData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          placeholder="Enter your concern title"
          required
        />
      </div>

      <div className="space-y-2">
        <Label>Description</Label>
        <Textarea
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          placeholder="Describe your concern in detail"
          required
        />
      </div>

      <div className="space-y-2">
        <Label>Attachments</Label>
        <Input
          type="file"
          accept="image/*,application/pdf"
          onChange={(e) =>
            handleInputChange("attachment", e.target.files?.[0] || null)
          }
        />
      </div>

      <div className="space-y-2">
        <Label>How would you like to consult?</Label>
        <Select
          value={formData.concernType}
          onValueChange={(value) => handleInputChange("concernType", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select consultation method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ConcernType.TEXT}>Text</SelectItem>
            <SelectItem value={ConcernType.AUDIO_CALL}>Audio Call</SelectItem>
            <SelectItem value={ConcernType.VIDEO_CALL}>Video Call</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {isCallConsultation && (
        <>
          <div className="space-y-2">
            <Label>Preferred Date</Label>
            <Input
              type="date"
              value={formData.preferredDate}
              onChange={(e) =>
                handleInputChange("preferredDate", e.target.value)
              }
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <TimeSlotPicker
            value={formData.preferredTimeSlot}
            onChange={(val) => handleInputChange("preferredTimeSlot", val)}
          />
        </>
      )}

      <div className="flex gap-2 pt-4">
        <Button
          type="button"
          className="w-full"
          variant="outline"
          onClick={() => navigate(-1)}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          className="w-full bg-primary hover:bg-secondary text-white"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Submit Concern"}
        </Button>
      </div>
    </div>
  );
};

export default PublicHealthConcern;
