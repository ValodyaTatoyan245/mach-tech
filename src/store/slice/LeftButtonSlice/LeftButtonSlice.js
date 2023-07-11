import { createSlice } from "@reduxjs/toolkit";


const LeftButtonSlice = createSlice({
  name: 'LeftButton',
  initialState: {
    showContent: true
  },
  reducers: {
    toggleContent(state) {
      state.showContent = !state.showContent;
    }
  }
});

export const selectLeftButton = state =>state.LeftButton

export const {toggleContent} = LeftButtonSlice.actions

export const LeftButtonReducer = LeftButtonSlice.reducer