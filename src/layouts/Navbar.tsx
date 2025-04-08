import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  BriefcaseMedical,
  ClipboardCheck,
  CreditCard,
  FileText,
  HomeIcon,
  LogIn,
  LogOut,
  Menu,
  MessageSquareHeartIcon,
  Newspaper,
  Pill,
  Settings,
  User2,
  UserCircle2,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";

type NavItem = {
  title: string;
  url: string;
  icon: React.ReactNode;
  isExternal?: boolean;
};

const Navbar = () => {
  const router = useNavigate();
  const { signOut, user } = useAuth();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const guestNavItems: NavItem[] = [
    {
      title: "Home",
      url: "/home",
      icon: <HomeIcon className="h-5 w-5" />,
    },
    {
      title: "Search Experts",
      url: "/search-experts",
      icon: <UserCircle2 className="h-5 w-5" />,
    },
    {
      title: "Login",
      url: "/login",
      icon: <LogIn className="h-5 w-5" />,
    },
  ];

  const doctorNavItems: NavItem[] = [
    {
      title: "Home",
      url: "/home",
      icon: <HomeIcon className="h-5 w-5" />,
    },
    {
      title: "Profile",
      url: "/profile",
      icon: <User2 className="h-5 w-5"/>,
    },
    {
      title: "Assigned Concerns",
      url: "/assigned-concerns",
      icon: <ClipboardCheck className="h-5 w-5" />,
    },
    {
      title: "My Articles",
      url: "/articles",
      icon: <Newspaper className="h-5 w-5" />,
    },
    {
      title: "My Appointments",
      url: "/my-appointments",
      icon: <BriefcaseMedical className="h-5 w-5" />,
    },
    {
      title: "Reviews & Ratings",
      url: "/review",
      icon: <MessageSquareHeartIcon className="h-5 w-5" />,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  const patientNavItems: NavItem[] = [
    {
      title: "Home",
      url: "/home",
      icon: <HomeIcon className="h-5 w-5" />,
    },
    {
      title: "Profile",
      url: "/profile",
      icon: <User2 className="h-5 w-5"/>,
    },
    {
      title: "Search Experts",
      url: "/search-experts",
      icon: <UserCircle2 className="h-5 w-5" />,
    },
    {
      title: "My Health Concerns",
      url: "/my-health-concerns",
      icon: <Pill className="h-5 w-5" />,
    },
    {
      title: "Family members",
      url: "/family-member",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "My Appointments",
      url: "/my-appointments",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Subscription",
      url: "/subscription",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      title: "Reports",
      url: "/reports",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  const navItems = user?.role === "doctor" ? doctorNavItems : patientNavItems;
  const isPublished = user?.profileStatus === "PUBLISHED";

  const NavContent = () => {
    // For guest users, show guest nav items
    if (!user) {
      return (
        <nav className="space-y-4 my-4">
          {guestNavItems.map((item) => {
            const isActive = location.pathname === item.url;

            return (
              <Link
                onClick={() => setOpen(false)}
                key={item.title}
                to={item.url}
                className={cn(
                  "flex items-center gap-3 rounded-lg p-2 text-sm transition-colors text-grey-500 ",
                  isActive
                    ? "bg-muted text-secondary-foreground text-secondary"
                    : " hover:text-secondary"
                )}
              >
                {item.icon}{item.title}
              </Link>
            );
          })}
        </nav>
      );
    }

    // For logged in users
    // const displayNavItems = navItems;

    return (
      <nav className="space-y-4 my-4">
        { isPublished && navItems.map((item) => {
          const isActive = location.pathname === item.url;

          return (
            <Link
              onClick={() => setOpen(false)}
              key={item.title}
              to={item.url}
              className={cn(
                "flex items-center gap-3 rounded-lg p-2 text-sm transition-colors text-grey-500 ",
                isActive
                  ? "bg-muted text-secondary-foreground text-secondary"
                  : " hover:text-secondary"
              )}
              {...(item?.isExternal && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {item.icon}{item.title}
            </Link>
          );
        })}
        {!isPublished && (
          <Link
          to="/profile"
          className={cn(
            "flex items-center gap-3 rounded-lg p-2 text-sm transition-colors text-yellow-600",
            "hover:text-secondary"
          )}
        >
          <User2 className="h-5 w-5" />
          <span>Complete your profile</span>
        </Link>
        )}
      </nav>
    );
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex h-screen w-64 flex-col border-r bg-background p-6 gap-6">
        <div className="flex flex-col items-center my-2">
          <Link to="/home" className="flex flex-col items-center gap-2">
            <img src="images/logo.png"  alt="Logo" width={80} height={80} />
            <span className="font-semibold text-xl text-[#23408e]">
              Fix My Health
            </span>
          </Link>
        </div>

        <NavContent />

        {/* Only show logout for logged in users */}
        {user && (
          <div className="flex flex-col items-start gap-2 mt-auto">
            <Button onClick={signOut} variant="ghost" size="sm" className=" text-grey-500  hover:text-secondary">
              <LogOut className="h-4 w-4 "/>
              Logout
            </Button>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          asChild
          className="flex items-center justify-start m-2 md:hidden"
        >
          <Menu className="h-8 w-8 " />
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-6">
          <div className="flex flex-col items-center">
            <Link to="/home">
              <img src="images/logo.png" alt="Logo" width={80} height={80} />
            </Link>
          </div>
          <NavContent />
          {user && (
          <div className="flex flex-col items-start gap-2 mt-auto">
            <Button onClick={signOut} variant="ghost" size="sm" className=" text-grey-500  hover:text-secondary">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        )}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navbar;
