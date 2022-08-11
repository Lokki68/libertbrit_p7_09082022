import { configureStore } from "@reduxjs/toolkit";
import user from "./User/userReducer.js";
import users from "./User/usersReducer.js";

export const store = configureStore({
  reducer: {
    user,
    users,
  },
});
