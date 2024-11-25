import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { LoaderPinwheel } from "lucide-react";

function SidebarHeaderCustom() {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <LoaderPinwheel size={40} />
            <span className="ml-2 text-2xl font-semibold">Wheel Wise</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}

export default SidebarHeaderCustom;
