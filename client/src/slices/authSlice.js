import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: 0,
  },
  reducers: {
    signin: (state) => {
      state.user = 1;
    },
    signout: (state) => {
      state.value = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signin, signout } = authSlice.actions;

export default authSlice.reducer;
