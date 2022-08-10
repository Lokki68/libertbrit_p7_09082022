import React from "react";

const HeaderButton = ({ children }) => {
  return (
    <button className="bg-primary-200 text-primary-100 px-2 py-1 rounded-md hover:shadow-md hover:shadow-primary-100 hover:text-primary-300 ">
      {children}
    </button>
  );
};

export default HeaderButton;
