import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";
import BreadcrumbCustom from "@/components/BreadcrumbCustom";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";

export default function Layout() {
  const location = useLocation();

  const locationName = location.pathname.split("/")[1];
  const placeholderName =
    locationName.charAt(0).toUpperCase() + locationName.slice(1);

  const breadcrumbItem = [
    {
      link: "/dashboard",
      placeholder: "Home",
    },
    {
      link: null,
      placeholder: placeholderName,
    },
  ];

  const defaultOpen = Cookies.get("sidebar:state") === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main>
        <div className="flex justify-center items-center m-3">
          <SidebarTrigger />
          <span className="ml-2 mr-2">|</span>
          <BreadcrumbCustom items={breadcrumbItem} />
        </div>
        <div>
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
