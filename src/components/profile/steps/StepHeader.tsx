import { Check } from "lucide-react";

interface StepHeaderProps {
  step: number;
  role?: "doctor" | "patient";
}

const StepHeader = ({ step = 0, role }: StepHeaderProps) => {
  return (
    <nav className="flex items-center justify-center mb-10">
      <ol className="flex items-center space-x-2">
        <li
          className={`flex items-center ${
            step >= 0 ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <span className="w-8 h-8 flex items-center justify-center rounded-full border border-current">
            {step > 0 ? <Check className="h-5 w-5 text-green-600" /> : "1"}
          </span>
          <span className="ml-2">Step 1</span>
        </li>
        <li className="flex items-center">
          <div className="w-12 h-px bg-muted-foreground mx-2" />
        </li>
        <li
          className={`flex items-center ${
            step === 1 ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <span className="w-8 h-8 flex items-center justify-center rounded-full border border-current">
            {step > 1 ? <Check className="h-5 w-5 text-green-600" /> : "2"}
          </span>
          <span className="ml-2">Step 2</span>
        </li>
        {/* Divider */}
        {role === "doctor" && (
          <>
            <li className="flex items-center">
              <div className="w-12 h-px bg-muted-foreground mx-2" />
            </li>
            {/* Step 3 (Visible only for doctors) */}
            <li
              className={`flex items-center ${
                step === 2 ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <span className="w-8 h-8 flex items-center justify-center rounded-full border border-current">
                3
              </span>
              <span className="ml-2">Step 3</span>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
};

export default StepHeader;
