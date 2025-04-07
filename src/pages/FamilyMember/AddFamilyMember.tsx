"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import client from "@/lib/apiClient";
import { createFamilyMember, updateFamilyMember } from "@/graphql/mutations";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate, useSearchParams } from "react-router-dom";

interface AddFamilyMemberProps {
  editData?: {
    id: string;
    firstName?: string;
    lastName?: string;
    weight?: number;
    height?: number;
    dob?: string;
    relation?: string;
  };
}

const AddFamilyMember: React.FC<AddFamilyMemberProps> = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Convert to native URLSearchParams object
  const params = new URLSearchParams(searchParams);

  const editMode = Boolean(params.get("edit"));
  const memberData = params.get("data")
    ? JSON.parse(params.get("data")!)
    : null;

  const [form, setForm] = useState({
    firstName: memberData?.firstName || "",
    lastName: memberData?.lastName || "",
    weight: memberData?.weight || "",
    height: memberData?.height || "",
    dob: memberData?.dob || "",
    relation: memberData?.relation || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!user?.id) return;

      if (editMode) {
        await client.graphql({
          query: updateFamilyMember,
          variables: {
            input: {
              id: memberData.id,
              ...form,
              weight: parseFloat(form.weight as any),
              height: parseFloat(form.height as any),
            },
          },
        });
      } else {
        await client.graphql({
          query: createFamilyMember,
          variables: {
            input: {
              ...form,
              userID: user.id,
              weight: parseFloat(form.weight as any),
              height: parseFloat(form.height as any),
            },
          },
        });
      }
      navigate("/family-member");
    } catch (err) {
      console.error("Error saving family member:", err);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <Card>
        <CardHeader>
          <CardTitle>
            {editMode ? "Edit" : "Add"} Family Member Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="dob">Date of Birth</Label>
              <Input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="relation">Relation</Label>
              <Input
                name="relation"
                value={form.relation}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                name="weight"
                type="number"
                value={form.weight}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="height">Height (cm)</Label>
              <Input
                name="height"
                type="number"
                value={form.height}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between gap-4">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => navigate("/family-member")}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="w-full bg-primary text-white hover:bg-secondary"
              >
                {editMode ? "Update" : "Add"} Member
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddFamilyMember;
