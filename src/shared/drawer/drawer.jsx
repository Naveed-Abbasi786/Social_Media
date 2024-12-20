import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "../../assets/img/logo.png";
import Avatar from '../../assets/img/Avatar.jpg'
import "../../App.css";
import { Link, useLocation } from "react-router-dom";
const Drawer = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  const nav = [
    {
      name: "Activty",
      icon: "fluent:data-trending-32-regular",
      link: "/",
    },
    {
      name: "Members",
      icon: "mynaui:users",
      link: "/members",
    },
    {
      name: "Groups",
      icon: "ph:users-four-thin",
      link: "/member",
    },
    {
      name: "Badges",
      icon: "uil:comment-alt-verify",
      link: "/activty",
    },
    {
      name: "Message",
      icon: "material-symbols:sms-outline-sharp",
      link: "/activty",
    },
    { name: "Shop", icon: "solar:bag-outline", link: "/activty" },
  ];

  return (
    <div className=" w-min-[20px]">

    <div
      className={`flex relative transition-all border-l ${
        isOpen ? "w-60" : "w-16"
      } h-full `}
    >
      <div
        onClick={toggleDrawer}
        className="absolute  -right-[17px] z-0 top-[120px] h-8 w-10 text-center flex justify-center items-center shadow-sm bg-white transform rotate-[310deg]  cursor-pointer text-white"
      >
        <div className="-mr-5 mt-2">
          <Icon
            icon={
              isOpen ? "basil:caret-left-outline" : "basil:caret-right-outline"
            }
            className="text-2xl text-[#6f7f92]  transform rotate-[50deg]"
          />
        </div>
      </div>

      {/* Drawer */}
      <div
        className={`h-[100vh] shadow-lg z-10 transition-all bg-white border-l ease-in-out duration-300 ${
          isOpen ? "w-60" : "w-16"
        } p-4 flex flex-col gap-4`}
      >
        {/* Drawer Content - Only visible when the drawer is open */}
        {isOpen ? (
          <>
            {/* Logo and Title */}

            <div className="flex items-center gap-3 pb-2  ">
              <img
                src={Logo}
                alt="Logo"
                className="h-[2.2em] object-cover w-auto"
              />
              <h1 className="text-[#07142e] text-[28px] font-sans font-semibold">
                SocialV
              </h1>
            </div>
            <hr className="bg-gray-50  !w-[17.5vw]  !overflow-hidden -ml-4 -mt-[21px]" />


            {/* Profile Image and Name */}
            <div className="flex items-center border-b pb-6 space-x-3 ">
              <img
                src={Avatar}
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

            {/* Menu Items */}
            <ul className="space-y-2 w-full mt-4">
              <h1 className="text-[#6f7f92] font-semibold">Menu</h1>
              {nav.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className={`flex items-center space-x-2 p-2  rounded-md cursor-pointer ${
                    location.pathname === item.link
                      ? "bg-blue-500 text-white"
                      : "text-[#6f7f92] hover:bg-gray-300 hover:text-gray-900"
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
                <Icon icon="mynaui:users" className="text-xl text-[#6f7f92]" />
              </button>
              <button className="p-2">
                <Icon
                  icon="ph:users-four-thin"
                  className="text-xl text-[#6f7f92]"
                />
              </button>
              <button className="p-2">
                <Icon icon="mdi:youtube" className="text-xl text-[#6f7f92]" />
              </button>
            </div>
          </>
        ) : (
          // Drawer closed - Only show icons and logo
          <div className="w-full   flex flex-col  items-center space-y-4">
           <div>
            <img src={Logo} alt="" />
           </div>
              <hr className="bg-gray-50  !w-[5.7vw] " />
            <div className="">
              <button className="">
                <img
                  src={Avatar}
                  alt="Profile"
                  className="w-24 h-10 object-contain rounded-full"
                />
              </button>
            </div>
            <hr className="bg-gray-50  !w-[6vw] -ml-4 " />

            {/* <hr className="bg-sky-950  !w-[4vw] -mt-3" /> */}
            <h1 className="text-[#6f7f92] font-semibold !mt-6">Menu</h1>
            <button className="p-2 hover:bg-[#2F65B9] !mt-3 rounded-md hover:text-white">
              <Icon
                icon="fluent:data-trending-32-regular"
                className="text-xl text-[#6f7f92]"
              />
            </button>
            <button className="p-2">
              <Icon icon="mynaui:users" className="text-xl text-[#6f7f92]" />
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
    </div>

  );
};

export default Drawer;
