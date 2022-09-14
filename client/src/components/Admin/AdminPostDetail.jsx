import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PencilIcon, TrashIcon } from "@heroicons/react/solid";
import { deletePost } from "../../api/posts.js";
import { toast, ToastContainer } from "react-toastify";

const AdminPostDetail = ({ post }) => {
  const navigate = useNavigate();
  const { postId, message, image } = post;

  const handleDelete = () => {
    deletePost(postId).then((res) => {
      if (res?.status === 200) {
        toast.success(` Post supprimé.`, {
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
  };

  return (
    <div className="flex items-center w-1/8 ">
      <ToastContainer />
      <Link
        to={`/post/${postId}/editpost`}
        state={{
          postId,
          message,
          image,
        }}
        className="btn w-6 h-6 mx-1 p-0 flex items-center justify-center"
      >
        <PencilIcon className="h-4" />
      </Link>
      <button
        className="btn w-6 h-6 mx-1 p-0 flex items-center justify-center"
        onClick={handleDelete}
      >
        <TrashIcon className="h-4" />
      </button>
    </div>
  );
};

export default AdminPostDetail;
