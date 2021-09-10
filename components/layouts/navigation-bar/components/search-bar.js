import React from "react";

function SearchBar() {
  return (
    <div
      className="hidden md:flex items-center ml-16 rounded px-4 py-2"
      style={{ border: "1px solid #eee" }}
    >
      <div
        className="flex flex-col w-44"
        style={{ borderRight: "1px solid #eee" }}
      >
        <span className="text-xs text-gray-400 mb-1">City</span>
        <span className="text-sm">San Diego</span>
      </div>

      <div
        className="flex flex-col ml-5 w-44"
        style={{ borderRight: "1px solid #eee" }}
      >
        <span className="text-xs text-gray-400 mb-1">Date & Time</span>
        <span className="text-sm">16th Apr&apos;21, 7 PM</span>
      </div>

      <div className="pl-4">
        <button className="flex items-center justify-center bg-red-500 text-white w-6 h-6 rounded-full">
          {">"}
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
