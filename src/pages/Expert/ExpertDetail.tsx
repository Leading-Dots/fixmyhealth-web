"use client";

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // <-- useParams and useNavigate
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  GraduationCap,
  Star,
  BadgeCheck,
  Languages,
  DollarSign,
  MapPin,
  LogIn,
} from "lucide-react";
import client from "@/lib/apiClient";
import { getExpert } from "@/graphql/queries";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

// Define the type for required properties
type ExpertDetails = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  mobile?: string | null;
  education?: string | null;
  introduction?: string | null;
  profilePictureUrl?: string | null;
  experience?: string | null;
  averageRating?: number | null;
  totalReviews?: number | null;
  profileStatus?: string | null;
  Specialization?: string | null;
  clinicLocation?: string | null;
  ConsultationFee?: number | null;
  LanguageSpoken?: string | null;
};

// Fetch expert details with required properties
const fetchExpertDetails = async (
  expertId: string
): Promise<ExpertDetails | null> => {
  try {
    const response = await client.graphql({
      query: getExpert,
      variables: { id: expertId },
    });

    return response.data.getExpert as ExpertDetails;
  } catch (error) {
    console.error("Error fetching expert details:", error);
    return null;
  }
};

const ExpertDetail: React.FC = () => {
  const { user } = useAuth();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [expert, setExpert] = useState<ExpertDetails | null>(null);

  useEffect(() => {
    async function getExpertData() {
      if (id) {
        const data = await fetchExpertDetails(id);
        if (data) {
          setExpert(data);
        }
      }
    }
    getExpertData();
  }, [id]);

  if (!expert) {
    return (
      <p className="text-center text-gray-500 mt-10">
        Loading expert details...
      </p>
    );
  }

  return (
    <div className="mx-auto">
      {/* Expert Profile Card */}
      <Card className="shadow-lg hover:shadow-xl transition rounded-xl">
        <CardHeader className="flex justify-between items-start w-full mb-4">
          {/* Avatar and Name Info */}
          <div className="flex justify-between items-start w-full">
            <div className="flex items-center gap-4">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src={expert.profilePictureUrl || "/placeholder-avatar.png"}
                  alt={`${expert.firstName} ${expert.lastName}`}
                />
                <AvatarFallback>
                  {expert?.firstName?.[0]}
                  {expert?.lastName?.[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-xl">
                  {expert.firstName} {expert.lastName}
                </CardTitle>
                <p className="text-sm text-gray-500">
                  {expert.Specialization || "Specialization not provided"}
                </p>
              </div>
            </div>

            {/* Buttons */}
            {user ? (
              <div className="flex flex-col gap-2">
                <Button
                  onClick={() => navigate(`/ask-concern/${expert.id}`)}
                  className="bg-primary text-primary-foreground hover:bg-secondary"
                >
                  Ask Concern
                </Button>
                <Button
                  onClick={() => navigate(`/book-appointment/${expert.id}`)}
                  className="bg-green-500 hover:bg-green-600"
                >
                  Book Appointment
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => navigate(`/login`)}
                className="bg-green-500 hover:bg-green-600"              >
               <LogIn className="h-5 w-5 mr-2"/>Login to ask a health concern.
              </Button>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Introduction */}
          {expert.introduction && (
            <div>
              <h3 className="text-lg font-semibold">
                About {expert?.firstName} {expert?.lastName}
              </h3>
              <p className="text-sm text-gray-600">{expert.introduction}</p>
              <Separator className="my-3" />
            </div>
          )}

          {/* Expert Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DetailItem
              icon={<Mail className="h-5 w-5 text-blue-500" />}
              label="Email"
              value={expert.email || "Not provided"}
            />
            <DetailItem
              icon={<Phone className="h-5 w-5 text-green-500" />}
              label="Mobile"
              value={expert.mobile || "Not provided"}
            />
            <DetailItem
              icon={<GraduationCap className="h-5 w-5 text-purple-500" />}
              label="Qualification"
              value={expert.education || "Not provided"}
            />
            <DetailItem
              icon={<Star className="h-5 w-5 text-yellow-500" />}
              label="Average Rating"
              value={
                expert.averageRating
                  ? `${expert.averageRating} / 5`
                  : "No ratings yet"
              }
            />
            <DetailItem
              icon={<BadgeCheck className="h-5 w-5 text-teal-500" />}
              label="Total Reviews"
              value={
                expert.totalReviews
                  ? `${expert.totalReviews} Reviews`
                  : "No reviews yet"
              }
            />
            <DetailItem
              icon={<Languages className="h-5 w-5 text-orange-500" />}
              label="Languages Spoken"
              value={expert.LanguageSpoken || "Not specified"}
            />
            <DetailItem
              icon={<DollarSign className="h-5 w-5 text-red-500" />}
              label="Consultation Fee"
              value={
                expert.ConsultationFee
                  ? `$${expert.ConsultationFee}`
                  : "Not specified"
              }
            />
            <DetailItem
              icon={<MapPin className="h-5 w-5 text-red-500" />}
              label="Clinic/Hospital Address"
              value={
                expert.clinicLocation
                  ? `${expert.clinicLocation}`
                  : "Not specified"
              }
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Reusable Detail Item component
const DetailItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string | number;
}> = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 border p-3 rounded-lg">
    <div className="shrink-0 mt-1">{icon}</div>
    <div>
      <p className="text-sm font-semibold">{label}</p>
      <p className="text-sm text-gray-600">{value}</p>
    </div>
  </div>
);

export default ExpertDetail;
