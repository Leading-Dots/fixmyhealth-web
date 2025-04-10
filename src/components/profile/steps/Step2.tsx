import { Specialization } from "@/API";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from "react-hook-form";

interface StepTwoProps {
  role: "doctor" | "patient";
}

const SpecializationOptions = Object.values(Specialization);

export function StepTwo({ role }: StepTwoProps) {
  return (
    <div className="space-y-4">
      {role === "doctor" ? <DoctorFields /> : <PatientFields />}
    </div>
  );
}

/** Doctor-specific fields */
function DoctorFields() {
  const form = useFormContext();

  return (
    <>
      <FormField
        control={form.control}
        name="education"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Qualification<span className="text-red-500 font-bold">*</span></FormLabel>
            <FormControl>
              <Input
                {...field}
                type="text"
                onChange={(e) => field.onChange(e.target.value)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="Specialization"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Specialization<span className="text-red-500 font-bold">*</span></FormLabel>
            <FormControl>
              <Select
                onValueChange={(value) =>
                  field.onChange(value as Specialization)
                }
                defaultValue={field.value as string}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Specialization" />
                </SelectTrigger>
                <SelectContent>
                  {SpecializationOptions.map((spec) => (
                    <SelectItem key={spec} value={spec}>
                      {spec.replace(/_/g, " ")}{" "}
                      {/* Converts ENUM_NAME to readable text */}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="experience"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Years of Experience<span className="text-red-500 font-bold">*</span></FormLabel>
            <FormControl>
              <Input
                {...field}
                type="text"
                onChange={(e) => field.onChange(e.target.value)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="ConsultationFee"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Consultation fee</FormLabel>
            <FormControl>
              <Input
                {...field}
                type="number"
                onChange={(e) => field.onChange(parseInt(e.target.value))}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="clinicLocation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Clinic/Hospital Address</FormLabel>
            <FormControl>
              <Input
                {...field}
                type="text"
                onChange={(e) => field.onChange(e.target.value)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="LanguageSpoken"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Language Spoken</FormLabel>
            <FormControl>
              <Input
                {...field}
                type="text"
                onChange={(e) => field.onChange(e.target.value)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}

/** Patient-specific fields */
function PatientFields() {
  const form = useFormContext();

  return (
    <>
      {/* DOB Field */}
      <FormField
        control={form.control}
        name="dob"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Date of Birth</FormLabel>
            <FormControl>
              <Input
                type="date"
                {...field}
                onChange={(e) => field.onChange(e.target.value)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* Height Field */}
      <FormField
        control={form.control}
        name="height"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Height (cm)</FormLabel>
            <FormControl>
              <Input
                {...field}
                type="number"
                step="0.1"
                placeholder="Enter height in cm"
                onChange={(e) => field.onChange(parseFloat(e.target.value))}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* Weight Field */}
      <FormField
        control={form.control}
        name="weight"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Weight (kg)</FormLabel>
            <FormControl>
              <Input
                {...field}
                type="number"
                step="0.1"
                placeholder="Enter weight in kg"
                onChange={(e) => field.onChange(parseFloat(e.target.value))}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
