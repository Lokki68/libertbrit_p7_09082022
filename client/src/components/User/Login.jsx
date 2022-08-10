import React, { useState } from "react";
import HeaderButton from "../UiComponents/Buttons/HeaderButton.jsx";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/user.js";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username,
      password,
    };

    loginUser(data)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("groupomania-token", res.token);
          localStorage.setItem("groupomania-id", res.data.id);
          navigate("/");
        } else if (res.status === 401) {
          setErrorMessage(res.err);
        } else if (res.status === 402) {
          setErrorMessage(res.err);
        }
      })
      .catch((err) => console.log({ err: err.message }));
  };

  return (
    <div className="h-[100vh]  flex justify-center items-center">
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
              setErrorMessage("");
              setUsername(e.target.value);
            }}
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
              setErrorMessage("");
              setPassword(e.target.value);
            }}
          />
        </div>

        <HeaderButton onClick={handleSubmit}>Envoyer</HeaderButton>
      </form>
    </div>
  );
};

export default Login;
