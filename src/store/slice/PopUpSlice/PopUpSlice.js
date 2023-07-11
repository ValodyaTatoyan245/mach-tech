import { createSlice } from "@reduxjs/toolkit";

const PopUpSlice = createSlice({
  name: "PopUp",
  initialState: {
    showPopUp: "",
  },
  reducers: {
    togglePopUp(state, { payload }) {
      state.showPopUp = payload;
    },
    resetShow(state) {
      state.showPopUp = "";
    },
  },
});

export const selectPopUp = (state) => state.PopUp;

export const { togglePopUp, resetShow } = PopUpSlice.actions;

export const PopUpReducer = PopUpSlice.reducer;
