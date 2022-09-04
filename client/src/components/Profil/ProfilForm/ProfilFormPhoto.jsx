import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserInfo,
  loginUser,
  updateUserPicture,
} from "../../../api/user.js";
import { loadUserInfosReducer } from "../../../redux/User/userReducer.js";

const ProfilFormPhoto = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { infos } = useSelector((state) => state?.user);

  const [newPicture, setNewPicture] = useState("");

  useEffect(() => {
    if (infos !== null) {
      setNewPicture(infos.image);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = localStorage.getItem("groupomania-id");

    const data = new FormData();
    data.append("image", newPicture);

    updateUserPicture(id, data).then((res) => {
      if (res?.status === 200) {
        getUserInfo(id).then((response) => {
          const data = response?.data;
          dispatch(loadUserInfosReducer(data));
          toast.success(` Photo modifiées avec succes.`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
          });
          setTimeout(() => navigate(-1), 3000);
        });
      }
    });
  };

  return (
    <div className="h-[100vh] flex flex-col pt-24 justify-start items-center">
      <ToastContainer />
      <div className="w-full backdrop-blur py-2 shadow-md">
        <h1 className="text-2xl text-primary-300 font-bold">
          Modifier votre photo de Profil
        </h1>
      </div>
      <div className="relative flex flex-col w-3/4 max-w-md h-[70%] rounded-xl backdrop-blur m-auto p-6 shadow-lg shadow-primary-100 ">
        <div>
          <h2 className="text-4xl font-semibold text-primary-300">
            {infos.username}
          </h2>
        </div>

        <div className="w-full flex flex-1 justify-center items-center my-8 ">
          <img
            className="w-48 h-48 rounded-full"
            src={infos.image}
            alt={infos.username}
          />
        </div>
        <form
          className="flex flex-col w-full h-full mt-8  items-center justify-between"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col h-2/3 w-full items-center ">
            <label htmlFor="fileSelector" className="btn w-3/4 ">
              Choisir sa photo
            </label>
            <input
              type="file"
              id="fileSelector"
              className="hidden"
              onChange={(e) => setNewPicture(e.target.files[0])}
            />
          </div>
          <div className="flex justify-around  w-full">
            <Link to="/profil" className="btn w-28 ">
              Retour
            </Link>
            <button className="btn w-28" type="submit">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilFormPhoto;
