import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import MobilMenu from "./MobilMenu.jsx";

const MobilNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="flex ml-4 md:hidden">
      {!isNavOpen ? (
        <div onClick={toggleNav}>
          <MenuIcon className="h-7" />
        </div>
      ) : (
        <div onClick={toggleNav}>
          <XIcon className="h-7" />
        </div>
      )}
      <div className="absolute -bottom-52 left-0 ">
        {isNavOpen && <MobilMenu />}
      </div>
    </div>
  );
};

export default MobilNav;
