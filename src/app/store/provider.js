"use client";
import { Provider } from "react-redux";
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
      }
    };
    setUser();
  }, []);
  return <Provider store={store}>{children}</Provider>;
}
