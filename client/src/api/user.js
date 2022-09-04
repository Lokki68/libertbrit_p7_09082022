import axios from "axios";
import { environnement } from "../environnement/environnement.js";

export const getAllUsers = () => {
  return axios
    .get(`${environnement.apiUrl}/user`)
    .then((res) => res.data)
    .catch((err) => console.log({ err: err.message }));
};

export const getUserInfo = (id) => {
  return axios
    .get(`${environnement.apiUrl}/user/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log({ err: err.message }));
};

export const saveUser = (data) => {
  return axios
    .post(`${environnement.apiUrl}/auth/signup`, data)
    .then((res) => res.data)
    .catch((err) => console.log({ err: err.message }));
};

export const loginUser = (data) => {
  return axios
    .post(`${environnement.apiUrl}/auth/login`, data)
    .then((res) => res.data)
    .catch((err) => console.log({ err: err.message }));
};

export const updateUser = (id, data) => {
  return axios
    .put(`${environnement.apiUrl}/user/${id}`, data)
    .then((res) => res.data)
    .catch((err) => console.log({ err: err.message }));
};

export const updateUserPicture = (id, data) => {
  return axios
    .put(`${environnement.apiUrl}/user/upload/${id}`, data)
    .then((res) => res.data)
    .catch((err) => console.log({ err: err.message }));
};

export const deleteUser = (id) => {
  return axios
    .delete(`${environnement.apiUrl}/user/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log({ err: err.message }));
};

export const checkToken = (data) => {
  return axios
    .post(`${environnement.apiUrl}/auth/checkToken`, data)
    .then((res) => res.data)
    .catch((err) => console.log({ err: err.message }));
};
