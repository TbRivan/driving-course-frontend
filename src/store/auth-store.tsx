import { LoginDataType } from "@/interface";
import { create } from "zustand";

export interface AuthStoreType extends LoginDataType {
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
}

export const useAuthStore = create<AuthStoreType>((set) => ({
  email: "",
  password: "",
  setEmail: (value: string) => set(() => ({ email: value })),
  setPassword: (value: string) => set(() => ({ password: value })),
}));
