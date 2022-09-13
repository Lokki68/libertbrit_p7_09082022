import React, { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/solid";
import { createLike, deleteLike } from "../../../api/posts.js";

const Like = ({ postId, likes, userId }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [userLikedId, setUserLikedId] = useState("");

  useEffect(() => {
    const result = likes.filter((like) => like.userId.toString() === userId);

    if (result.length >= 1) {
      setUserLikedId(result[0].id);
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, []);

  const handleLike = (e) => {
    e.preventDefault;

    const dataLike = {
      postId: parseInt(postId, 10),
      userId: parseInt(userId, 10),
    };

    if (!isLiked) {
      createLike(dataLike)
        .then((res) => {
          if (res?.status === 200) {
            setIsLiked(true);
          }
        })
        .catch((err) => console.log({ err: err.message }));
    } else {
      deleteLike(userLikedId)
        .then((res) => {
          if (res?.status === 200) {
            setIsLiked(false);
          }
        })
        .catch((err) => console.log({ err: err.message }));
    }
  };

  return (
    <>
      <button className="h-8 aspect-square" onClick={handleLike}>
        {isLiked ? (
          <HeartIcon className="text-success " />
        ) : (
          <HeartIcon className="text-gray-400 " />
        )}
      </button>
    </>
  );
};

export default Like;
