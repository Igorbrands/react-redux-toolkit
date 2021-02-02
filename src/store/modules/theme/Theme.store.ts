import { createSlice } from "@reduxjs/toolkit";
import { Theme, Themes } from "./types";

const initialState: Theme = { currentTheme: Themes.ligth };
const theme = createSlice({
  name: "theme",
  initialState: {
    theme: initialState,
  },
  reducers: {
    changeTheme(state) {
      if (state.theme.currentTheme === Themes.ligth) {
        state.theme.currentTheme = Themes.dark;
      } else {
        state.theme.currentTheme = Themes.ligth;
      }
    },
  },
});

export const { changeTheme } = theme.actions;
export default theme.reducer;
