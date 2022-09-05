import axios from "axios";
import { environnement } from "../environnement/environnement.js";

export const getAllPosts = () => {
  return axios
    .get(`${environnement.apiUrl}/post`)
    .then((res) => res.data)
    .catch((err) => console.log({ err: err.message }));
};

export const getOnePost = (id) => {
  return axios
    .get(`${environnement.apiUrl}/post/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log({ err: err.message }));
};

export const createPost = (data) => {
  return axios
    .post(`${environnement.apiUrl}/post`, data)
    .then((res) => res.data)
    .catch((err) => console.log({ err: err.message }));
};

export const updatePost = (id, data) => {
  return axios
    .put(`${environnement.apiUrl}/post/${id}`, data)
    .then((res) => res.data)
    .catch((err) => console.log({ err: err.message }));
};

export const deletePost = (id) => {
  return axios
    .delete(`${environnement.apiUrl}/post/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log({ err: err.message }));
};
