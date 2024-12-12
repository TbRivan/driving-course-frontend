import { LoginDataType } from "@/interface";
import Cookies from "js-cookie";
import { create } from "zustand";
import { jwtDecode } from "jwt-decode";
import { UserType, useUserStore } from "./user-store";

export interface AuthStoreType extends LoginDataType {
  token: string;
  isLogin: boolean;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setToken: (value: string) => void;
  setIsLogin: (value: boolean) => void;
  checkTokenFromCookie: () => void;
  logoutAccount: () => void;
}

export const useAuthStore = create<AuthStoreType>((set) => ({
  email: "",
  password: "",
  token: "",
  isLogin: false,
  setEmail: (value: string) => set(() => ({ email: value })),
  setPassword: (value: string) => set(() => ({ password: value })),
  setToken: (value: string) => set(() => ({ token: value })),
  setIsLogin: (value: boolean) => set(() => ({ isLogin: value })),
  checkTokenFromCookie: () => {
    const setUser = useUserStore.getState().setUser;
    const token = Cookies.get("token");

    let cookiesToken, login;
    let user: UserType = {
      id: 0,
      name: "",
      email: "",
      role: 0,
    };

    if (token) {
      cookiesToken = token;
      login = true;

      const decodeUser: UserType = jwtDecode(cookiesToken);
      user = decodeUser;
    } else {
      cookiesToken = "";
      login = false;
    }

    setUser(user);
    set(() => ({ token: cookiesToken, isLogin: login }));
  },
  logoutAccount: () => {
    const setUser = useUserStore.getState().setUser;

    const user: UserType = {
      id: 0,
      name: "",
      email: "",
      role: 0,
    };

    Cookies.remove("token");
    Cookies.remove("sidebar:state");

    setUser(user);
    set(() => ({ token: "", isLogin: false }));
  },
}));
