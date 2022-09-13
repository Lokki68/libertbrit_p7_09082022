import { environnement } from "../environnement/environnement.js";
import axios from "axios";

export const createComment = (postId, data) => {
  return axios
    .post(`${environnement.apiUrl}/comment/${postId}`, data)
    .then((res) => res.data)
    .catch((err) => console.log({ err: err.message }));
};

export const updateComment = (id, data) => {
  return axios
    .put(`${environnement.apiUrl}/comment/${id}`, data)
    .then((res) => res.data)
    .catch((err) => console.log({ err: err.message }));
};

export const deleteComment = (id) => {
  return axios
    .delete(`${environnement.apiUrl}/comment/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log({ err: err.message }));
};
