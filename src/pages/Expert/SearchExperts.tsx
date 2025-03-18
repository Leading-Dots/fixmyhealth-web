import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { listExperts } from "@/graphql/queries";
import client from "@/lib/apiClient";
import { Expert } from "@/API";

// Fetch all experts
const fetchExperts = async (): Promise<Expert[]> => {
  try {
    const response = await client.graphql({
      query: listExperts,
    });

    return response.data.listExperts.items || [];
  } catch (error) {
    console.error("Error fetching experts:", error);
    return [];
  }
};

export default function SearchExperts() {
  const [experts, setExperts] = useState<Expert[]>([]);
  const [filteredExperts, setFilteredExperts] = useState<Expert[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function getExperts() {
      try {
        const data = await fetchExperts();
        setExperts(data);
        setFilteredExperts(data);
      } catch (error) {
        console.error("Error fetching experts:", error);
      }
    }
    getExperts();
  }, []);

  useEffect(() => {
    const filtered = experts.filter((expert) =>
      `${expert?.firstName} ${expert?.lastName}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setFilteredExperts(filtered);
  }, [searchQuery, experts]);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5">
      <div className="flex items-center mb-5 gap-2">
        <Input
          placeholder="Search by First or Last Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="outline">
          <Search className="h-5 w-5" />
        </Button>
      </div>

      {filteredExperts.length === 0 ? (
        <p className="text-center text-gray-500">No experts found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredExperts.map((expert) => (
            <Card key={expert?.id} className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>
                  {expert?.firstName} {expert?.lastName}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  {expert?.experience
                    ? `${expert.experience} years of experience`
                    : "Experience not provided"}
                </p>
                <p className="text-sm text-gray-600">
                  {expert?.education || "Education not provided"}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
