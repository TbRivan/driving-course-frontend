import { ChevronsUpDown, User2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { useUserStore } from "@/store/user-store";
import DialogLogout from "../DialogLogout";
import { useDialogStore } from "@/store/dialog-store";

function SidebarFooterCustom() {
  const { user } = useUserStore();
  const { setLogoutDialog } = useDialogStore();
  return (
    <>
      <SidebarFooter className="mb-5">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="flex items-center justify-between h-15">
                  <User2 className="flex items-center space-x-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <ChevronsUpDown className="ml-auto " />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="right"
                className="w-[--radix-popper-anchor-width] mb-5"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLogoutDialog(true)}>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <DialogLogout />
    </>
  );
}

export default SidebarFooterCustom;
