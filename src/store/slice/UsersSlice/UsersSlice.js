import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    user: [
      {
        id: 1,
        firstName: "Terry",
        lastName: "Medhurst",
        role: "Редактор",
      },
      {
        id: 2,
        firstName: "Sheldon",
        lastName: "Quigley",
        role: "",
      },
      {
        id: 3,
        firstName: "Terrill",
        lastName: "Hills",
        role: "",
      },
      {
        id: 4,
        firstName: "Miles",
        lastName: "Cummerata",
        role: "",
      },
      {
        id: 5,
        firstName: "Mavis",
        lastName: "Schultz",
        maidenName: "Yundt",
        role: "",
      },
      {
        id: 6,
        firstName: "Alison",
        lastName: "Reichert",
        role: "",
      },
    ],
    showUsers: true,
  },
  reducers: {
    toggleShowUsers(state){
      state.showUsers=!state.showUsers
    },
    toggleRole(state,{payload}){
      const idx= state.user.findIndex(el=>el.id===payload.id)
      state.user[idx].role=payload.role
    }
  },
});

export const selectUsers = (state) => state.users;

export const {toggleShowUsers,toggleRole} =  usersSlice.actions;

export const usersReducer = usersSlice.reducer;
