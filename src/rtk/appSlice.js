import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpenFlag: true,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpenFlag = !state.isMenuOpenFlag;
    },
    closeMenu: (state) => {
      state.isMenuOpenFlag = false;
    },
  },
});

export const { toggleMenu , closeMenu} = appSlice.actions;

export default appSlice.reducer;
