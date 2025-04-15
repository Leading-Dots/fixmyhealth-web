import { useAuth } from "@/hooks/useAuth";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import { User, UserPlus, ShieldCheck, Bell } from "lucide-react";
import { useMemo } from "react";
import { useNotifications } from "@/context/notificationStore";
import { Link, useLocation } from "react-router-dom";

type UserRole = "guest" | "patient" | "doctor";

const DashboardHeader = () => {
  const location = useLocation();
  const { user } = useAuth();
  const {notificationCount} = useNotifications();

  const formatHeaderTitle = (pathname: string) => {
    const firstPath = pathname.split("/").filter(Boolean)[0] || "";
    const path = firstPath
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    useDocumentTitle(path);
    return path;
  };

  // Determine user role
  const rawRole = user?.role;
  const role: UserRole =
    rawRole === "patient" || rawRole === "doctor" ? rawRole : "guest";

    const roleDisplay = useMemo(() => ({
      guest: {
        label: "Guest",
        icon: <UserPlus size={16} />,
        color: "bg-sky-100 text-primary",
      },
      patient: {
        label: "Patient",
        icon: <User size={16} />,
        color: "bg-sky-100 text-primary",
      },
      doctor: {
        label: "Expert",
        icon: <ShieldCheck size={16} />,
        color: "bg-sky-100 text-primary",
      },
    }), []);

  const { label, icon, color } = roleDisplay[role] || roleDisplay["guest"];

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <h1 className="text-2xl font-semibold text-[#23408e]">
        {formatHeaderTitle(location.pathname)}
      </h1>

      <div className="flex flex-1 justify-end items-center gap-3">
        {/* Role Badge */}
        <div
          className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${color}`}
        >
          {icon}
          <span>{label}</span>
        </div>
        {user && (
          <Link to="/notifications" className="relative">
            <div className="flex items-center cursor-pointer">
              <Bell size={24} />
              {notificationCount > 0 && (
                <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center">
                  <span className="text-white text-xs">{notificationCount}</span>
                </div>
              )}
            </div>
          </Link>
        )}
      </div>
    </header>
  );
};

export default DashboardHeader;
