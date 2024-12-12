import { Sidebar } from "@/components/ui/sidebar";
import SidebarHeaderCustom from "./sidebar/SidebarHeader";
import SidebarContentCustom from "./sidebar/SidebarContent";
import { Separator } from "./ui/separator";
import SidebarFooterCustom from "./sidebar/SidebarFooter";
import { useEffect } from "react";
import { useAuthStore } from "@/store/auth-store";
import { useNavigate } from "react-router-dom";

export function AppSidebar() {
  const { isLogin } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/auth");
    }
  }, [isLogin]);

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeaderCustom />
      <Separator />
      <SidebarContentCustom />
      <SidebarFooterCustom />
    </Sidebar>
  );
}
