import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getAllPostsReducer: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getAllPostsReducer } = postsSlice.actions;

export default postsSlice.reducer;
