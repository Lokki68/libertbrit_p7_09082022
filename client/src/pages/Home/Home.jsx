import React from "react";
import { GlobeAltIcon } from "@heroicons/react/solid";

const Home = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center ">
      <GlobeAltIcon className="h-48 text-primary-200 opacity-30 animate-pulse" />
      <h1 className="font-body text-2xl font-bold text-white">
        Bienvenue sur Goupomania
      </h1>
    </div>
  );
};

export default Home;
