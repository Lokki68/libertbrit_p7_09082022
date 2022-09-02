import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../../api/user.js";

const ProfilFormInfo = () => {
  const { infos } = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usernameInputRef = useRef(infos.username);
  const emailInputRef = useRef(infos.email);
  const phoneNumberInputRef = useRef(infos.phoneNumber);

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = localStorage.getItem("groupomania-id");

    const data = {
      username: usernameInputRef.current.value,
      email: emailInputRef.current.value,
      phoneNumber: phoneNumberInputRef.current.value,
    };

    updateUser(id, data).then();
  };

  return (
    <div className="h-[100vh] flex flex-col pt-24 justify-start items-center">
      <div className="w-full backdrop-blur py-2 shadow-md">
        <h1 className="text-3xl text-primary-300 font-bold">
          Modifier vos Informations personnelles
        </h1>
      </div>
      <div className="relative flex flex-col w-3/4 h-[70%] rounded-xl backdrop-blur m-auto p-4 shadow-lg shadow-primary-100 md:flex-row">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              name="username"
              id="username"
              value={infos?.username}
              ref={usernameInputRef}
            />
          </div>
          <div>
            <input
              name="email"
              id="email"
              value={infos?.email}
              ref={emailInputRef}
            />
          </div>
          <div>
            <input
              name="phoneNumber"
              id="phoneNumber"
              value={infos?.phoneNumber}
              ref={phoneNumberInputRef}
            />
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default ProfilFormInfo;
