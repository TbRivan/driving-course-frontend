import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../pages/Auth";
import NotFound from "../pages/NotFound";
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import { AuthStoreType, useAuthStore } from "@/store/auth-store";
import { useEffect } from "react";
import Layout from "@/pages/Layout";

const AppRoutes = () => {
  const { checkTokenFromCookie }: AuthStoreType = useAuthStore();

  useEffect(() => {
    checkTokenFromCookie();
  }, [checkTokenFromCookie]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
