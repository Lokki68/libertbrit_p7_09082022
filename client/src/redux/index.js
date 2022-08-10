import { configureStore } from "@reduxjs/toolkit";
import user from "./User/userReducer.js";

export const store = configureStore({
  reducer: {
    user,
  },
});
