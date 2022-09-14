import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { timeAgo } from "../../../utils/Utils.js";
import AdminComment from "../../Admin/AdminComment.jsx";

const CommentCard = ({ comment, userId }) => {
  const users = useSelector((state) => state.users.data);

  const { id: commentId, date, content, userId: commenterId } = comment;
  const [commenterUsername, setCommenterUsername] = useState("");

  console.log(comment);

  useEffect(() => {
    if (users.length > 0) {
      const user = users.filter((user) => user.id === comment.userId);

      setCommenterUsername(user[0].username);
    }
  }, []);

  const dateFormated = timeAgo(date);

  const displayAdmin = parseInt(userId) === comment.userId && <AdminComment />;

  return (
    <>
      <div className="grid grid-cols-comment h-20 w-full mx-2  ">
        <div className="flex flex-col justify-center items-center mx-auto text-primary-300">
          <span className="font-bold">{commenterUsername}</span>
          <span className="text-xs">{dateFormated}</span>
        </div>
        <div className="flex items-center">
          <p>{content}</p>
        </div>
        <div>{displayAdmin}</div>
      </div>
    </>
  );
};

export default CommentCard;
