import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import Actvies from "../../shared/Actvies";
import { useSelector } from "react-redux";

export default function index() {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`lg:w-[100%] mt-[2%] w-full h-full   ${isDarkMode ? 'bg-[#091025]' : 'bg-[#F7F8F9]'}`}>
      <div className="w-[99%] h-[55vh] z-0  overflow-x-auto">
        <Stories />
      </div>
      <div className="flex">
        <div className="lg:w-[70%]   w-full">
          <Posts />
        </div>
        <div className="w-[30%] p-4 lg:flex hidden">
          <Actvies />
        </div>
      </div>
    </div>
  );
}
