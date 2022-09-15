import React from "react";
import DesktopMenu from "./DesktopMenu.jsx";

const DesktopNav = () => {
  return (
    <div className="hidden md:flex w-3/4 ">
      <DesktopMenu />
    </div>
  );
};

export default DesktopNav;
