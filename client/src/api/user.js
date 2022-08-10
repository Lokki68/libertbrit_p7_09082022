import axios from "axios";
import { environnement } from "../environnement/environnement.js";

const { log } = console;

export const getAllUsers = () => {
  return axios
    .get(`${environnement.apiUrl}/user`)
    .then((res) => res.data)
    .catch((err) => log({ err: err.message }));
};
