import React from "react";
import DesktopNav from "./DesktopNav/DesktopNav.jsx";
import MobilNav from "./MobilNav/MobilNav.jsx";

const NavContainer = () => {
  return (
    <div>
      <DesktopNav />
      <MobilNav />
    </div>
  );
};

export default NavContainer;
