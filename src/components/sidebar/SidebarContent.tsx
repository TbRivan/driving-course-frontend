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
const items = [
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
];

function SidebarContentCustom() {
  const { user } = useUserStore();
  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>General</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
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
