// import Cookies from "js-cookie";
import { create } from "zustand";

export interface UserType {
  id: number;
  name: string;
  email: string;
  role: number;
}
export interface UserStoreType {
  user: UserType;
  setUser: (value: UserType) => void;
}

export const useUserStore = create<UserStoreType>((set) => ({
  user: {
    id: 0,
    name: "",
    email: "",
    role: 0,
  },
  setUser: (value: UserType) => set(() => ({ user: value })),
}));
