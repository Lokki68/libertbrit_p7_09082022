import React, { useState } from "react";
import {
  InformationCircleIcon,
  StarIcon,
  XCircleIcon,
} from "@heroicons/react/solid";

const AnnuaireCard = ({ user }) => {
  const [toggle, setToggle] = useState(false);

  const { username, image, admin, email, phoneNumber } = user;

  console.table(user);
  const toggleModal = () => setToggle(!toggle);

  const displayModal = toggle && (
    <div className="absolute top-0 right-0 left-0 bottom-0 z-20 backdrop-blur flex justify-center items-center">
      <div className="relative flex justify-between items-center w-full h-1/2 my-2 mx-4 p-1 rounded-md  bg-primary-200">
        <XCircleIcon
          className="h-5 absolute top-0 right-0 hover:text-primary-100 cursor-pointer"
          onClick={toggleModal}
        />
        <div className="relative ml-2 mb-auto">
          <img
            src={image}
            alt="profil"
            className=" shadow-md rounded-full h-16 w-16 "
          />
          {admin && (
            <StarIcon className="absolute -top-0.5 -right-2 text-primary-300 h-5" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">{username}</h3>
          <p>{email}</p>
          <p>{phoneNumber}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="relative flex justify-between items-center w-full max-w-[330px] h-28 my-2 mx-4 p-1 rounded-md  shadow-md shadow-slate-500 hover:shadow-slate-300  bg-red-400">
        <InformationCircleIcon
          className="h-5 absolute top-0 right-0 hover:text-primary-100 cursor-pointer"
          onClick={toggleModal}
        />
        <div className="relative ml-2 mb-auto">
          <img
            src={image}
            alt="profil"
            className=" shadow-md rounded-full h-14 w-14 "
          />
          {admin && (
            <StarIcon className="absolute -top-0.5 -right-2 text-primary-300 h-5" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold">{username}</h3>
          <p>{email}</p>
          <p>{phoneNumber}</p>
        </div>
      </div>
      {displayModal}
    </>
  );
};

export default AnnuaireCard;
