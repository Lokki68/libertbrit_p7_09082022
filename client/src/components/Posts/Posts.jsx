import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
import AnnuaireCard from "../Annuaire/AnnuaireCard/AnnuaireCard.jsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Posts = () => {
  const { data: posts } = useSelector((state) => state.posts);

  console.log(posts);
  return (
    <div className="h-[100vh] w-full flex flex-col pt-24 justify-start items-center ">
      <div className="w-full backdrop-blur py-2 shadow-md">
        <h1 className="text-3xl text-primary-300 font-bold">POSTS</h1>
      </div>
      <div className="flex items-center backdrop-blur mt-4 rounded-full shadow-md px-6 py-3 mx-10  my-4 flew-grow max-w-3xl">
        <Link to="/post/newpost" className="btn">
          New Post
        </Link>
      </div>
      <div className="flex flex-wrap justify-center overflow-x-scroll w-full">
        {posts.map((post) => (
          <p key={post.id}>{post.message}</p>
        ))}
      </div>
    </div>
  );
};

export default Posts;
