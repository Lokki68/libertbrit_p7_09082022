import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsersReducers: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getUsersReducers } = usersSlice.actions;

export default usersSlice.reducer;
