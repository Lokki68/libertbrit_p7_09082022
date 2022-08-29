import { environnement } from "../environnement/environnement.js";
import axios from "axios";

export const deleteAdmin = (id) => {
  return axios
    .delete(`${environnement.apiUrl}/admin/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log({ err: err.message }));
};

export const saveAdmin = (id, data) => {
  return axios
    .post(`${environnement.apiUrl}/admin/${id}`, data)
    .then((res) => res.data)
    .catch((err) => console.log({ err: err.message }));
};
