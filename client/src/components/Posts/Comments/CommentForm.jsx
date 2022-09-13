import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createPost } from "../../../api/posts.js";
import { toast, ToastContainer } from "react-toastify";
import { createComment } from "../../../api/comment.js";

const CommentForm = ({ edit }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [comment, setcomment] = useState("");
  const [image, setImage] = useState("");
  const userId = localStorage.getItem("groupomania-id");

  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("groupomania-id");

    const data = new FormData();
    data.append("userId", userId);
    data.append("comment", comment);

    if (!edit) {
      createComment(data).then((res) => {
        if (res.status === 200) {
          toast.success(` Commentaire enregistré.`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
          });
          setTimeout(() => navigate("/"), 3000);
        } else {
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
    } else {
    }
  };

  return (
    <div className="h-[100vh] flex flex-col pt-24 justify-start items-center">
      <ToastContainer />
      <div className="w-full backdrop-blur py-2 shadow-md">
        <h1 className="text-2xl text-primary-300 font-bold">
          {!edit ? "Nouveau commentaire" : "Modifier commentaire"}
        </h1>
      </div>
      <div className="relative flex flex-col w-3/4 max-w-md h-2/3 rounded-xl backdrop-blur m-auto p-6 shadow-lg shadow-primary-100 ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full h-full mt-8  items-center justify-between"
        >
          <div>
            <textarea
              id="message"
              cols="30"
              rows="5"
              placeholder="Nouveau commentaire ..."
              onInput={(e) => setMessage(e.target?.value)}
            ></textarea>
          </div>
          <div className="flex justify-around  w-full">
            <Link to="/" className="btn w-28 ">
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

export default CommentForm;
