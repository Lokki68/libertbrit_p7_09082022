import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  infos: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
