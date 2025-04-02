import LoginPage from "@/pages/auth/LoginPage";
import Home from "@/pages/root/Home";
import { createBrowserRouter } from "react-router-dom";

import SignUpPage from "@/pages/auth/SignUpPage";
import ConfirmSignUpPage from "@/pages/auth/ConfirmSignUpPage";
import DashboardLayout from "@/layouts/DashboardLayout";

import HomeRouter from "./HomeRouter";
import AuthLayout from "@/layouts/AuthLayout";
import ProfilePage from "@/pages/root/ProfilePage";
import CreateArticle from "@/pages/Article/CreateArticle";
import ExpertArticles from "@/pages/Article/ExpertArticles";
import ArticleDetail from "@/pages/Article/ArticleDetail";
import AllArticles from "@/pages/Article/AllArticles";
import SearchExperts from "@/pages/Expert/SearchExperts";
import ExpertDetail from "@/pages/Expert/ExpertDetail";
import ConsultExpert from "@/pages/Expert/ConsultExpert";
import MyHealthConcern from "@/pages/HealthConcern/MyHealthConcern";
import AssignedConcerns from "@/pages/HealthConcern/AssignedConcerns";
import ReviewConcern from "@/pages/HealthConcern/ReviewConcern";
import BookAppointment from "@/pages/Appointment/BookAppointment";
import UserAppointments from "@/pages/Appointment/UserAppointments";
import ReportsPage from "@/pages/Reports/ReportPage";

const routes = [
  {
    path: "/",
    element: <HomeRouter />,
  },
  {
    path: "/login",
    element: (
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthLayout>
        <SignUpPage />
      </AuthLayout>
    ),
  },
  {
    path: "/confirm-signup",
    element: (
      <AuthLayout>
        <ConfirmSignUpPage />
      </AuthLayout>
    ),
  },
  {
    path: "/home",
    element: (
      <DashboardLayout isProtected={false}>
        <Home />
      </DashboardLayout>
    ),
  },
  {
    path: "/profile",
    element: (
      <DashboardLayout>
        <ProfilePage />
      </DashboardLayout>
    ),
  },
  {
    path: "/articles",
    element: (
      <DashboardLayout>
        <ExpertArticles />
      </DashboardLayout>
    ),
  },
  {
    path: "/all-articles",
    element: (
      <DashboardLayout isProtected={false}>
        <AllArticles />
      </DashboardLayout>
    ),
  },
  {
    path: "/article/:id",
    element: (
      <DashboardLayout isProtected={false}>
        <ArticleDetail />
      </DashboardLayout>
    ),
  },
  {
    path: "/create-article",
    element: (
      <DashboardLayout>
        <CreateArticle />
      </DashboardLayout>
    ),
  },
  {
    path: "/search-experts",
    element: (
      <DashboardLayout isProtected={false}>
        <SearchExperts/>
      </DashboardLayout>
    ),
  },
  {
    path: "/expert-detail/:id",
    element: (
      <DashboardLayout isProtected={false}>
        <ExpertDetail/>
      </DashboardLayout>
    ),
  },  
  {
    path: "/ask-concern/:id",
    element: (
      <DashboardLayout>
        <ConsultExpert/>
      </DashboardLayout>
    ),
  },  
  {
    path: "/my-health-concerns",
    element: (
      <DashboardLayout>
        <MyHealthConcern/>
      </DashboardLayout>
    ),
  }, 
  {
    path: "/assigned-concerns",
    element: (
      <DashboardLayout>
        <AssignedConcerns/>
      </DashboardLayout>
    ),
  },  
  {
    path: "/concerns/:id/review",
    element: (
      <DashboardLayout>
        <ReviewConcern/>
      </DashboardLayout>
    ),
  },  
  {
    path: "/book-appointment/:id",
    element: (
      <DashboardLayout>
        <BookAppointment/>
      </DashboardLayout>
    ),
  },  
  {
    path: "/my-appointments",
    element: (
      <DashboardLayout>
        <UserAppointments/>
      </DashboardLayout>
    ),
  },  
  {
    path: "/reports",
    element: (
      <DashboardLayout>
        <ReportsPage/>
      </DashboardLayout>
    ),
  },
];

const router = createBrowserRouter(routes);

export default router;
