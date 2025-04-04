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
  
  const parsedInitialData =
    initialData && "weeklySchedule" in initialData
      ? {
          ...initialData,
          weeklySchedule: initialData.weeklySchedule as DayScheduleInput[],
        }
        : initialData;

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: parsedInitialData || initialValues,
    mode: "onBlur",
  });
  
  const { isValid, isSubmitting } = form.formState;

  const watchSchedule = form.watch("weeklySchedule");

  async function onSubmit(
    data: DoctorProfileFormValues | PatientProfileFormValues
  ) {
    try {
      const watchScheduleData =
      watchSchedule && Array.isArray(watchSchedule)
        ? JSON.parse(
            JSON.stringify(watchSchedule, (key, value) =>
              key === "__typename" ? undefined : value
            )
          )
        : [];
    

      if (role === "doctor") {
        const doctorData = data as DoctorProfileFormValues;

        const response = await client.graphql({
          query: updateExpert,
          variables: {
            input: {
              id: user.id,
              firstName: doctorData.firstName,
              lastName: doctorData.lastName,
              email: doctorData.email,
              introduction: doctorData.introduction,
              mobile: doctorData.mobile,
              experience: doctorData.experience,
              Specialization: doctorData?.Specialization,
              ConsultationFee: doctorData?.ConsultationFee,
              clinicLocation: doctorData?.clinicLocation,
              LanguageSpoken: doctorData?.LanguageSpoken,
              education: doctorData.education,
              profilePictureUrl: doctorData.profilePictureUrl || null,
              profileStatus: ProfileStatus.PUBLISHED,
              weeklySchedule: (watchScheduleData ||
                []) as (DayScheduleInput | null)[],
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
              dob: patientData.dob === "" ? null : patientData.dob,
              height: patientData.height ?? 0,
              weight: patientData.weight ?? 0,
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

    const commonFields = ["firstName", "lastName", "email", "mobile"] as const;

    const patientStep0Fields = [...commonFields, "address"] as const;
    const doctorStep0Fields = [...commonFields, "introduction"] as const;
    const patientFields = ["address", "dob", "height", "weight"] as const;
    const doctorFields = [
      "experience",
      "Specialization",
      "ConsultationFee",
      "clinicLocation",
      "LanguageSpoken",
      "education",
    ] as const;
    const summaryFields = ["summary"] as const;

    const stepValidationFields = {
      0: role === "patient" ? patientStep0Fields : doctorStep0Fields,
      1: role === "patient" ? patientFields : doctorFields,
      2: summaryFields,
    };

    const currentStepFields =
      stepValidationFields[step as keyof typeof stepValidationFields];

    const isValid = await form.trigger(currentStepFields as any);

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
              disabled={isSubmitting}
            >
              Save
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
