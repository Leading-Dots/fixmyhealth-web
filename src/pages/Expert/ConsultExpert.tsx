import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { createHealthConcern, createReport } from "@/graphql/mutations";
import client from "@/lib/apiClient";
import { useAuth } from "@/hooks/useAuth";
import { ConcernStatus } from "@/API";
import { uploadPatientReports } from "@/lib/storage";

const ConsultExpert: React.FC = () => {
  const { user } = useAuth();
  const { id } = useParams<{ id: string }>(); // Get expert ID from URL
  const navigate = useNavigate();
  const [concern, setConcern] = useState("");
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  // Handle file change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      let attachmentUrl = null;

      if (files.length === 1) {
        attachmentUrl = await uploadPatientReports(files[0], user?.id);
      }
      const healthConcernResponse = await client.graphql({
        query: createHealthConcern,
        variables: {
          input: {
            title: title,
            description: concern,
            attachments: attachmentUrl,
            userID: user?.id,
            healthConcernHealthConcernExpertId: id,
            concernStatus: ConcernStatus.PENDING, // Default status
          },
        },
      });

      const healthConcernId =
        healthConcernResponse?.data?.createHealthConcern?.id;

      // If a file is uploaded, create report after health concern
      if (files.length === 1 && healthConcernId) {
        await client.graphql({
          query: createReport,
          variables: {
            input: {
              fileUrl: attachmentUrl,
              fileName: files[0].name,
              fileType: files[0].type,
              userID: user?.id,
              healthConcernID: healthConcernId, // Link report to created health concern
            },
          },
        });
      }
      navigate(`/expert-detail/${id}`);
    } catch (error) {
      console.error("Error submitting concern:", error);
      toast.error("Failed to submit concern. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-5">
      <Card className="shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Consult Expert</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title*/}
            <div>
              <Label htmlFor="notes" className="text-sm font-semibold">
                Title
              </Label>
              <Input
                id="notes"
                placeholder="Add title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            {/* Health Concern Input */}
            <div>
              <Label htmlFor="concern" className="text-sm font-semibold">
                Health Concern
              </Label>
              <Textarea
                id="concern"
                rows={4}
                placeholder="Describe your health concern..."
                value={concern}
                onChange={(e) => setConcern(e.target.value)}
                required
              />
            </div>

            {/* File Upload */}
            <div>
              <Label htmlFor="files" className="text-sm font-semibold">
                Upload Reports / Images
              </Label>
              <Input
                id="files"
                type="file"
                multiple
                accept=".jpg, .png, .pdf"
                onChange={handleFileChange}
              />
              {files.length > 0 && (
                <p className="text-sm text-gray-500 mt-2">
                  {files.length} file(s) selected
                </p>
              )}
            </div>

            {/* Cancel / Submit Button */}
            <div className="flex gap-2">
              <Button
                type="button"
                className="w-full"
                variant="outline"
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-secondary text-white"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Concern"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConsultExpert;
