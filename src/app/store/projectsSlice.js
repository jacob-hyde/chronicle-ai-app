import { createSlice } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    active: [],
    archived: [],
  },
  reducers: {
    setActiveProjects: (state, action) => {
      state.active = action.payload;
    },
    setArchivedProjects: (state, action) => {
      state.archived = action.payload;
    },
  },
});

export const { setActiveProjects, setArchivedProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
