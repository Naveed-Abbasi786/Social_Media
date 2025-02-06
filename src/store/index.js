// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./slices/drawerSlice"; // Drawer slice
import themeReducer from "./slices/themeSlice"; // Dark/Light Mode slice
import ToggleChat from "../store/slices/chatsToggle";
const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    theme: themeReducer,
    chats: ToggleChat,
  },
});

export default store;
