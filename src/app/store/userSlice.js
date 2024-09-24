import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    tags: [],
    token: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
    },
    setTags(state, action) {
      state.tags = action.payload;
    },
    addTag(state, action) {
      state.tags.push(action.payload);
    },
  },
});

export const { login, logout, setTags, addTag } = userSlice.actions;

export default userSlice.reducer;
