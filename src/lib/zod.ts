import * as z from "zod";

export const DoctorProfileFormSchema = z.object({
  // Step 1
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  introduction: z.string().min(10, "Introduction must be at least 10 characters"),
  profilePictureUrl: z.string().url("Unable to upload image").optional(),

  // Step 2
  experience: z.string(),
  education: z.string(),
});

export const PatientProfileFormSchema = z.object({
  // Step 1
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().min(10, "Mobile number must be at least 10 characters"),
  profilePictureUrl: z.string().url("Unable to upload image").optional(),
  address: z.string().min(4, "Address must be at least 4 characters"),
  
  //Step 2
  dob: z.string().min(4,"Date of birth must be at least 4 characters"),
  height: z.number().min(2, "Height must be at least 2 characters"),
  weight: z.number().min(2, "Weight must be at least 2 characters"),
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
      dob: "",
      mobile: "",
      education: "",
      introduction: "",
      profilePictureUrl: "",
      experience: "",
      averageRating:0.0,
      totalReviws: 0,
    };
  } else {
    return {
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      mobile:"",
      address: "",
      height: 0,
      weight: 0,
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
