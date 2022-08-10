import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loginUserReducer } from "../redux/User/userReducer.js";
import { checkToken } from "../api/user";
import { removeLocalStorage } from "./Utils.js";

const RequireAuth = ({ children, withAuth }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.isLogged && withAuth) {
      const token = localStorage.getItem("groupomania-token");
      if (token === null) {
        return navigate("/login");
      } else {
        const id = localStorage.getItem("groupomania-id");
        const data = { token, id };
        console.log("data => ", data);

        checkToken(data)
          .then((res) => {
            console.log("res => ", res);
            if (res.status === 200) {
              dispatch(loginUserReducer(res.data));
            } else {
              removeLocalStorage();
              navigate("/login");
            }
          })
          .catch((err) => {
            removeLocalStorage();
            navigate("/login");
          });
      }
    }
  }, []);

  return <>{children}</>;
};

export default RequireAuth;
