import { DialogLoader } from "@/components/common/DialogLoader";
import AppointmentSection from "@/components/home/AppointmnetSection";
import ArticleSection from "@/components/home/ArticleSection";
import HealthConcernsSection from "@/components/home/HealthConcernsSection";
import SpecializationsSection from "@/components/home/SpecializationSection";
import React from "react";

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  if(isLoading) {
    <DialogLoader />
  }
  return (
    <main className="container p-2 space-y-5">
      <div className="max-w-3xl mx-auto">
        <HealthConcernsSection />
      </div>
      <div className="max-w-3xl mx-auto">
        <AppointmentSection />
      </div>
      <div className="max-w-3xl mx-auto">
        <SpecializationsSection />
      </div>
       {/* Article Carousel */}
       <div className="max-w-3xl mx-auto">
        <ArticleSection />
      </div>
    </main>
  );
};

export default Home;
