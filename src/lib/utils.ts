import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


import { DoctorProfileFormValues, PatientProfileFormValues } from "@/lib/zod";

type ProfileData = DoctorProfileFormValues | PatientProfileFormValues | null;

export const transformNullValues = (data: any, role: "doctor" | "patient"): ProfileData => {
  if (!data) return null;

  const baseTransform = {
    firstName: data.firstName || "",
    lastName: data.lastName || "",
    email: data.email || "",
    profilePictureUrl: data.profilePictureUrl || "",
  };

  if (role === "doctor") {
    return {
      ...baseTransform,
      introduction: data.introduction || "",
      experience: data.experience || "",
      education: data.education || "",
      Specialization: data.Specialization || "",
      ConsultationFee: data.ConsultationFee || 0,
      LanguageSpoken: data.LanguageSpoken || ""
    } as DoctorProfileFormValues;
  }

  return {
    ...baseTransform,
    mobile: data.mobile || "",
    address: data.address || "",
    dob: data.dob || "",
    height: data.height || 0,
    weight: data.weight || 0,
  } as PatientProfileFormValues;
};

export const getInitials = (firstName?: string | null, lastName?: string | null) => {
  if (!firstName && !lastName) return "U";
  return `${firstName?.[0] || ""}${lastName?.[0] || ""}`;
};

export const formatTime = (date: Date) => {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}