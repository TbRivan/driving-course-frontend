import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useAuthStore } from "@/store/auth-store";
import { useDialogStore } from "@/store/dialog-store";
import { useNavigate } from "react-router-dom";

function DialogLogout() {
  const { logoutDialog, setLogoutDialog } = useDialogStore();
  const { logoutAccount } = useAuthStore();
  const navigate = useNavigate();

  const handleSetLogoutAccount = () => {
    setLogoutDialog(false);
    logoutAccount();
    navigate("/auth");
  };

  return (
    <AlertDialog open={logoutDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Konfirmasi Logout?</AlertDialogTitle>
          <AlertDialogDescription>
            Keluar dari akun akan mengakhiri sesi Anda. Anda dapat masuk kembali
            kapan saja untuk melanjutkan aktivitas.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setLogoutDialog(false)}>
            Batalkan
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleSetLogoutAccount}>
            lanjutkan
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DialogLogout;
