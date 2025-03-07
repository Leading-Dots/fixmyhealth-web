import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

interface StepTwoProps {
  role: "doctor" | "patient";
}

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
    <FormField
      control={form.control}
      name="experience"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Years of Experience</FormLabel>
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
