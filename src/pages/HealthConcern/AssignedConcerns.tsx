"use client";

import React, { useEffect, useState } from "react";
import {
  listHealthConcerns,
  responsesByHealthconcernID,
  getUser,
} from "@/graphql/queries";
import client from "@/lib/apiClient";
import { useAuth } from "@/hooks/useAuth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { ConcernStatus, ResponseStatus } from "@/API";

// Type definitions for health concerns
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

// Type definitions for responses
type Response = {
  id: string;
  responseText: string;
  responseStatus: ResponseStatus;
  createdAt: string;
  healthconcernID: string;
  expertID: string;
};

// Type definition for user/patient
type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
};

const AssignedConcerns: React.FC = () => {
  const { user } = useAuth();
  const [concerns, setConcerns] = useState<HealthConcern[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("PENDING");

  // State to store expanded concern and response
  const [expandedConcernId, setExpandedConcernId] = useState<string | null>(
    null
  );
  const [responses, setResponses] = useState<{
    [key: string]: Response | null;
  }>({});

  // State to store patient details
  const [patientDetails, setPatientDetails] = useState<{
    [key: string]: User | null;
  }>({});

  // Fetch concerns assigned to this expert
  const fetchConcernsByExpert = async (status?: ConcernStatus) => {
    if (!user?.id) return;

    setLoading(true);
    try {
      const filter = status
        ? {
            healthConcernHealthConcernExpertId: { eq: user.id },
            concernStatus: { eq: status },
          }
        : {
            healthConcernHealthConcernExpertId: { eq: user.id },
          };

      const result: any = await client.graphql({
        query: listHealthConcerns,
        variables: {
          filter,
        },
      });

      setConcerns(result.data.listHealthConcerns.items || []);
    } catch (error) {
      console.error("Error fetching assigned concerns:", error);
      toast.error("Failed to load concerns.");
    } finally {
      setLoading(false);
    }
  };

  // Load pending concerns by default
  useEffect(() => {
    if (user?.id) {
      fetchConcernsByExpert(ConcernStatus.PENDING);
    }
  }, [user]);

  // Handle tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);

    if (tab === "HISTORY") {
      // Fetch all concerns for Concern History
      fetchConcernsByExpert();
    } else {
      // Fetch filtered concerns for other tabs
      fetchConcernsByExpert(tab as ConcernStatus);
    }
  };

  // Fetch response by health concern ID
  const fetchResponseByConcernId = async (concernId: string) => {
    if (responses[concernId]) {
      setExpandedConcernId(expandedConcernId === concernId ? null : concernId);
      return;
    }

    try {
      const result: any = await client.graphql({
        query: responsesByHealthconcernID,
        variables: {
          healthconcernID: concernId,
        },
      });

      const response =
        result.data.responsesByHealthconcernID.items?.[0] || null;

      setResponses((prev) => ({ ...prev, [concernId]: response }));
      setExpandedConcernId(concernId);
    } catch (error) {
      console.error("Error fetching response:", error);
      toast.error("Failed to load response.");
    }
  };

  // Fetch patient details by user ID
  const fetchPatientDetails = async (userId: string, concernId: string) => {
    if (patientDetails[concernId]) {
      setExpandedConcernId(expandedConcernId === concernId ? null : concernId);
      return;
    }

    try {
      const result: any = await client.graphql({
        query: getUser,
        variables: { id: userId },
      });

      const patient = result.data.getUser || null;

      setPatientDetails((prev) => ({ ...prev, [concernId]: patient }));
      setExpandedConcernId(concernId);
    } catch (error) {
      console.error("Error fetching patient details:", error);
      toast.error("Failed to load patient details.");
    }
  };

  // Get badge color based on concern status
  const getBadgeColor = (status: ConcernStatus) => {
    switch (status) {
      case ConcernStatus.PENDING:
        return "bg-yellow-100 text-yellow-700 border-yellow-400";
      case ConcernStatus.ANSWERED:
        return "bg-green-100 text-green-700 border-green-400";
      default:
        return "bg-gray-100 text-gray-700 border-gray-400";
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-2xl font-bold text-center mb-5">
        Assigned Health Concerns
      </h1>

      <Tabs
        defaultValue="PENDING"
        value={activeTab}
        onValueChange={handleTabChange}
      >
        <TabsList className="flex justify-center gap-2 mb-5">
          <TabsTrigger value="PENDING">Pending Concerns</TabsTrigger>
          <TabsTrigger value="ANSWERED">Reviewed Concerns</TabsTrigger>
          <TabsTrigger value="HISTORY">Concern History</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
            </div>
          ) : concerns.length === 0 ? (
            <div className="text-center text-gray-500 mt-5">
              No{" "}
              {activeTab === "HISTORY" ? "concerns" : activeTab.toLowerCase()}{" "}
              found.
            </div>
          ) : (
            <div className="space-y-4 mt-5">
              {concerns.map((concern) => (
                <Card key={concern.id} className="border rounded-lg shadow-md">
                  <CardHeader className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg font-semibold">
                        {concern.title}
                      </CardTitle>
                      <p className="text-sm text-gray-500">
                        Created on:{" "}
                        {new Date(concern.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge
                      className={`px-2 py-1 text-xs font-medium rounded-full border ${getBadgeColor(
                        concern.concernStatus
                      )}`}
                    >
                      {concern.concernStatus === ConcernStatus.PENDING
                        ? "Pending"
                        : "Reviewed"}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-gray-700">
                      {concern.description}
                    </p>

                    {concern.attachments && (
                      <a
                        href={concern.attachments}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline text-sm"
                      >
                        View Attached Report
                      </a>
                    )}

                    {/* View Patient Button */}
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() =>
                        fetchPatientDetails(concern.userID, concern.id)
                      }
                    >
                      {expandedConcernId === concern.id
                        ? "Hide Patient"
                        : "View Patient"}
                    </Button>

                    {/* Show response button only for answered concerns */}
                    {concern.concernStatus === ConcernStatus.ANSWERED && (
                      <Button
                        variant="outline"
                        className="w-full mt-2"
                        onClick={() => fetchResponseByConcernId(concern.id)}
                      >
                        {expandedConcernId === concern.id
                          ? "Hide Response"
                          : "View Response"}
                      </Button>
                    )}

                    {/* Show patient details if expanded */}
                    {expandedConcernId === concern.id &&
                      patientDetails[concern.id] && (
                        <div className="bg-gray-100 p-4 rounded-lg mt-4 border">
                          <h4 className="text-md font-semibold">
                            Patient Details:
                          </h4>
                          <p className="text-sm text-gray-700 mt-2">
                            Name: {patientDetails[concern.id]?.firstName || ""}{" "}
                            {patientDetails[concern.id]?.lastName || ""}
                          </p>
                          <p className="text-sm text-gray-700">
                            Email: {patientDetails[concern.id]?.email || "N/A"}
                          </p>
                          {patientDetails[concern.id]?.phone && (
                            <p className="text-sm text-gray-700">
                              Phone: {patientDetails[concern.id]?.phone}
                            </p>
                          )}
                        </div>
                      )}

                    {/* Show response if expanded */}
                    {expandedConcernId === concern.id &&
                      responses[concern.id] && (
                        <div className="bg-gray-100 p-4 rounded-lg mt-4 border">
                          <h4 className="text-md font-semibold">
                            Your Response:
                          </h4>
                          <p className="text-sm text-gray-700 mt-2">
                            {responses[concern.id]?.responseText ||
                              "No response available."}
                          </p>
                          <p className="text-xs text-gray-500 mt-2">
                            Responded on:{" "}
                            {new Date(
                              responses[concern.id]?.createdAt || ""
                            ).toLocaleDateString()}
                          </p>
                        </div>
                      )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AssignedConcerns;
