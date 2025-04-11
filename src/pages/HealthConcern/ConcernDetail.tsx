"use client";
import { useEffect, useState } from "react";
import client from "@/lib/apiClient";
import { getHealthConcern } from "@/graphql/queries";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { format } from "date-fns";
import { Loader2, UserCheck, X } from "lucide-react";
import { useParams } from "react-router-dom";

export default function ConcernDetail() { 
  const { id } = useParams<{ id: string }>() as { id: string };
  const [concern, setConcern] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

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

  return (
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
          <Button variant="outline"><UserCheck/> Assign to Self</Button>
          <Button variant="destructive"><X/> Close Concern</Button>
        </div>
      </CardContent>
    </Card>
  );
}
