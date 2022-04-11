import React from "react";
import { MdSearch } from "react-icons/md";

export default function SearchBar({ handleSearch }) {
  return (
    <div className="bg-color3 w-full h-8 pl-2 mx-auto rounded-xl flex items-center">
      <MdSearch size="1.3em" className="mt-1" />
      <input
        type="text"
        placeholder="Search Note"
        className="bg-color3 px-1 h-8 w-4/6 outline-none"
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
}
