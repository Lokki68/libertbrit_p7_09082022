import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { updateUser } from "../../api/user.js";
import { loadUserInfosReducer } from "../../redux/User/userReducer.js";

const AdminProfilForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = location.state;

  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    setEmail(user?.email);
    setPhoneNumber(user?.phoneNumber);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = user.id;
    const data = {
      ...user,
      email,
      phoneNumber,
    };

    updateUser(id, data).then((res) => {
      if (res?.status === 200) {
        toast.success(` ${user.username} Modifier avec Succès !`, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        });
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

    console.table(data);
  };

  return (
    <div className="h-[100vh] flex flex-col pt-24 justify-start items-center">
      <ToastContainer />
      <div className="w-full backdrop-blur py-2 shadow-md">
        <h1 className="text-2xl text-primary-300 font-bold">
          Infos Personnelles
        </h1>
        <h2 className="text-xl text-primary-300">{user.username}</h2>
      </div>
      <div className="relative flex flex-col w-3/4 max-w-md h-[70%] rounded-xl backdrop-blur m-auto p-6 shadow-lg shadow-primary-100 ">
        <div>
          <h2 className="text-4xl font-semibold text-primary-300"></h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full h-full mt-8  items-center justify-between"
        >
          <div className="flex flex-col h-2/3 w-full justify-around ">
            <input
              className="text-center text-xl"
              name="email"
              id="email"
              placeholder="Votre Adresse mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="text-center text-xl"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Votre numéro de poste"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="flex justify-around  w-full">
            <Link to="/annuaire" className="btn w-28 ">
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

export default AdminProfilForm;
