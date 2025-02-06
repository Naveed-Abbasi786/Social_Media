import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false, 
};

const ChatsToggle = createSlice({
  name: "ToggleChat",
  initialState,
  reducers: {
    ToggleChat: (state) => {
      state.isOpen = !state.isOpen; 
    },
   
  },
});

export const { ToggleChat} = ChatsToggle.actions;
export default ChatsToggle.reducer;
