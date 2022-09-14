import React from "react";
import { useSelector } from "react-redux";

const GestionPost = () => {
  const posts = useSelector((state) => state?.posts.data);

  console.log(posts);

  return <div>GestionPost</div>;
};

export default GestionPost;
