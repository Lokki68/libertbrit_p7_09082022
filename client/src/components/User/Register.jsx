import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { saveUser } from "../../api/user.js";

import HeaderButton from "../UiComponents/Buttons/HeaderButton.jsx";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === "" || email === "") {
      toast.warn(`Veuillez remplir tous les champs !`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    } else {
      const data = {
        username,
        email,
        password,
      };

      saveUser(data)
        .then((res) => {
          if (res.status === 200) {
            toast.success(`Enregistrement réussi !`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
            });
            setTimeout(() => navigate("/login"), 3000);
          } else if (res.status === 400 || res.status === 403) {
            console.log(res);
            toast.error(`${res.error}`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
            });
          }
        })
        .catch((err) => console.log({ err: err.message }));
    }
  };

  return (
    <div className="h-[100vh]  flex justify-center items-center">
      <ToastContainer />
      <form className="w-2/3 bg-primary-100 shadow-md h-2/3 flex flex-col justify-around p-4 rounded-lg">
        <div>
          <h1 className="text-xl text-primary-300 font-bold">S'enregistrer</h1>
        </div>
        <div>
          <input
            className="input  focus:outline-none"
            type="text"
            name="username"
            placeholder="Nom d'utilisateur"
            id="username"
            value={username}
            onInput={(e) => {
              setUsername(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <input
            className="input  focus:outline-none"
            type="email"
            name="email"
            placeholder="Adresse Email"
            id="email"
            value={email}
            onInput={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <input
            className="input focus:outline-none"
            type="password"
            name="password"
            placeholder="Mot de passe"
            id="password"
            value={password}
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>
        <HeaderButton onClick={handleSubmit}>Envoyer</HeaderButton>
      </form>
    </div>
  );
};

export default Register;
