import React, { useEffect, useState } from "react";
import { listHealthConcerns } from "@/graphql/queries";
import client from "@/lib/apiClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import { UserCheck } from "lucide-react";
import { ConcernStatus } from "@/API";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const [concerns, setConcerns] = useState<HealthConcern[]>([]);

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

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Public Concerns</h2>
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
              <p className="text-sm text-gray-600">{concern.title}</p>
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
          <Button variant="outline">
            <UserCheck /> Assign to Self
          </Button>
        </Card>
      ))}

      {concerns.length === 0 && (
        <p className="text-center text-gray-500">No Public concerns found.</p>
      )}
    </div>
  );
};

export default UnassignedHealthConcerns;
