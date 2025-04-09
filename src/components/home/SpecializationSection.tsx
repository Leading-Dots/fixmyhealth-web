import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Specialization } from "@/API";
import { useNavigate } from "react-router-dom";

const specializationImages: { [key in Specialization]: string } = {
  [Specialization.CARDIOLOGIST]: "/images/cardio.png",
  [Specialization.PEDIATRICIAN]: "/images/pediatrician.png",
  [Specialization.GYNECOLOGIST]: "/images/gynecologist.png",
  [Specialization.ORTHOPEDIC]: "/images/orthopedic.png",
  [Specialization.DERMATOLOGIST]: "/images/dermatologist.png",
  [Specialization.NEUROLOGIST]: "/images/neurologist.png",
  [Specialization.GENERAL_PHYSICIAN]: "/images/general_physician.png",
  [Specialization.ENT_SPECIALIST]: "/images/ent.png",
  [Specialization.PSYCHIATRIST]: "/images/psychiatrist.png",
  [Specialization.DIABETOLOGIST]: "/images/diabetologist.png",
  [Specialization.DIETICIAN]: "/images/dietician.png",
};

const SpecializationSection = () => {

  const navigate = useNavigate();
  const specializations = Object.values(Specialization);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - visibleCount, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + visibleCount, specializations.length - visibleCount)
    );
  };

  const visibleSpecializations = specializations.slice(
    startIndex,
    startIndex + visibleCount
  );

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Find the Right Specialist</h2>

      <div className="relative">
        {/* Left Arrow */}
        <Button
          variant="ghost"
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="absolute left-[-24px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
          size="icon"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        {/* Right Arrow */}
        <Button
          variant="ghost"
          onClick={handleNext}
          disabled={startIndex + visibleCount >= specializations.length}
          className="absolute right-[-24px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
          size="icon"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>

        {/* Specializations Grid */}
        <div className="grid grid-cols-5 gap-4">
          {visibleSpecializations.map((spec) => (
            <Card
              key={spec}
              className="aspect-square rounded-xl border shadow hover:shadow-md transition flex flex-col justify-between"
              onClick={() => navigate(`/search-experts?specialization=${spec}`)}
            >
              <div className="flex-1 flex items-center justify-center p-4">
                <img
                  src={specializationImages[spec]}
                  alt={spec}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="bg-secondary text-secondary-foreground text-center py-2 rounded-b-xl text-sm font-medium">
                {spec
                  .replace(/_/g, " ")
                  .toLowerCase()
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecializationSection;
