"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import projectsReducer from "./projectsSlice";

const rootReducer = combineReducers({
  user: userReducer,
  projects: projectsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
