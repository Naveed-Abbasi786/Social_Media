import React, { useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css"; // Import SimpleBar styles
import { Icon } from "@iconify/react";
import Logo from "../../assets/img/logo.png";
import "../../App.css";
import { Link, useLocation } from "react-router-dom";
import { nav } from "../../constant/data";
export default function DrawerSidebar({ isDrawerOpen, handleDrawerClose }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isDrawerOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition-opacity duration-300 ease-in-out`}
    >
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black ${
          isDrawerOpen ? "opacity-50" : "opacity-0"
        } transition-opacity duration-300 ease-in-out`}
        onClick={handleDrawerClose} // Close sidebar when clicking outside
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar Header */}

        {/* Scrollable Sidebar Content */}
        <SimpleBar className="h-full w-[270px]">
          <div
            className={`flex relative transition-all border-l ${
              isOpen ? "w-60" : "w-16"
            } h-full `}
          >
            {/* Drawer */}
            <div
              className={`h-[100vh]  z-10 transition-all bg-white border-l ease-in-out duration-300 ${
                isOpen ? "w-60" : "w-16"
              } p-4 flex flex-col gap-4`}
            >
              {/* Drawer Content - Only visible when the drawer is open */}
              {isOpen ? (
                <>
                  {/* Logo and Title */}

                  <div className="flex items-center gap-3   mb-3">
                    <img
                      src={Logo}
                      alt="Logo"
                      className="h-[2.2em] object-cover w-auto"
                    />
                    <h1 className="text-[#07142e] text-[28px] font-sans font-semibold">
                      SocialV
                    </h1>
                    <span className="ml-16">
                      <Icon
                        onClick={handleDrawerClose}
                        icon="basil:caret-left-outline"
                        className="text-3xl cursor-pointer text-[#6f7f92] "
                      />
                    </span>
                  </div>
                  <hr className="bg-sky-950 z-50 w-[100vw]  -mt-[13.9px]" />

                  {/* Profile Image and Name */}
                  <div className="flex items-center space-x-3 ">
                    <img
                      src="https://www.w3schools.com/w3images/avatar2.png"
                      alt="Profile"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-[#07142e] text-[16px]">
                        Marvin McKinney
                      </p>
                      <p className="text-sm text-[#6f7f92]">@marvin</p>
                    </div>
                  </div>
                  <hr className="bg-sky-950 z-50 w-[100vw]" />

                  {/* Menu Items */}
                  <ul className="space-y-2 w-full mt-4">
                    <h1 className="text-[#6f7f92] font-semibold">Menu</h1>
                    {nav.map((item, index) => (
                      <Link
                        key={index}
                        to={item.link}
                        className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer ${
                          location.pathname === item.link
                            ? "bg-blue-500 text-white"
                            : "text-[#6f7f92] hover:bg-gray-300"
                        }`}
                      >
                        <Icon icon={item.icon} className="text-xl" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </ul>

                  <div className="w-full mt-10 bg-[#F8F9FA] p-2 rounded-md flex justify-between">
                    <button className="p-1">
                      <Icon
                        icon="fluent:data-trending-32-regular"
                        className="text-xl text-[#6f7f92]"
                      />
                    </button>
                    <button className="p-2">
                      <Icon
                        icon="mynaui:users"
                        className="text-xl text-[#6f7f92]"
                      />
                    </button>
                    <button className="p-2">
                      <Icon
                        icon="ph:users-four-thin"
                        className="text-xl text-[#6f7f92]"
                      />
                    </button>
                    <button className="p-2">
                      <Icon
                        icon="mdi:youtube"
                        className="text-xl text-[#6f7f92]"
                      />
                    </button>
                  </div>
                </>
              ) : (
                // Drawer closed - Only show icons and logo
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="h-[2.5em] w-auto object-contain"
                  />
                  <hr className="bg-sky-950  !w-[100vw] -mt-3" />
                  <button className="h-[7vh]">
                    <img
                      src="https://www.w3schools.com/w3images/avatar2.png"
                      alt="Profile"
                      className="w-24 h-10 object-cover rounded-full"
                    />
                  </button>
                  <hr className="bg-sky-950  !w-[4vw] -mt-3" />
                  <h1 className="text-[#6f7f92] font-semibold !mt-6">Menu</h1>
                  <button className="p-2 hover:bg-[#2F65B9] !mt-3 rounded-md hover:text-white">
                    <Icon
                      icon="fluent:data-trending-32-regular"
                      className="text-xl text-[#6f7f92]"
                    />
                  </button>
                  <button className="p-2">
                    <Icon
                      icon="mynaui:users"
                      className="text-xl text-[#6f7f92]"
                    />
                  </button>

                  <div className="w-full p-6 flex flex-col justify-between items-center !mt-20 bg-[#F8F9FA] rounded-md gap-6">
                    <button className="hover:bg-[#2F65B9] p-2 rounded-md">
                      <Icon
                        icon="fluent:data-trending-32-regular"
                        className="text-xl text-[#6f7f92] hover:text-white"
                      />
                    </button>
                    <button className="hover:bg-[#2F65B9] p-2 rounded-md">
                      <Icon
                        icon="fluent:data-trending-32-regular"
                        className="text-xl text-[#6f7f92] hover:text-white"
                      />
                    </button>
                    <button className="hover:bg-[#2F65B9] p-2 rounded-md">
                      <Icon
                        icon="mynaui:users"
                        className="text-xl text-[#6f7f92] hover:text-white"
                      />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </SimpleBar>
      </div>
    </div>
  );
}
