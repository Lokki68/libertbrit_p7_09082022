import React from "react";
import { Link } from "react-router-dom";

const AdminSection = ({ user, toggleFunc }) => {
  const handleUpdgrade = () => {};

  const handleDelete = () => {};

  return (
    <div className="bg-primary-200 w-full border-t-2 border-primary-300 my-4 pt-4">
      <div className="flex justify-around">
        <button className="" onClick={handleUpdgrade}>
          upgrade
        </button>
        <Link to="/admin/profiForm" state={{ user: user }}>
          edit
        </Link>
        <button className="" onClick={handleDelete}>
          delete
        </button>
      </div>
    </div>
  );
};

export default AdminSection;
