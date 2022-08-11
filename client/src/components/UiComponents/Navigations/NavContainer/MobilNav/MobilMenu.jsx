import React from "react";
import { CogIcon, LogoutIcon } from "@heroicons/react/outline";
import login from "../../../../User/Login.jsx";
import HeaderButton from "../../../Buttons/HeaderButton.jsx";
import { useNavigate } from "react-router-dom";

const MobilMenu = () => {
  const navigate = useNavigate();

  const logout = () => {
    console.log("logout");
  };
  return (
    <nav className="flex flex-col justify-between h-52 w-32 backdrop-blur shadow-md rounded-md ">
      <div className="space-y-2 mt-4">
        <HeaderButton onClick={() => navigate("/")}>Home</HeaderButton>
        <HeaderButton onClick={() => navigate("/annuaire")}>
          Annuaire
        </HeaderButton>
      </div>
      <div>
        <div className="flex justify-between">
          <div
            onClick={() => navigate("/settings")}
            className="cursor-pointer p-1 z-10"
          >
            <CogIcon className="h-7 " />
          </div>
          <div onClick={logout} className="cursor-pointer p-1 z-10">
            <LogoutIcon className="h-7" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobilMenu;
