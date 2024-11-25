import { Sidebar } from "@/components/ui/sidebar";
import SidebarHeaderCustom from "./sidebar/SidebarHeader";
import SidebarContentCustom from "./sidebar/SidebarContent";
import { Separator } from "./ui/separator";
import SidebarFooterCustom from "./sidebar/SidebarFooter";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeaderCustom />
      <Separator />
      <SidebarContentCustom />
      <SidebarFooterCustom />
    </Sidebar>
  );
}
