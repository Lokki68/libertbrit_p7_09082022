import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/user.js";
import HeaderButton from "../UiComponents/Buttons/HeaderButton.jsx";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      toast.warn(`Veuillez remplir tous les champs.`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    } else {
      const data = {
        username,
        password,
      };

      loginUser(data)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("groupomania-token", res.token);
            localStorage.setItem("groupomania-id", res.data.id);
            toast.success(`Bienvenu ${username}`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
            });
            setTimeout(() => navigate("/"), 3000);
          } else if (res.status === 401 || res.status === 404) {
            toast.error(`${res.error}`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
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
          <h1 className="text-xl text-primary-300 font-bold">Se Connecter</h1>
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

export default Login;
