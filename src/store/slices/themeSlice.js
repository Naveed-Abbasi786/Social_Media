import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false, // Default light mode
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode; // Toggle between light and dark mode
    },
    enableDarkMode: (state) => {
      state.darkMode = true; // Set to dark mode
    },
    disableDarkMode: (state) => {
      state.darkMode = false; // Set to light mode
    },
  },
});

export const { toggleTheme, enableDarkMode, disableDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
