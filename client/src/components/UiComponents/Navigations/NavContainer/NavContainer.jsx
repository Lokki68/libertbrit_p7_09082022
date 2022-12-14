import React from "react";
import DesktopNav from "./DesktopNav/DesktopNav.jsx";
import MobilNav from "./MobilNav/MobilNav.jsx";
import { LockOpenIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const NavContainer = ({ infos }) => {
  const displayUsernameOrAdmin =
    infos.admin > 0 ? (
      <Link
        to="/admin"
        className="btn w-6 h-6 mx-1 p-0 flex items-center justify-center"
      >
        <LockOpenIcon />
      </Link>
    ) : (
      <p className=" text-xl text-gray-50 mr-2">{infos.username}</p>
    );

  return (
    <div className="relative flex w-full justify-between items-center">
      <DesktopNav />
      <MobilNav />
      <div>{displayUsernameOrAdmin}</div>
    </div>
  );
};

export default NavContainer;
