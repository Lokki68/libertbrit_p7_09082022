import React from "react";
import { Link, useLocation } from "react-router-dom";
import AdminPostDetail from "../Admin/AdminPostDetail.jsx";
import Like from "./Like/Like.jsx";
import CommentCard from "./Comments/CommentCard.jsx";
import { ArrowLeftIcon } from "@heroicons/react/solid";

const PostDetail = () => {
  const userId = localStorage.getItem("groupomania-id");
  const { post } = useLocation().state;
  const { id: postId, message, image, comments, likes } = post;

  const displayPostDetail = message && <p className="text-xl">{message}</p>;

  const displayPostImage = image && (
    <img
      src={image}
      alt={postId}
      className="mx-auto w-3/4 max-w-[340px] md:max-w-xl "
    />
  );

  const displayComments = (
    <>
      {comments.length > 0 &&
        comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} userId={userId} />
        ))}
    </>
  );

  return (
    <div className="h-[100vh] w-full flex flex-col pt-24 justify-start items-center ">
      <div className="w-full backdrop-blur py-2 shadow-md">
        <h1 className="text-3xl text-primary-300 font-bold">POSTS detail</h1>
      </div>
      <div className="flex w-full justify-between my-2 mx-4  ">
        <Link
          to={"/"}
          className="btn w-6 h-6 mx-1 p-0 flex items-center justify-center "
        >
          <ArrowLeftIcon className="h-5" />
        </Link>
        {post.userId.toString() === userId ? (
          <AdminPostDetail post={{ postId, message, image }} />
        ) : (
          <Like postId={postId} likes={likes} userId={userId} />
        )}
      </div>
      <div className="flex flex-col border-b-2 border-primary-200 md:flex-row md:w-full ">
        <div className="my-4">{displayPostImage}</div>
        <div className="my-4 md:flex md:flex-1 md:justify-start ">
          {displayPostDetail}
        </div>
      </div>

      <div className="w-full my-4 ">
        <span>
          <Link
            to={`/post/${postId}/newcomment`}
            state={{
              postId,
              userId,
            }}
            className="btn w-60 m-2 "
          >
            nouveau commentaire
          </Link>
        </span>
        <div className="flex flex-wrap justify-center mt-2 mx-auto overflow-y-auto h-60 w-7/8">
          {displayComments}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
