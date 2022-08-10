import React from "react";

import Header from "../Header/Header.jsx";

const Container = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Container;
