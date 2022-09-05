import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createPost } from "../../api/posts.js";

const PostForm = ({ edit }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("groupomania-id");

    const data = new FormData();
    data.append("userId", userId);
    data.append("message", message);
    data.append("image", image);

    if (!edit) {
      createPost(data).then((res) => {
        if (res.status === 200) {
          toast.success(` Message enregistré.`, {
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
          {!edit ? "Nouveau message" : "Modifier message"}
        </h1>
      </div>
      <div className="relative flex flex-col w-3/4 max-w-md h-[70%] rounded-xl backdrop-blur m-auto p-6 shadow-lg shadow-primary-100 ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full h-full mt-8  items-center justify-between"
        >
          <div>
            <textarea
              name=""
              id="message"
              rows="10"
              placeholder="nouveau message ..."
            ></textarea>
          </div>
          <div>
            <label htmlFor="fileSelector" className="btn w-3/4 ">
              Choisir sa photo
            </label>
            <input type="file" id="fileSelector" className="hidden" />
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

export default PostForm;
