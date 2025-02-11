import React, { useEffect, useRef, useState } from "react";
import { navbarNav } from "../../constant/data";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";

export default function NavSideBar({ toggleSidebar, isSidebarOpen,setIsSidebarOpen }) {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div>
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 w-[270px] h-full  ${isDarkMode ? "bg-[#080D1E]" : "bg-white"
          }   z-50 shadow-lg transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <button
          onClick={toggleSidebar}
          className={`w-full p-4 flex border-b  text-[22px] ${
                              isDarkMode ? "text-white border-[#101421]" : "text-[#07142e] border-[F1F1F1]"
                            } justify-end items-center`}
        >
          Close
          <Icon icon="mdi:close" className={`text-3xl mt-1 ${
                              isDarkMode ? "text-white" : "text-[#07142e]"
                            }  `} />
        </button>

        {/* Sidebar Content */}
        <div className="mt-6">
          <div
            className={`px-4 py-2 cursor-pointer ${isDarkMode ? "bg-[#080D1E] hover:bg-[#091025]" : "bg-white hover:bg-gray-100"}
             flex justify-between items-center`}
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
          >
            <span className="text-gray-700 font-semibold">Pages</span>
            <Icon
              icon={isCategoriesOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
              className={`text-gray-500 transform transition-transform duration-300 ${
                isCategoriesOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>

          {/* Dropdown Animation */}
          <div
            className={`pl-4 text-gray-600 space-y-2 overflow-hidden transition-all duration-500 ease-in-out ${
              isCategoriesOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {navbarNav.map((item, idx) => (
              <div
                key={idx}
                className={`py-1 cursor-pointer ${isDarkMode ? 'hover:text-gray-400' :'hover:text-[#1cc0a0]'} `}
              >
                <a className="w-full" href={item.link}>
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
