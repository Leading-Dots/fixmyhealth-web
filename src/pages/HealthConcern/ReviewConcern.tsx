"use client";

import React, { useEffect, useState } from "react";
import { getHealthConcern } from "@/graphql/queries";
import { createResponse, updateHealthConcern } from "@/graphql/mutations";
import client from "@/lib/apiClient";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ConcernStatus, ResponseStatus } from "@/API";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

// Type definitions
type HealthConcern = {
  id: string;
  title: string;
  description: string;
  concernStatus: ConcernStatus;
  attachments?: string | null;
  createdAt: string;
  updatedAt: string;
  userID: string;
};

const ReviewConcern: React.FC = () => {
  const { id } = useParams<{ id: string }>() as { id: string };
  const {user} = useAuth();
  const router = useNavigate();
  const [concern, setConcern] = useState<HealthConcern | null>(null);
  const [response, setResponse] = useState<string>("");

  // Fetch concern details
  const fetchConcern = async () => {
    try {
      const result: any = await client.graphql({
        query: getHealthConcern,
        variables: { id },
      });
      setConcern(result.data.getHealthConcern);
    } catch (error) {
      console.error("Error fetching concern:", error);
      toast.error("Failed to load concern.");
    }
  };

  useEffect(() => {
    if (id) {
      fetchConcern();
    }
  }, [id]);

  // Handle concern review submission
  const handleSubmitReview = async () => {
    if (!response.trim()) {
      toast.error("Response cannot be empty.");
      return;
    }
    if (!concern?.id) {
      toast.error("Invalid concern ID.");
      return;
    }
    try {
      // Step 1: Create response
      await client.graphql({
        query: createResponse,
        variables: {
          input: {
            responseText: response,
            responseStatus: ResponseStatus.REVIEWED,
            healthconcernID: concern.id,
            expertID: user?.id,
          },
        },
      });

      // Step 2: Update concern status to ANSWERED
      await client.graphql({
        query: updateHealthConcern,
        variables: {
          input: {
            id: concern?.id,
            concernStatus: ConcernStatus.ANSWERED
          },
        },
      });
      toast.success("Concern reviewed successfully!");
      router("/assigned-concerns");
    } catch (error) {
      console.error("Error updating concern:", error);
      toast.error("Failed to submit review.");
    }
  };

  if (!concern) {
    return <p className="text-center text-gray-500">Loading concern...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">{concern.title}</h1>
      <p className="text-gray-700 mb-4">{concern.description}</p>
      {concern.attachments && (
        <a
          href={concern.attachments}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline mb-4 block"
        >
          View Attached Report
        </a>
      )}

      {/* Response Textarea */}
      <Textarea
        className="w-full mb-4"
        placeholder="Write your response here..."
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      />

      <Button onClick={handleSubmitReview} className="w-full bg-primary hover:bg-secondary">
        Submit Review
      </Button>
    </div>
  );
};

export default ReviewConcern;
