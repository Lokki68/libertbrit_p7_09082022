import React from "react";
import tw from "tailwind-styled-components";
import { GlobeAltIcon } from "@heroicons/react/solid";

import ConnectionNav from "../../UiComponents/Navigations/ConnectionNav/ConnectionNav.jsx";
import { useSelector } from "react-redux";
import NavContainer from "../../UiComponents/Navigations/NavContainer/NavContainer.jsx";

const Container = tw.header`
    fixed
    flex
    flex-col
    justify-start
    w-full
    h-24
    bg-primary-300
    shadow-sm
`;

const Header = () => {
  const { isLogged, infos } = useSelector((state) => state.user);
  return (
    <Container>
      <div className="flex justify-center items-center mx-2.5">
        <GlobeAltIcon className="h-9 text-white" />
        <p className="text-white font-bold text-2xl">Groupomania</p>
      </div>
      {!isLogged ? <ConnectionNav /> : <NavContainer />}
    </Container>
  );
};

export default Header;
