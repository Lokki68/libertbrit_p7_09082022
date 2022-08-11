import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../api/user.js";
import { getUsersReducers } from "../../redux/User/usersReducer.js";
import { SearchIcon, XIcon } from "@heroicons/react/solid";

const Annuaire = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.users);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const getAllUserFunctions = () => {
    getAllUsers().then((res) => {
      dispatch(getUsersReducers(res.data));
    });
  };

  useEffect(() => {
    getAllUserFunctions();
  }, []);

  const searchUser = (e) => {
    const term = search.toLowerCase();

    const filterArray = data.filter((user) =>
      user.username.toLowerCase().includes(term)
    );

    setFilteredData(filterArray);
  };

  return (
    <div className="h-[100vh] flex flex-col pt-24 justify-start items-center ">
      <div className="w-full backdrop-blur py-2 shadow-md">
        <h1 className="text-3xl text-primary-300 font-bold">ANNUAIRE</h1>
      </div>
      <div className="flex items-center backdrop-blur mt-4 rounded-full shadow-md px-6 py-3 ml-10 mr-5 flew-grow max-w-3xl">
        <input
          type="text"
          className="w-full bg-transparent focus:outline-none"
          placeholder="Votre recherche"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon
          className={`h-7  ${
            search ? "text-primary-300 cursor-pointer" : "text-gray-400"
          }`}
          onClick={searchUser}
        />
      </div>
      {data.map((user) => (
        <p>{user.username}</p>
      ))}
    </div>
  );
};

export default Annuaire;
