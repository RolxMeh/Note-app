import React from "react";

export default function Header({ darkModeValue, darkMode }) {
  return (
    <div className="w-full h-20 font-karla flex items-center justify-between">
      <div className={`${darkModeValue === true ? "text-white" : ""}`}>
        <h1 className="text-4xl font-bold">Note</h1>
      </div>
      <button
        onClick={() => darkMode((prevValue) => !prevValue)}
        className="bg-color3 w-24 h-8 rounded-2xl"
      >
        {darkModeValue ? "Light mode" : "Dark Mode"}
      </button>
    </div>
  );
}
