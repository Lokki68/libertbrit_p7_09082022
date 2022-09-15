import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../../../../api/user.js";
import { getUsersReducers } from "../../../../redux/User/usersReducer.js";
import ProfilGestionCard from "./ProfilGestionCard.jsx";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const GestionProfil = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state?.users.data);

  const getAllUsersFunction = () => {
    getAllUsers().then((res) => dispatch(getUsersReducers(res?.data)));
  };

  useEffect(() => {
    getAllUsersFunction();
  }, []);

  const handleDelete = (id) => {
    deleteUser(parseInt(id)).then((res) => {
      if (res?.status === 200) {
        toast.success(`${res?.msg}`, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        });
        getAllUsersFunction();
        setTimeout(() => navigate("/admin"), 3000);
      } else {
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

  const displayUsers =
    users.length > 0 ? (
      <ul>
        <ToastContainer />
        {users.map((user) => (
          <ProfilGestionCard
            key={user.id}
            user={user}
            deleteFunc={handleDelete}
          />
        ))}
      </ul>
    ) : (
      <p>Chargement ...</p>
    );

  return <div>{displayUsers}</div>;
};

export default GestionProfil;
