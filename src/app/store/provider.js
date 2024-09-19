"use client";
import { Provider } from "react-redux";
import axios from "axios";
import { store } from "./store";
import { getSession } from "next-auth/react";
import { useEffect } from "react";
import { login, setTags } from "./userSlice";
import { setActiveProjects, setArchivedProjects } from "./projectsSlice";

const bootstrapContext = async (session) => {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
  axios.defaults.headers.common = {
    ...axios.defaults.headers.common,
    "Content-Type": "application/json",
    Authorization: `Bearer ${session?.user.token}`,
  };

  const {
    data: { data },
  } = await axios.get("context");

  store.dispatch(setTags(data.tags));
  store.dispatch(setActiveProjects(data.projects.active));
  store.dispatch(setArchivedProjects(data.projects.archived));
};

export function Providers({ children }) {
  useEffect(() => {
    const setUser = async () => {
      const session = await getSession();
      if (session) {
        store.dispatch(login(session?.user));
        await bootstrapContext(session);
      }
    };
    setUser();
  }, []);
  return <Provider store={store}>{children}</Provider>;
}
