import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { DoctorProfileFormValues, PatientProfileFormValues } from "@/lib/zod";
import { ConcernType, DayScheduleInput } from "@/API";

type ProfileData = DoctorProfileFormValues | PatientProfileFormValues | null;

const defaultSchedule: DayScheduleInput[] = [
  {
    dayOfWeek: 1,
    inClinicSlots: [],
    audioCallSlots: [],
    videoCallSlots: [],
    breakSlots: [],
    isAvailable: false,
  },
  {
    dayOfWeek: 2,
    inClinicSlots: [],
    audioCallSlots: [],
    videoCallSlots: [],
    breakSlots: [],
    isAvailable: false,
  },
  {
    dayOfWeek: 3,
    inClinicSlots: [],
    audioCallSlots: [],
    videoCallSlots: [],
    breakSlots: [],
    isAvailable: false,
  },
  {
    dayOfWeek: 4,
    inClinicSlots: [],
    audioCallSlots: [],
    videoCallSlots: [],
    breakSlots: [],
    isAvailable: false,
  },
  {
    dayOfWeek: 5,
    inClinicSlots: [],
    audioCallSlots: [],
    videoCallSlots: [],
    breakSlots: [],
    isAvailable: false,
  },
  {
    dayOfWeek: 6,
    inClinicSlots: [],
    audioCallSlots: [],
    videoCallSlots: [],
    breakSlots: [],
    isAvailable: false,
  },
  {
    dayOfWeek: 0,
    inClinicSlots: [],
    audioCallSlots: [],
    videoCallSlots: [],
    breakSlots: [],
    isAvailable: false,
  },
];

export const transformNullValues = (
  data: any,
  role: "doctor" | "patient"
): ProfileData => {
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
      mobile: data.mobile || "",
      Specialization: data.Specialization || "",
      clinicLocation: data.clinicLocation || "",
      ConsultationFee: data.ConsultationFee || 0,
      LanguageSpoken: data.LanguageSpoken || "",
      weeklySchedule: data.weeklySchedule?.length
        ? data.weeklySchedule
        : defaultSchedule,
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


export const getInitials = (
  firstName?: string | null,
  lastName?: string | null
) => {
  if (!firstName && !lastName) return "U";
  return `${firstName?.[0] || ""}${lastName?.[0] || ""}`;
};

export const formatTime = (date: Date) => {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export const calculateAge = (dob: string): number => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

export const generateMeetingLink = async (concernType: ConcernType): Promise<string> => {
  if (
    concernType === ConcernType.AUDIO_CALL ||
    concernType === ConcernType.VIDEO_CALL
  ) {
    const type = concernType === ConcernType.AUDIO_CALL ? "audio" : "video";
    return `https://meeting.example.com/${type}/${Date.now()}`;
  }
  return "";
};


