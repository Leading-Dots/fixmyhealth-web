import { DialogLoader } from "@/components/common/DialogLoader";
import AppointmentSection from "@/components/home/AppointmnetSection";
import ArticleSection from "@/components/home/ArticleSection";
import HealthConcernsSection from "@/components/home/HealthConcernsSection";
import SpecializationsSection from "@/components/home/SpecializationSection";
import { useAuth } from "@/hooks/useAuth";
import React from "react";

const Home = () => {
  const { user } = useAuth();
  const role = user?.role;
  const [isLoading, setIsLoading] = React.useState(false);

  if (isLoading) return <DialogLoader />;

  return (
    <main className="max-w-7xl mx-auto p-4 space-y-5">
      {/* Show for patient or guest */}
      {(role === "patient" || !user) && (
        <div>
          <HealthConcernsSection />
        </div>
      )}

      {/* Show only for patient and doctor */}
      {(role === "patient" || role === "doctor") && (
        <div>
          <AppointmentSection />
        </div>
      )}

      {/* Show for patient or guest */}
      {(role === "patient" || !user) && (
        <div>
          <SpecializationsSection />
        </div>
      )}

      {/* Show for patient or guest */}
      {(role === "patient" || !user) && (
        <div>
          <ArticleSection />
        </div>
      )}
    </main>
  );
};

export default Home;
