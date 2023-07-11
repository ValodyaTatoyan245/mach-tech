import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";

import { toggleContent } from "../../store/slice/LeftButtonSlice/LeftButtonSlice";
import {
  resetSearch,
  toggleSearch,
} from "../../store/slice/SearchSlice/SearchSlice";

function SearchInC() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
    dispatch(toggleSearch(e.target.value));
  };

  const handleClick = () => {
    dispatch(toggleContent());
    dispatch(resetSearch());
  };

  return (
    <div className="Search w-full h-16 flex justify-evenly items-center bg-[#4698F0]">
      <form className="flex w-full justify-evenly items-center">
        <input
          type="text"
          value={search}
          onChange={handleChange}
          className="p-2 rounded-md focus:bg-gray-300 "
        />
        <button onClick={handleClick}>
          <FaSearch size={28} />
        </button>
      </form>
    </div>
  );
}

export default SearchInC;
