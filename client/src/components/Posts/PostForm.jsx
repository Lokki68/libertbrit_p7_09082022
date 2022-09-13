import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createPost, updatePost } from "../../api/posts.js";

const PostForm = ({ edit }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { postId, message: stateMessage, image: stateImage } = location.state;
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  console.log();

  useEffect(() => {
    if (edit) {
      setMessage(stateMessage);
      setImage(stateImage);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("groupomania-id");

    if (!edit) {
      const data = new FormData();
      data.append("userId", userId);
      data.append("message", message);
      data.append("image", image);

      createPost(data).then((res) => {
        if (res.status === 200) {
          toast.success(` Post enregistré.`, {
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
      const data = {
        userId: parseInt(userId),
        message,
      };

      updatePost(postId, data).then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success(` Post modifié.`, {
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
              id="message"
              cols="30"
              rows="10"
              placeholder="Nouveau message ..."
              onInput={(e) => setMessage(e.target?.value)}
              value={message}
            ></textarea>
          </div>
          <div>
            <label htmlFor="fileSelector" className="btn w-3/4 ">
              Envoyer une image
            </label>
            <input
              type="file"
              id="fileSelector"
              className="hidden"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="flex justify-around  w-full">
            <Link to="/" className="btn w-28 ">
              Retour
            </Link>
            <button className="btn w-28" type="submit">
              {edit ? "Modifier" : "Envoyer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
