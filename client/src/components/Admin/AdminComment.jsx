import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PencilIcon, TrashIcon } from "@heroicons/react/solid";
import { toast, ToastContainer } from "react-toastify";
import { deleteComment } from "../../api/comment.js";

const AdminComment = ({ comment }) => {
  const navigate = useNavigate();
  const { id: commentId, content, userId } = comment;

  const handleDelete = () => {
    deleteComment(commentId).then((res) => {
      if (res.status === 200) {
        toast.success(` Comentaire supprimé.`, {
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
    <div className="flex items-center w-1/8 h-full border-l-2 border-primary-100  ">
      <ToastContainer />
      <Link
        to={`/comment/${commentId}/editcomment`}
        state={{
          commentId,
          userId,
          content,
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

export default AdminComment;
