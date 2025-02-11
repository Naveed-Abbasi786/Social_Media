import React from "react";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";

export default function SearchBar({ search, setSearch, placeholder = "Search...", onSearch }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`p-4 sm:p-6 ${isDarkMode ? "bg-[#080D1E]" : "bg-white"
          } flex flex-co sm:flex-row items-center justify-between gap-4 shadow-md rounded-lg`}>
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={`w-full sm:w-auto flex-grow border px-4 py-2 rounded-lg  ${isDarkMode ? "bg-[#091025] text-gray-700" : "bg-white"
          }  focus:outline-none focus:ring focus:ring-blue-300`}
      />
      <button
        className={`w-full sm:w-12 h-10 flex justify-center items-center   bg-[#2F65B9] text-[20px] rounded-lg sm:rounded-md hover:bg-blue-700 transition`}
        onClick={onSearch}
      >
        <Icon icon="ic:baseline-search" />
      </button>
    </div>
  );
}
