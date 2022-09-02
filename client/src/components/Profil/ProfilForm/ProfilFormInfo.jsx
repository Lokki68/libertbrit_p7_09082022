import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../../api/user.js";
import { loadUserInfosReducer } from "../../../redux/User/userReducer.js";
import { toast, ToastContainer } from "react-toastify";

const ProfilFormInfo = () => {
  const { infos } = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    if (infos !== null) {
      setEmail(infos.email);
      setPhoneNumber(infos.phoneNumber);
    }
  }, [infos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = localStorage.getItem("groupomania-id");

    const data = {
      username,
      email,
      phoneNumber,
    };

    updateUser(id, data).then((res) => {
      console.log(res);
      if (res?.status === 200) {
        toast.success(` Informations modifiées avec succes.`, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        });
        dispatch(loadUserInfosReducer(res?.data));
        setTimeout(() => navigate(-1), 3000);
      } else if (res?.status === 401 || res?.status === 404) {
        toast.error(`${res?.error}`, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      }
    });
  };

  return (
    <div className="h-[100vh] flex flex-col pt-24 justify-start items-center">
      <ToastContainer />
      <div className="w-full backdrop-blur py-2 shadow-md">
        <h1 className="text-3xl text-primary-300 font-bold">
          Modifier vos Informations personnelles
        </h1>
      </div>
      <div className="relative flex flex-col w-3/4 h-[70%] rounded-xl backdrop-blur m-auto p-4 shadow-lg shadow-primary-100 md:flex-row">
        <form onSubmit={handleSubmit}>
          <div>
            <h2>{infos.username}</h2>
          </div>
          <div>
            <input
              name="email"
              id="email"
              placeholder="Votre Adresse mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Votre numéro de poste"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default ProfilFormInfo;
