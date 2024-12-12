import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useUserStore } from "@/store/user-store";
import { BookCheck, Home, ListOrdered, Package, Users } from "lucide-react";

// Menu items.
const menusContent = {
  admin: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "User",
      url: "#",
      icon: Users,
    },
    {
      title: "Order",
      url: "#",
      icon: ListOrdered,
    },
    {
      title: "Package",
      url: "#",
      icon: Package,
    },
    {
      title: "Course",
      url: "#",
      icon: BookCheck,
    },
  ],
  client: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Order",
      url: "#",
      icon: ListOrdered,
    },
    {
      title: "Course",
      url: "#",
      icon: BookCheck,
    },
  ],
};

function SidebarContentCustom() {
  const { user } = useUserStore();

  let menuContent;
  if (user?.role === 1) {
    menuContent = menusContent.admin;
  } else if (user?.role === 2) {
    menuContent = menusContent.client;
  }

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>General</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {menuContent?.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
}

export default SidebarContentCustom;
