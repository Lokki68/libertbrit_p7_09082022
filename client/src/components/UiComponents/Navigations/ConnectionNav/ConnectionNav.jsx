import React from "react";
import HeaderButton from "../../Buttons/HeaderButton.jsx";
import { useNavigate } from "react-router-dom";

const ConnectionNav = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-around mt-auto mb-4 md:hidden">
      <HeaderButton onClick={() => navigate("/login")}>Connexion</HeaderButton>
      <HeaderButton onClick={() => navigate("/register")}>
        Inscription
      </HeaderButton>
    </nav>
  );
};

export default ConnectionNav;
