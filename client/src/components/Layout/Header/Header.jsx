import React from "react";
import tw from "tailwind-styled-components";
import { GlobeAltIcon } from "@heroicons/react/solid";

import ConnectionNav from "../../UiComponents/Navigations/ConnectionNav/ConnectionNav.jsx";

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
  return (
    <Container>
      <div className="flex justify-center items-center mx-2.5">
        <GlobeAltIcon className="h-9 text-white" />
        <p className="text-white font-bold text-2xl">Groupomania</p>
      </div>
      <ConnectionNav />
    </Container>
  );
};

export default Header;
