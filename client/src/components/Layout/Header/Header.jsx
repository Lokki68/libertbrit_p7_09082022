import React from "react";
import { GlobeAltIcon } from "@heroicons/react/solid";

import ConnectionNav from "../../UiComponents/Navigations/ConnectionNav/ConnectionNav.jsx";
import { useSelector } from "react-redux";
import NavContainer from "../../UiComponents/Navigations/NavContainer/NavContainer.jsx";

const Header = () => {
  const { isLogged, infos } = useSelector((state) => state.user);
  return (
    <div className="fixed flex flex-col justify-start w-full h-20 bg-primary-300 shadow-sm">
      <div className="flex justify-center items-center mt-2 mx-2.5">
        <GlobeAltIcon className="h-9 text-white" />
        <p className="text-white font-bold text-2xl">Groupomania</p>
      </div>
      {!isLogged ? <ConnectionNav /> : <NavContainer />}
    </div>
  );
};

export default Header;
