import { create } from "zustand";

export interface DialogStore {
  logoutDialog: boolean;
  setLogoutDialog: (value: boolean) => void;
}

export const useDialogStore = create<DialogStore>((set) => ({
  logoutDialog: false,
  setLogoutDialog: (value: boolean) => set(() => ({ logoutDialog: value })),
}));
