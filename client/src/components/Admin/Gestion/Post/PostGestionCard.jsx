import React from "react";
import { TrashIcon } from "@heroicons/react/solid";
import { timeAgo } from "../../../../utils/Utils.js";

const PostGestionCard = ({ post, deleteFunc }) => {
  const { id, message, date, comments, likes } = post;

  const formatDate = timeAgo(date);

  return (
    <li className="flex w-7/8 flex-row justify-between items-center rounded-sm backdrop-blur p-2 my-4">
      <div className=" flex flex-1 justify-start items-center h-14 text-primary-300">
        <div className="flex flex-col justify-start items-start w-2/3 text-2xl font-semibold ">
          <p>{message}</p>
          <p>{formatDate}</p>
        </div>
        <div className="flex flex-col justify-start items-start">
          <p>likes : {likes.length}</p>
          <p>commentaires : {comments.length}</p>
        </div>
      </div>
      <div>
        <button
          className="btn flex justify-center items-center mr-2 p-0 w-6 h-6"
          onClick={() => deleteFunc(id)}
        >
          <TrashIcon className="h-5" />
        </button>
      </div>
    </li>
  );
};

export default PostGestionCard;
