"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Search,
  GraduationCap,
  Briefcase,
  Layers,
  UserCircle,
} from "lucide-react"; // Import Lucide icons
import { listExperts } from "@/graphql/queries";
import client from "@/lib/apiClient";
import { Expert, Specialization } from "@/API";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SearchExperts() {
  const [experts, setExperts] = useState<Expert[]>([]);
  const [filteredExperts, setFilteredExperts] = useState<Expert[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function getExperts() {
      try {
        const queryParams = new URLSearchParams(location.search);
        const specializationParam = queryParams.get("specialization");

        const response = await client.graphql({
          query: listExperts,
          variables: specializationParam
            ? {
                filter: {
                  Specialization: { eq: specializationParam as Specialization },
                },
              }
            : {},
        });

        const fetchedExperts = response.data.listExperts.items || [];
        setExperts(fetchedExperts);
        setFilteredExperts(fetchedExperts); // initial search filter base
      } catch (error) {
        console.error("Error fetching experts:", error);
      }
    }

    getExperts();
  }, [location.search]);

  // Filter experts based on search query
  useEffect(() => {
    const filtered = experts.filter((expert) => {
      const fullName = `${expert?.firstName} ${expert?.lastName}`.toLowerCase();
      const specialization = expert?.Specialization?.toLowerCase() || "";
      const experience = String(expert?.experience || "").toLowerCase();

      return (
        fullName.includes(searchQuery.toLowerCase()) ||
        specialization.includes(searchQuery.toLowerCase()) ||
        experience.includes(searchQuery.toLowerCase())
      );
    });

    setFilteredExperts(filtered);
  }, [searchQuery, experts]);

  // Navigate to expert's profile page
  const goToExpertProfile = (id: string) => {
    router(`/expert-detail/${id}`);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-5">
      {/* Search Input Section */}
      <div className="flex items-center mb-5 gap-2">
        <Input
          placeholder="Search by Name, Experience, or Specialization"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="outline">
          <Search className="h-5 w-5" />
        </Button>
      </div>

      {/* No Experts Found */}
      {filteredExperts.length === 0 ? (
        <p className="text-center text-gray-500">No experts found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Map Through Filtered Experts */}
          {filteredExperts.map((expert) => (
            <Card
              key={expert?.id}
              className="hover:shadow-lg transition cursor-pointer"
              onClick={() => goToExpertProfile(expert?.id!)}
            >
              <CardHeader className="flex items-center gap-4">
                {/* Profile Photo */}
                {expert?.profilePictureUrl ? (
                  <img
                    src={expert?.profilePictureUrl}
                    alt={`${expert?.firstName} ${expert?.lastName}`}
                    className="w-12 h-12 rounded-full border"
                  />
                ) : (
                  <UserCircle className="w-12 h-12 text-gray-400" />
                )}
                <div>
                  <CardTitle>
                    {expert?.firstName} {expert?.lastName}
                  </CardTitle>
                  <p className="text-sm text-gray-500">
                    {expert?.Specialization || "Specialization not provided"}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                {/* Experience */}
                <div className="flex items-start gap-2 text-sm text-gray-600 mb-2">
                <div className="shrink-0 mt-1"><Briefcase className="h-4 w-4 text-blue-500" /></div> 
                  {expert?.experience
                    ? `${expert.experience} years of experience`
                    : "Experience not provided"}
                </div>

                {/* Specialization */}
                <div className="flex items-start gap-2 text-sm text-gray-600 mb-2">
                <div className="shrink-0 mt-1"> <Layers className="h-4 w-4 text-green-500" /></div> 
                  {expert?.Specialization || "Specialization not provided"}
                </div>

                {/* Education */}
                <div className="flex items-start gap-2 text-sm text-gray-600">
                <div className="shrink-0 mt-1"><GraduationCap className="h-4 w-4 text-purple-500" /></div>                  
                  {expert?.education || "Education not provided"}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
