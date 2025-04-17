import React, { useEffect, useState } from "react";
import {
  healthConcernsByUserID,
  getExpert,
  responsesByHealthconcernID,
} from "@/graphql/queries";
import client from "@/lib/apiClient";
import { useAuth } from "@/hooks/useAuth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ConcernStatus, ResponseStatus } from "@/API";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

// Type definitions
type HealthConcern = {
  id: string;
  title: string;
  description: string;
  concernStatus: ConcernStatus;
  attachments?: string | null;
  createdAt: string;
  updatedAt: string;
  expertId?: string | null; 
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
type ExpertDetails = {
  id: string;
  firstName: string;
  lastName: string;
  introduction?: string | null;
  profilePictureUrl?: string | null;
  Specialization?: string | null;
};

const MyHealthConcern: React.FC = () => {
  const { user } = useAuth();
  const router = useNavigate();
  const [concerns, setConcerns] = useState<HealthConcern[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedResponseId, setExpandedResponseId] = useState<string | null>(
    null
  );
  const [responses, setResponses] = useState<{
    [key: string]: Response | null;
  }>({});
  const [activeTab, setActiveTab] = useState<ConcernStatus>(
    ConcernStatus.PENDING
  );
  const [expandedExpertId, setExpandedExpertId] = useState<string | null>(null);
  const [expertDetails, setExpertDetails] = useState<{
    [key: string]: ExpertDetails | null;
  }>({});

  // Fetch health concerns based on status
  const fetchConcerns = async (status?: ConcernStatus) => {
    setLoading(true);
    try {
      const result: any = await client.graphql({
        query: healthConcernsByUserID,
        variables: {
          userID: user?.id,
          filter: {
            concernStatus: { eq: status },
          },
        },
      });

      setConcerns(result.data.healthConcernsByUserID.items || []);
    } catch (error) {
      console.error("Error fetching concerns:", error);
      toast.error("Failed to load concerns.");
    } finally {
      setLoading(false);
    }
  };

  // Load pending concerns by default
  useEffect(() => {
    if (user?.id) {
      fetchConcerns(ConcernStatus.PENDING);
    }
  }, [user]);

  // Fetch response by health concern ID
  const fetchResponseByConcernId = async (concernId: string) => {
    if (responses[concernId]) {
      setExpandedResponseId(
        expandedResponseId === concernId ? null : concernId
      );
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
      setExpandedResponseId(concernId);
    } catch (error) {
      console.error("Error fetching response:", error);
      toast.error("Failed to load response.");
    }
  };

  // Handle tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab as ConcernStatus);
    if (tab === "HISTORY") {
      // Fetch all concerns for Concern History
      fetchConcerns();
    } else {
      // Fetch filtered concerns for other tabs
      fetchConcerns(tab as ConcernStatus);
    }
  };

  // Get badge color based on concern status
  const getBadgeColor = (status: ConcernStatus) => {
    switch (status) {
      case ConcernStatus.PENDING:
        return "bg-yellow-100 text-yellow-700 border-yellow-400 hover:bg-yelllow-100"; 
      case ConcernStatus.ANSWERED:
        return "bg-green-100 text-green-700 border-green-400 hover:bg-green-100";
      default:
        return "bg-gray-100 text-gray-700 border-gray-400 hover:bg-gray-100";
    }
  };

  // Fetch expert details by ID
  const fetchExpertDetails = async (expertId: string, concernId: string) => {
    if (expertDetails[concernId]) {
      setExpandedExpertId(expandedExpertId === concernId ? null : concernId);
      return; // If already loaded, just toggle
    }

    try {
      const result: any = await client.graphql({
        query: getExpert,
        variables: { id: expertId },
      });

      setExpertDetails((prev) => ({
        ...prev,
        [concernId]: result.data.getExpert || null,
      }));

      setExpandedExpertId(concernId);
    } catch (error) {
      console.error("Error fetching expert details:", error);
      toast.error("Failed to load expert details.");
    }
  };

  // Navigate to expert detail page
  const handleExpertClick = (expertId: string) => {
    router(`/expert-detail/${expertId}`);
  };

  return (
    <div className="mx-auto">
      {/* Tabs Navigation */}
      <Tabs
        defaultValue="PENDING"
        value={activeTab}
        onValueChange={handleTabChange}
      >
        <TabsList className="flex justify-center gap-2">
          <TabsTrigger value="PENDING">Pending Concerns</TabsTrigger>
          <TabsTrigger value="ANSWERED">Reviewed Concerns</TabsTrigger>
          <TabsTrigger value="HISTORY">Concern History</TabsTrigger>
        </TabsList>

        {/* Tabs Content */}
        <TabsContent value={activeTab}>
          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
            </div>
          ) : concerns.length === 0 ? (
            <div className="text-center text-gray-500 mt-5">
              No {activeTab.toLowerCase()} concerns found.
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
                      <p className="text-xs text-gray-500">
                        Concern ID: {concern.id}
                      </p>
                    </div>
                    {/* Status Badge */}
                    <div className="flex items-center gap-2">
                      <Badge
                        className={`px-2 py-1 text-xs font-medium rounded-full border ${getBadgeColor(
                          concern.concernStatus
                        )}`}
                      >
                        {concern.concernStatus === ConcernStatus.PENDING
                          ? "Pending"
                          : "Reviewed"}
                      </Badge>
                      {!concern?.expertId && (
                        <Badge className="bg-gray-100 text-gray-700 border-gray-400 hover:bg-gray-100">
                          Unassigned
                        </Badge>
                      )}
                    </div>
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

                    {/* Button to View Expert Details */}
                    {concern?.expertId && (
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() =>
                          fetchExpertDetails(
                            concern.expertId!,
                            concern.id
                          )
                        }
                      >
                        {expandedExpertId === concern.id
                          ? "Hide Expert"
                          : "View Expert"}
                      </Button>
                    )}

                    {/* Expert Details Section */}
                    {expandedExpertId === concern.id &&
                      expertDetails[concern.id] && (
                        <div
                          className="p-4 mt-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition"
                          onClick={() =>
                            handleExpertClick(expertDetails[concern.id]!.id)
                          }
                        >
                          <h3 className="text-lg font-semibold mb-2">Expert</h3>
                          <div className="flex items-center gap-4">
                            {expertDetails[concern.id]?.profilePictureUrl ? (
                              <img
                                src={
                                  expertDetails[concern.id]
                                    ?.profilePictureUrl || undefined
                                }
                                alt="Expert"
                                className="w-12 h-12 rounded-full"
                              />
                            ) : (
                              <div className="w-12 h-12 rounded-full bg-gray-300" />
                            )}
                            <div>
                              <p className="text-sm font-medium">
                                {expertDetails[concern.id]?.firstName}{" "}
                                {expertDetails[concern.id]?.lastName}
                              </p>
                              <p className="text-xs text-gray-500">
                                {expertDetails[concern.id]?.Specialization ||
                                  "Specialization not specified"}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">
                            {expertDetails[concern.id]?.introduction ||
                              "No introduction available."}
                          </p>
                        </div>
                      )}

                    {/* Show response button only for answered concerns */}
                    {concern.concernStatus === ConcernStatus.ANSWERED && (
                      <Button
                        variant="outline"
                        className="w-full mt-2"
                        onClick={() => fetchResponseByConcernId(concern.id)}
                      >
                        {expandedResponseId === concern.id
                          ? "Hide Response"
                          : "View Response"}
                      </Button>
                    )}
                    {/* Show response if expanded */}
                    {expandedResponseId === concern.id &&
                      responses[concern.id] && (
                        <div className="p-4 rounded-lg mt-4 border">
                          <h4 className="text-md font-semibold">
                            Expert's Response:
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

export default MyHealthConcern;
