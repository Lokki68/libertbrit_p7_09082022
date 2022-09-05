import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPostReducer: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getPostReducer } = postSlice.actions;

export default postSlice.reducer;
