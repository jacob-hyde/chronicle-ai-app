"use client";
import { Provider } from "react-redux";
import axios from "axios";
import { store } from "./store";
import { getSession } from "next-auth/react";
import { useEffect } from "react";
import { login } from "./userSlice";

export function Providers({ children }) {
  useEffect(() => {
    const setUser = async () => {
      const session = await getSession();
      if (session) {
        store.dispatch(login(session?.user));
        axios.defaults.headers.common = {
          ...axios.defaults.headers.common,
          Authorization: `Bearer ${session?.user.token}`,
        };
      }
    };
    setUser();
  }, []);
  return <Provider store={store}>{children}</Provider>;
}
