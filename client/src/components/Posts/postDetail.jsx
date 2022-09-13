import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminPostDetail from "../Admin/AdminPostDetail.jsx";
import Like from "./Like/Like.jsx";

const PostDetail = () => {
  const userId = localStorage.getItem("groupomania-id");
  const { post } = useLocation().state;
  const { id: postId, message, image, comments, likes } = post;

  const displayPostDetail = post && <p className="text-xl">{message}</p>;
  const displayPostImage = image && (
    <img src={image} alt={postId} className="w-3/4 mx-auto" />
  );

  return (
    <div className="h-[100vh] w-full flex flex-col pt-24 justify-start items-center ">
      <div className="w-full backdrop-blur py-2 shadow-md">
        <h1 className="text-3xl text-primary-300 font-bold">POSTS detail</h1>
      </div>
      <div className="flex w-full justify-between my-2 mx-4  ">
        <Link to={"/"} className="btn">
          retour
        </Link>
        {
          post.userId.toString() === userId ? (
            <AdminPostDetail postId={postId} />
          ) : (
            <Like postId={postId} likes={likes} userId={userId} />
          )
          //todo: adminPostSection & likeComponent
        }
      </div>
      <div className="flex flex-col">
        <div className="my-4">{displayPostImage}</div>
        <div className="my-4">{displayPostDetail}</div>
      </div>
    </div>
  );
};

export default PostDetail;
