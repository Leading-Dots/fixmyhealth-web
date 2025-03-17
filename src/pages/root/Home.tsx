import { DialogLoader } from "@/components/common/DialogLoader";
import ArticleCarousel  from "@/components/home/ArticleCarousel";
// import ListComponent from "@/components/home/ListComponent";
// import SessionRequestComponent from "@/components/home/SessionRequestComponent";
// import SessionsComponent from "@/components/home/SessionsComponent";
import React from "react";

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  if(isLoading) {
    <DialogLoader />
  }
  return (
    <main className="container p-2 space-y-5">
       {/* Article Carousel */}
       <div className="max-w-3xl mx-auto">
        <ArticleCarousel />
      </div>
    </main>
  );
};

export default Home;
