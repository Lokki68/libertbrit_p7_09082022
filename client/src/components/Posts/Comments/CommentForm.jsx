import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { createComment } from "../../../api/comment.js";

const CommentForm = ({ edit }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [comment, setComment] = useState("");
  const [image, setImage] = useState("");
  const { postId, userId } = location.state;

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      userId: parseInt(userId),
      content: comment,
    };

    if (!edit) {
      createComment(postId, data).then((res) => {
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
              rows="5"
              placeholder="Nouveau commentaire ..."
              onInput={(e) => setComment(e.target?.value)}
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
