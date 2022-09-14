import React, { useEffect, useState } from "react";
import { TrashIcon } from "@heroicons/react/solid";

const ProfilGestionCard = ({ user, deleteFunc }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { id, image, username, admin } = user;

  useEffect(() => {
    if (admin > 0) {
      setIsAdmin(true);
    }
  }, []);

  console.log(`${username} => ${isAdmin} `);

  return (
    <li className="flex w-full flex-row justify-between items-center my-2">
      <div className=" flex flex-1 flex-row h-14 items-center ml-2 ">
        <img
          src={image}
          alt={username}
          className="h-12 w-12 rounded-full mr-2"
        />
        <h3 className="text-2xl text-primary-300 font-bold">{username}</h3>
      </div>
      <div>
        <button
          className="btn flex justify-center items-center mr-2 p-0 w-6 h-6"
          disabled={isAdmin}
          onClick={() => deleteFunc(id)}
        >
          <TrashIcon className={`h-5 ${isAdmin && "text-gray-500"}`} />
        </button>
      </div>
    </li>
  );
};

export default ProfilGestionCard;
