import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import client from "@/lib/apiClient";
import { listFamilyMembers } from "@/graphql/queries";
import { deleteFamilyMember } from "@/graphql/mutations";
import DeleteConfirmationDialog from "@/components/common/DeleteConfirmationDialog";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { calculateAge } from "@/lib/utils";

interface FamilyMember {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  weight?: number | null;
  height?: number | null;
  dob?: string | null;
  relation?: string | null;
  userID: string;
}

const FamilyMembersPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingMember, setEditingMember] = useState<FamilyMember | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState<string | null>(null);

  useEffect(() => {
    if (user?.id) fetchFamilyMembers(user.id);
  }, [user?.id]);

  const fetchFamilyMembers = async (userId: string) => {
    setIsLoading(true);
    try {
      const response = await client.graphql({
        query: listFamilyMembers,
        variables: { filter: { userID: { eq: userId } } },
      });
      const items = response.data.listFamilyMembers?.items || [];
      setFamilyMembers(items);
    } catch (error) {
      console.error("Error fetching family members:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!memberToDelete) return;
    try {
      await client.graphql({
        query: deleteFamilyMember,
        variables: {
          input: { id: memberToDelete },
        },
      });
      setFamilyMembers((prev) => prev.filter((m) => m.id !== memberToDelete));
    } catch (err) {
      console.error("Failed to delete member:", err);
    } finally {
      setDeleteModalOpen(false);
      setMemberToDelete(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <Card>
        <CardHeader className="flex items-center justify-end">
          <div className="w-full flex justify-end items-center mb-4">
            <Button
              onClick={() => navigate("/add-family-member")}
              size="sm"
              className="bg-primary text-white hover:bg-secondary"
            >
              <Plus className="mr-1 h-4 w-4" /> Add Family Member
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <p>Loading...</p>
          ) : familyMembers.length === 0 ? (
            <p className="text-gray-500">No family members found.</p>
          ) : (
            <div className="space-y-4">
              {familyMembers.map((member) => (
                <div
                  key={member.id}
                  className="border rounded-xl p-4 flex justify-between items-center shadow-sm"
                >
                  <div>
                    <p className="font-medium">
                      {member.firstName} {member.lastName}
                    </p>
                    <p className="text-sm text-gray-600">
                      {member.relation} | Age:{" "}
                      {member.dob ? calculateAge(member.dob) + " yrs" : "N/A"}
                    </p>
                    <p className="text-sm text-gray-600">
                      Height: {member.height ? `${member.height} cm` : "_"} |
                      Weight: {member.weight ? `${member.weight} kg` : "_"}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        navigate(
                          `/add-family-member?edit=true&data=${JSON.stringify(
                            member
                          )}`
                        )
                      }
                      className="bg-primary text-white hover:bg-secondary"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => {
                        setDeleteModalOpen(true);
                        setMemberToDelete(member.id);
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
      <DeleteConfirmationDialog
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default FamilyMembersPage;
