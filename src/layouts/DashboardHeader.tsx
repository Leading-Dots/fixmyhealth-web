import { useAuth } from "@/hooks/useAuth";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import { Inbox } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const DashboardHeader = () => {
  const location = useLocation();
  const { user } = useAuth();
  const formatHeaderTitle = (pathname: string) => {
    // Get the first part of the path (e.g., 'profile' from 'profile/steps')
    const firstPath = pathname.split("/").filter(Boolean)[0] || "";

    // Split by hyphens and format only the first part
    const path = firstPath
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    useDocumentTitle(path);
    return path;
  };

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <h1 className="text-2xl font-semibold text-[#23408e]">
        {formatHeaderTitle(location.pathname)}
      </h1>
      <div className="flex flex-1 justify-end items-center gap-3">
        
        {user && (
          <Link to="/inbox">
            <div className="flex items-center  cursor-pointer">
              <Inbox size={24} />
            </div>
          </Link>
        )}
      </div>
    </header>
  );
};

export default DashboardHeader;
