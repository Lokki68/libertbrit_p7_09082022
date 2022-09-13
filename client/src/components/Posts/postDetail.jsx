import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminPostDetail from "../Admin/AdminPostDetail.jsx";
import Like from "./Like/Like.jsx";
import CommentCard from "./Comments/CommentCard.jsx";

const PostDetail = () => {
  const userId = localStorage.getItem("groupomania-id");
  const { post } = useLocation().state;
  const { id: postId, message, image, comments, likes } = post;

  const displayPostDetail = post && <p className="text-xl">{message}</p>;

  const displayPostImage = image && (
    <img src={image} alt={postId} className="w-3/4 mx-auto" />
  );

  const displayComments = comments.length > 0 && (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <CommentCard comment={comment} userId={userId} />
        </li>
      ))}
    </ul>
  );

  console.log(comments);
  console.log(likes);

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
            <AdminPostDetail post={{ postId, message, image }} />
          ) : (
            <Like postId={postId} likes={likes} userId={userId} />
          )
          //todo: adminPostSection & likeComponent
        }
      </div>
      <div className="flex flex-col border-b-2 border-primary-200 ">
        <div className="my-4">{displayPostImage}</div>
        <div className="my-4">{displayPostDetail}</div>
      </div>

      <div className="w-full">
        <span>
          <Link
            to={`/post/${postId}/newcomment`}
            state={{
              userId,
            }}
            className="btn w-60 m-2 "
          >
            nouveau commentaire
          </Link>
        </span>
        {displayComments}
      </div>
    </div>
  );
};

export default PostDetail;
