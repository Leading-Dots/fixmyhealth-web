import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import client from "@/lib/apiClient";
import { healthConcernsByUserID } from "@/graphql/queries";
import { ConcernStatus, HealthConcern } from "@/API";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";

const HealthConcernsSection = () => {
  const { user } = useAuth();
  const [concerns, setConcerns] = useState<HealthConcern[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchConcerns = async () => {
      try {
        const res: any = await client.graphql({
          query: healthConcernsByUserID,
          variables: {
            userID: user?.id,
            limit: 3,
          },
        });

        setConcerns(res.data.healthConcernsByUserID.items || []);
      } catch (error) {
        console.error("Error fetching concerns", error);
      }
    };

    fetchConcerns();
  }, []);

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
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Your Recent Health Concerns</h2>
        <Button
          variant="outline"
          className="text-secondary border-sky-400 hover:bg-sky-50"
          onClick={() => navigate("/public/ask-concern")}
        >
          Ask Your Health Concern
        </Button>
      </div>

      {/* Horizontal Row of Cards */}
      <div className="flex flex-row gap-4 overflow-x-auto">
        {concerns.length === 0 ? (
          <div className="text-sm text-muted-foreground">
            No pending health concerns.
          </div>
        ) : (
          concerns.map((concern) => (
            <Card
              key={concern.id}
              className="min-w-[250px] max-w-[300px] h-20 border-2 border-grey rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              <p className="font-medium text-sm truncate">{concern.title}</p>
              <p className="text-xs text-muted-foreground truncate">
                <Badge
                  className={`px-2 py-0.5 text-xs font-medium rounded-full border ${getBadgeColor(
                    concern.concernStatus as ConcernStatus
                  )}`}
                >
                  {concern.concernStatus}
                </Badge>
              </p>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default HealthConcernsSection;
