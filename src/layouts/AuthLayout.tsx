import { useAuth } from "@/hooks/useAuth";
import React from "react";
import { Navigate } from "react-router-dom";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/home" />;
  }

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-background">
      


    
      <div className="z-10 flex-1 flex flex-col items-center justify-center w-full max-w-lg px-4">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
