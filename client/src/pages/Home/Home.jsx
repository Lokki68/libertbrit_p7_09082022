import React, { useEffect, useState } from "react";
import { GlobeAltIcon } from "@heroicons/react/solid";
import { getAllPosts } from "../../api/posts.js";
import { useDispatch } from "react-redux";
import { getAllPostsReducer } from "../../redux/Post/postsReducer.js";
import Posts from "../../components/Posts/Posts.jsx";

const Home = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAllPosts().then((res) => {
      console.log(res);
      setIsLoaded(!isLoaded);
      return dispatch(getAllPostsReducer(res));
    });
  }, []);

  return (
    <div className="h-[100vh] w-full flex flex-col justify-center items-center ">
      {!isLoaded ? (
        <>
          <GlobeAltIcon className="h-48 text-primary-200 opacity-30 animate-pulse" />
          <h1 className="font-body text-2xl font-bold text-white">
            Bienvenue sur Goupomania
          </h1>
        </>
      ) : (
        <Posts />
      )}
    </div>
  );
};

export default Home;
