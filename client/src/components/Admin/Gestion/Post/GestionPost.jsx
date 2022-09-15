import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletePost, getAllPosts } from "../../../../api/posts.js";
import { getAllPostsReducer } from "../../../../redux/Post/postsReducer.js";
import { toast, ToastContainer } from "react-toastify";
import PostGestionCard from "./PostGestionCard.jsx";

const GestionPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector((state) => state?.posts.data);

  const getAllPostsFunction = () => {
    getAllPosts().then((res) => {
      console.log(res);
      return dispatch(getAllPostsReducer(res));
    });
  };

  const handleDelete = (id) => {
    deletePost(parseInt(id)).then((res) => {
      if (res?.status === 200) {
        toast.success(`${res?.msg}`, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        });
        getAllPostsFunction();
        setTimeout(() => navigate("/admin"), 3000);
      } else {
        toast.error(`${res?.error}`, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      }
    });
  };

  const displayPosts =
    posts.length > 0 ? (
      <ul className="h-7/8overflow-Y-scroll">
        <ToastContainer />
        {posts.map((post) => (
          <PostGestionCard
            key={post.id}
            post={post}
            deleteFunc={handleDelete}
          />
        ))}
      </ul>
    ) : (
      <p>Chargement ...</p>
    );

  return <div className="w-full h-7/8 overflow-auto">{displayPosts}</div>;
};

export default GestionPost;
