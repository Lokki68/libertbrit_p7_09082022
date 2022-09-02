import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";

const ProfilCard = ({ infos }) => {
  const { image, admin, username, email, phoneNumber } = infos;

  return (
    <div className="relative flex flex-col w-3/4 h-[70%] rounded-xl backdrop-blur m-auto p-4 shadow-lg shadow-primary-100 md:flex-row">
      <div className="  w-full flex justify-center items-center p-4 border-b-2 md:w-1/3 md:border-b-0  md:items-start">
        <img
          src={image}
          alt={username}
          className="shadow-lg rounded-full h-44 w-44 md:h-40 md:w-40"
        />
        {admin && (
          <StarIcon className="absolute -top-4 -right-4 text-primary-300 h-8" />
        )}
      </div>
      <div className="flex flex-1 flex-col justify-around text-primary-300">
        <h2 className="text-4xl font-bold">{username}</h2>
        <h3 className="text-2xl font-semibold">{email}</h3>
        <p className="text-xl">{phoneNumber}</p>
      </div>
      <div className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] w-1/2 bg-blue-600 flex items-center justify-center ">
        <NavLink to="/profilformphoto">Modifier Photo</NavLink>
        <NavLink to="/profilforminfo">Modifier Info</NavLink>
      </div>
    </div>
  );
};

export default ProfilCard;
