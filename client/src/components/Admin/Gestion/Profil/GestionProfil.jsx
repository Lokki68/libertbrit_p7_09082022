import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../../../../api/user.js";
import { getUsersReducers } from "../../../../redux/User/usersReducer.js";
import ProfilGestionCard from "./ProfilGestionCard.jsx";

const GestionProfil = () => {
  const users = useSelector((state) => state?.users.data);
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);

  const getAllUsersFunction = () => {
    getAllUsers().then((res) => dispatch(getUsersReducers(res?.data)));
  };

  useEffect(() => {
    getAllUsersFunction();
    setIsLoaded(!isLoaded);
  }, []);

  const handleDelete = (id) => {
    deleteUser(parseInt(id)).then(() => getAllUsersFunction());
  };

  console.log(users);

  const displayUsers =
    users.length > 0 ? (
      <ul>
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
