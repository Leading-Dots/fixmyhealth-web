import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import {
  getProfileFormSchema,
  DoctorProfileFormValues,
  PatientProfileFormValues,
} from "@/lib/zod";
import { StepOne } from "./steps/Step1";
import { StepTwo } from "./steps/Step2";
import { StepThree } from "./steps/Step3";
import { UserRole } from "types";
import StepHeader from "./steps/StepHeader";
import { showToast } from "@/lib/toast";
import client from "@/lib/apiClient";
import { updateExpert, updateUser } from "@/graphql/mutations";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import {  DayScheduleInput, ProfileStatus } from "@/API";

interface ProfileFormProps {
  role: UserRole;
  initialData?: DoctorProfileFormValues | PatientProfileFormValues | null;
  isProfilePublished: boolean;
}

export function ProfileForm({ role, initialData = null }: ProfileFormProps) {
  const [step, setStep] = useState(0);
  const { user, refreshUser } = useAuth();
  const { schema, initialValues } = getProfileFormSchema(role);

  const router = useNavigate();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: initialData || initialValues,
    mode: "onBlur",
  });  

  async function onSubmit(
    data: DoctorProfileFormValues | PatientProfileFormValues
  ) {
    try {
      console.log("profile data", data);
      const cleanedData = JSON.parse(
      JSON.stringify(data),
      (key, value) => (key === "__typename" ? undefined : value)
    );

      if (role === "doctor") {        
       const doctorData = cleanedData as DoctorProfileFormValues;         

        const response = await client.graphql({
          query: updateExpert,
          variables: {
            input: {
              id: user.id,
              firstName: doctorData.firstName,
              lastName: doctorData.lastName,
              email: doctorData.email,
              introduction: doctorData.introduction,
              experience: doctorData.experience,
              Specialization: doctorData?.Specialization,
              ConsultationFee: doctorData?.ConsultationFee,
              clinicLocation: doctorData?.clinicLocation,
              LanguageSpoken: doctorData?.LanguageSpoken,
              education: doctorData.education,
              profilePictureUrl: doctorData.profilePictureUrl || null,
              profileStatus: ProfileStatus.PUBLISHED,
              weeklySchedule: (doctorData?.weeklySchedule || []) as (DayScheduleInput | null)[],
            },
          },
        });

        console.log("response", response);
        showToast("Doctor Profile updated successfully", "success");

        refreshUser();
        router("/home");
        return response;
      } else {
        const patientData = data as PatientProfileFormValues;

        const response = await client.graphql({
          query: updateUser,
          variables: {
            input: {
              id: user.id,
              firstName: patientData.firstName,
              lastName: patientData.lastName,
              email: patientData.email,
              mobile: patientData.mobile,
              address: patientData.address,
              dob: patientData.dob,
              height: patientData.height,
              weight: patientData.weight,
              profilePictureUrl: patientData.profilePictureUrl || null,
              profileStatus: ProfileStatus.PUBLISHED,
            },
          },
        });

        console.log("response", response);
        showToast("Patient Profile updated successfully", "success");

        refreshUser();
        router("/home");
        return response;
      }
    } catch (error) {
      console.error(error);
      showToast("An error occurred. Please try again later", "error");
    }
  }

  const handleNext = async (e: React.MouseEvent) => {
    e.preventDefault();

    const step1Fields = ["firstName", "lastName", "email"] as const;
    const isValid = await form.trigger(step1Fields);

    if (!isValid) {
      showToast("Please fill in all required fields", "error");
      return;
    }
    setStep(step + 1);
  };

  const handlePrevious = () => setStep(step - 1);

  return (
    <Form {...form}>
      <StepHeader step={step} role={user?.role} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form errors:", form.formState.errors);
          form.handleSubmit(onSubmit)(e);
        }}
        className="space-y-8"
      >
        {step === 0 && <StepOne />}
        {step === 1 && <StepTwo role={role} />}
        {step === 2 && role === "doctor" && <StepThree />} 

        <div className="flex justify-between w-full gap-2">
          {step > 0 && (
            <Button
              type="button"
              className="w-full"
              variant="outline"
              onClick={handlePrevious}
            >
              Previous
            </Button>
          )}

          {step < (role === "doctor" ? 2 : 1) ? (
            <Button
              type="button"
              onClick={handleNext}
              className="w-full bg-primary hover:bg-secondary"
            >
              Next
            </Button>
          ) : (
            <Button
              className="w-full bg-primary hover:bg-secondary"
              type="submit"
            >
              Save
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
