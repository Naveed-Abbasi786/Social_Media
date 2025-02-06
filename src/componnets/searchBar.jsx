import React from "react";
import { Icon } from "@iconify/react";

export default function SearchBar({ search, setSearch, placeholder = "Search...", onSearch }) {
  return (
    <div className="p-4 sm:p-6 bg-white flex flex-co sm:flex-row items-center justify-between gap-4 shadow-md rounded-lg">
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full sm:w-auto flex-grow border px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
      />
      <button
        className="w-full sm:w-12 h-10 flex justify-center items-center text-white bg-[#2F65B9] text-[20px] rounded-lg sm:rounded-md hover:bg-blue-700 transition"
        onClick={onSearch}
      >
        <Icon icon="ic:baseline-search" />
      </button>
    </div>
  );
}
