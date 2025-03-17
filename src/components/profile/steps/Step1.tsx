import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";
import { ImageUpload } from "@/components/common/ImageUpload";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export function StepOne() {
  const form = useFormContext();
  const { user } = useAuth();
  const router = useNavigate();
  const [preview, setPreview] = useState<string>("");

  const handlePublicProfile = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Public Profile");
    const role = user?.role;
    if (role === "doctor") {
      console.log("Doctor Public Profile");
      router(`/doctor/${user?.id}`);
    } else {
      console.log("Patient Public Profile");
      router(`/patient/${user?.id}`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Profile Picture Section */}
      <div className="flex justify-center items-center space-y-2 gap-4">
        <FormField
          control={form.control}
          name="profilePictureUrl"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <ImageUpload
                  value={preview || field.value}
                  onChange={(url) => {
                    console.log("Image URL", url);
                    field.onChange(url);
                    setPreview(url);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="flex justify-center items-center space-y-2 gap-4">
        <Button variant={"ghost"} onClick={handlePublicProfile}>
          View Public Profile
        </Button>
      </div>

      {/* Name Fields Row */}
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Email Field */}
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                type="email"
                readOnly
                placeholder="john@example.com"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Conditionally Render Fields */}
      {user?.role === "doctor" ? <DoctorFields /> : <PatientFields />}
    </div>
  );
  function DoctorFields() {
    const form = useFormContext();
    return (
      <FormField
        control={form.control}
        name="introduction"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Introduction</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Tell us about yourself..."
                className="min-h-[100px]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }

  /** Patient-specific fields */
  function PatientFields() {
    const form = useFormContext();
    return (
      <>
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter your mobile number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your address"
                  className="min-h-[80px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </>
    );
  }
}
