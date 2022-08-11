import React from "react";
import { CogIcon, LogoutIcon } from "@heroicons/react/outline";
import HeaderButton from "../../../Buttons/HeaderButton.jsx";
import { useNavigate } from "react-router-dom";
import { removeLocalStorage } from "../../../../../utils/Utils.js";
import { useDispatch } from "react-redux";
import { logoutUserReducer } from "../../../../../redux/User/userReducer.js";

const MobilMenu = ({ toggleNav }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    removeLocalStorage();
    dispatch(logoutUserReducer());
    toggleNav();
    navigate("/login");
  };

  return (
    <nav className="flex flex-col justify-between h-52 w-32 backdrop-blur shadow-md rounded-md ">
      <div className="space-y-2 mt-4">
        <HeaderButton
          onClick={() => {
            toggleNav();
            navigate("/");
          }}
        >
          Home
        </HeaderButton>
        <HeaderButton
          onClick={() => {
            toggleNav();
            navigate("/annuaire");
          }}
        >
          Annuaire
        </HeaderButton>
      </div>
      <div>
        <div className="flex justify-between">
          <div
            onClick={() => {
              toggleNav();
              navigate("/settings");
            }}
            className="cursor-pointer p-1 hover:text-primary-300"
          >
            <CogIcon className="h-7 " />
          </div>
          <div
            onClick={logout}
            className="cursor-pointer p-1 hover:text-primary-300"
          >
            <LogoutIcon className="h-7" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobilMenu;
