import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CommentCard = ({ comment, userId }) => {
  const users = useSelector((state) => state.users.data);

  const { id: commentId } = comment;
  const [commenterUsername, setCommenterUsername] = useState("");

  console.log(users);

  useEffect(() => {
    if (users.length > 0) {
      const user = users.filter((user) => user.id === comment.userId);

      setCommenterUsername(user[0].username);
    }
  }, []);

  return (
    <>
      <div className="grid grid-cols-comment  ">
        <div>comment info</div>
        <div>comment content</div>
      </div>
    </>
  );
};

export default CommentCard;
