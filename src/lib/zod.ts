import { Specialization, DayScheduleInput } from "@/API";
import * as z from "zod";

const dayScheduleSchema = z.object({
  dayOfWeek: z.number().optional(),
  inClinicSlots: z
    .array(
      z
        .object({
          startTime: z.string().optional(),
          endTime: z.string().optional(),
        })
        .nullable()
    )
    .nullable()
    .optional(),
  audioCallSlots: z
    .array(
      z
        .object({
          startTime: z.string().optional(),
          endTime: z.string().optional(),
        })
        .nullable()
    )
    .nullable()
    .optional(),
  videoCallSlots: z
    .array(
      z
        .object({
          startTime: z.string().optional(),
          endTime: z.string().optional(),
        })
        .nullable()
    )
    .nullable()
    .optional(),
});

export const DoctorProfileFormSchema = z.object({
  // Step 1
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  mobile: z
    .string()
    .regex(/^\d{10}$/, "Invalid mobile number")
    .optional(),
  introduction: z
    .string()
    .min(10, "Introduction must be at least 10 characters"),
  profilePictureUrl: z
    .union([z.string().url("Invalid website url"), z.string().length(0)])
    .optional(),

  // Step 2
  experience: z.string().min(1, "Experience is required"),
  education: z.string().min(1, "Education is required"),
  clinicLocation: z.string().optional(),
  ConsultationFee: z.preprocess((val) => {
    if (val === "" || val === null || val === undefined) return 0;
    const num = Number(val);
    return isNaN(num) ? undefined : num;
  }, z.number({ invalid_type_error: "It must be a number." }).min(0, "It cannot be negative.").optional()),
  Specialization: z.custom<Specialization>(
    (val) => {
      if (!val || (typeof val === "string" && val.trim() === "")) {
        return false;
      }
      return true;
    },
    {
      message: "Specialization is required",
    }
  ),
  LanguageSpoken: z.string(),

  //step 3
  weeklySchedule: z.array(dayScheduleSchema).nullable().optional(),
});

export const PatientProfileFormSchema = z.object({
  // Step 1
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().regex(/^\d{10}$/, "Invalid mobile number"),
  profilePictureUrl: z
    .union([z.string().url("Invalid website url"), z.string().length(0)])
    .optional(),
  address: z
    .string()
    .min(4, "Address must be at least 4 characters")
    .optional()
    .or(z.literal("")),

  //Step 2
  dob: z.string().optional().or(z.literal("")),
  height: z.preprocess((val) => {
    if (val === "" || val === null || val === undefined) return 0;
    const num = Number(val);
    return isNaN(num) ? undefined : num;
  }, z.number({ invalid_type_error: "Height must be a number." }).min(0, "Height cannot be negative.").optional()),

  weight: z.preprocess((val) => {
    if (val === "" || val === null || val === undefined) return 0;
    const num = Number(val);
    return isNaN(num) ? undefined : num;
  }, z.number({ invalid_type_error: "Weight must be a number." }).min(0, "Weight cannot be negative.").optional()),
});

const getZodSchema = (role: "doctor" | "patient") => {
  if (role === "doctor") {
    return DoctorProfileFormSchema;
  } else {
    return PatientProfileFormSchema;
  }
};
const getInitialValues = (role: "doctor" | "patient") => {
  if (role === "doctor") {
    return {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      education: "",
      introduction: "",
      profilePictureUrl: "",
      experience: "",
      Specialization: undefined,
      ConsultationFee: 0,
      LanguageSpoken: "",
      weeklySchedule: null,
    };
  } else {
    return {
      firstName: "",
      lastName: "",
      email: "",
      dob: null,
      mobile: "",
      address: "",
      height: null,
      weight: null,
      subscriptionStatus: "",
      profilePictureUrl: "",
    };
  }
};

export type DoctorProfileFormValues = z.infer<typeof DoctorProfileFormSchema>;
export type PatientProfileFormValues = z.infer<typeof PatientProfileFormSchema>;

export const getProfileFormSchema = (role: "doctor" | "patient") => {
  return {
    schema: getZodSchema(role),
    initialValues: getInitialValues(role),
  };
};
