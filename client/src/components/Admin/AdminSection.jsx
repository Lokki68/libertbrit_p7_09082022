import React from "react";
import { Link } from "react-router-dom";
import { deleteAdmin, saveAdmin } from "../../api/admin.js";
import { toast, ToastContainer } from "react-toastify";

const AdminSection = ({ user, toggleFunc }) => {
  const handleUpdgrade = () => {
    const id = user.id;
    const data = {
      username: user.username,
    };

    saveAdmin(id, data).then((res) => {
      if (res?.status === 200) {
        toast.success(`${user.username} est passé Admin`, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        });
        setTimeout(() => toggleFunc(), 3000);
      } else {
        toast.error(`${res?.msg}`, {
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

  const handleDelete = () => {
    const id = user.admin;

    deleteAdmin(id).then((res) => {
      if (res?.status === 200) {
        toast.success(`${user.username} n'est plus Admin`, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        });
        setTimeout(() => toggleFunc(), 3000);
      }
    });
  };

  return (
    <div className="bg-primary-200 w-full border-t-2 border-primary-300 my-4 pt-4">
      <div className="flex justify-around">
        <button className=" btn" onClick={handleUpdgrade}>
          upGrade
        </button>
        <Link to="/admin/profilform" state={{ user: user }} className="btn">
          edit
        </Link>
        <button className="btn" onClick={handleDelete}>
          downGrade
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminSection;
