import { configureStore } from "@reduxjs/toolkit";
import user from "./User/userReducer.js";
import users from "./User/usersReducer.js";
import post from "./Post/postReducer.js";
import posts from "./Post/postsReducer.js";

export const store = configureStore({
  reducer: {
    user,
    users,
    post,
    posts,
  },
});
