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
      <DashboardLayout>
        <AllArticles />
      </DashboardLayout>
    ),
  },
  {
    path: "/article/:id",
    element: (
      <DashboardLayout>
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
      <DashboardLayout>
        <SearchExperts/>
      </DashboardLayout>
    ),
  },
  {
    path: "/expert-detail/:id",
    element: (
      <DashboardLayout>
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
];

const router = createBrowserRouter(routes);

export default router;
