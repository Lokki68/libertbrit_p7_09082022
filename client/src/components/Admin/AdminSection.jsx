import React from "react";
import { Link } from "react-router-dom";

const AdminSection = ({ user, toggleFunc }) => {
  const handleUpdgrade = () => {
    console.log("upgrade");
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <div className="bg-primary-200 w-full border-t-2 border-primary-300 my-4 pt-4">
      <div className="flex justify-around">
        <button className=" btn" onClick={handleUpdgrade}>
          upgrade
        </button>
        <Link to="/admin/profiForm" state={{ user: user }} className="btn">
          edit
        </Link>
        <button className="btn" onClick={handleDelete}>
          delete
        </button>
      </div>
    </div>
  );
};

export default AdminSection;
