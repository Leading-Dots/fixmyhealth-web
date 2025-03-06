import * as React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { LucideUniversity, School2 } from "lucide-react";

interface RoleSelectProps {
  onRoleChange?: (role: "doctor" | "patient") => void;
}

export function RoleSelect({ onRoleChange }: RoleSelectProps) {
  const [role, setRole] = React.useState<"doctor" | "patient">("patient");

  const handleValueChange = (value: string) => {
    if (value === "doctor" || value === "patient") {
      setRole(value);
      onRoleChange?.(value);
    }
  };

  return (
    <ToggleGroup
      variant="outline"
      type="single"
      value={role}
      onValueChange={handleValueChange}
      className="relative rounded-lg p-1"
    >
      <ToggleGroupItem
        value="patient"
        aria-label="Patient"
        className="relative w-[50%] data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      >
        <School2 className="mr-2 h-4 w-4" />
        Patient
      </ToggleGroupItem>
      <ToggleGroupItem
        value="doctor"
        aria-label="Doctor"
        className="relative w-[50%] data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      >
        <LucideUniversity className="mr-2 h-4 w-4" />
        Doctor
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
