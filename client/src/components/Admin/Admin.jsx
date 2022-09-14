import React, { useState } from "react";
import { ChatIcon, UserIcon } from "@heroicons/react/solid";

const Admin = () => {
  const [gestPost, setGestPost] = useState(false);
  const [gestProfil, setGestProfil] = useState(true);

  const toggleGestion = () => {
    setGestProfil(!gestProfil);
    setGestPost(!gestPost);
  };

  return (
    <div className="h-[100vh] w-full flex flex-col pt-24 justify-start items-center ">
      <div className="w-full backdrop-blur py-2 shadow-md">
        <h1 className=" relative w-full  text-3xl text-primary-300 font-bold">
          {gestProfil ? "Gestion des Profils" : "Gestion des Posts"}
          <button
            onClick={toggleGestion}
            className="btn flex justify-center items-center absolute top-[50%] translate-y-[-50%] right-0 p-0 w-6 h-6 mr-2 "
          >
            {gestProfil ? (
              <UserIcon className="h-5 w-5" />
            ) : (
              <ChatIcon className="h-5 w-5" />
            )}
          </button>
        </h1>
      </div>
      <div>admin section</div>
    </div>
  );
};

export default Admin;
