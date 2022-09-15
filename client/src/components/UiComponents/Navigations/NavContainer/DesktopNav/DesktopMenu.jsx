import React from "react";
import HeaderButton from "../../../Buttons/HeaderButton.jsx";
import { CogIcon, LogoutIcon } from "@heroicons/react/outline";
import { removeLocalStorage } from "../../../../../utils/Utils.js";
import { logoutUserReducer } from "../../../../../redux/User/userReducer.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const DesktopMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    removeLocalStorage();
    dispatch(logoutUserReducer());
    navigate("/login");
  };

  return (
    <div className="flex flex-1 w-full">
      <div className="flex  justify-between items-center w-2/4 ">
        <div className="flex justify-between w-20 mx-2 ">
          <HeaderButton onClick={logout}>
            <LogoutIcon className="h-5" />
          </HeaderButton>

          <HeaderButton onClick={() => navigate("/profil")}>
            <CogIcon className="h-5" />
          </HeaderButton>
        </div>
        <div className="absolute left-[50%] translate-x-[-50%] w-40 flex justify-between">
          <HeaderButton onClick={() => navigate("/")}>Home</HeaderButton>
          <HeaderButton onClick={() => navigate("/annuaire")}>
            Annuaire
          </HeaderButton>
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
