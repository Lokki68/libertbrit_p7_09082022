import React from "react";
import { timeAgo } from "../../../utils/Utils.js";
import { Link } from "react-router-dom";

const PostCard = ({ post, users }) => {
  const posterUser = users.find((user) => user.id === post.userId);
  console.log(post);

  const date = timeAgo(post.date);

  const displayPicture = post.image && (
    <img
      className=" w-3/4 my-2  mx-auto "
      src={post.image}
      alt={`image du post ${post.id}`}
    />
  );

  return (
    <div className="flex flex-col w-[90%] h-min-80 relative bg-primary-100 my-5 mx-auto rounded-xl">
      <div className="flex items-center justify-between my-2 mx-4">
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full shadow-lg "
            src={posterUser.image}
            alt={posterUser.username}
          />
          <span className="ml-2">{posterUser.username}</span>
        </div>

        <span className="text-gray-500">{date}</span>
      </div>

      <div className="flex-1">
        <h2>{post.message}</h2>
        {displayPicture}
      </div>

      <div className="  mt-auto mb-1 px-4 pt-2 flex items-center justify-between border-t-2 border-t-primary-200 ">
        <div className="flex flex-col items-start">
          <span className="text-gray-500">
            Commentaires : {post.comments.length}{" "}
          </span>
          <span className="text-gray-500">Likes : {post.likes.length} </span>
        </div>
        <Link to={`post/${post.id}`} className="btn h-8" state={{ post: post }}>
          plus
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
