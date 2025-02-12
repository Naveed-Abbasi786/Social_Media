import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/img/logo.png";
import { Icon } from "@iconify/react";
import User from "../../assets/img/Avatar.jpg";
import { Link } from "react-router-dom";
import DrawerSidebar from "../drawer/drawerSidebar";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import { toggleTheme } from "../../store/slices/themeSlice";
import { communityData, navbarBtnsIcon, navbarNav } from "../../constant/data";
import AvatarDropDown from "../../componnets/partials/AvatarDropDown";
import NavSideBar from "../../componnets/partials/navSideBar";
export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const [isNestedOpen, setIsNestedOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const hanldeDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const hanldeDrawerOpen = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [dropdownShow, setDropDownShow] = useState(false);

  const openDropdown = (dropdownType) => {
    clearTimeout(timeoutId);
    if (dropdownType === "COMUNITY") {
      setIsShopDropdownOpen(true);
      setIsBlogDropdownOpen(false);
    } else if (dropdownType === "blog") {
      setIsBlogDropdownOpen(true);
      setIsShopDropdownOpen(false);
    }
  };
  const openNested = () => {
    clearTimeout(timeoutId);
    setIsNestedOpen(true);
  };

  const closeNested = () => {
    const id = setTimeout(() => {
      setIsNestedOpen(false);
    }, 300); // Delay for smooth transition
    setTimeoutId(id);
  };

  const closeDropdown = (dropdownType) => {
    const id = setTimeout(() => {
      if (dropdownType === "COMUNITY") {
        setIsShopDropdownOpen(false);
      } else if (dropdownType === "blog") {
        setIsBlogDropdownOpen(false);
      }
    }, 300);
    setTimeoutId(id);
  };

  const AvatarClick = () => {
    setDropDownShow(!dropdownShow);
  };

  return (
    <nav className="w-full z-50">
      {/* Background Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      )}
      <div
        className={`w-full  h-fit p-2  ${
          isDarkMode ? "bg-[#080D1E] border-none" : "bg-[#FEFEFE] border-b "
        } z-50   ${isDarkMode?'!border-gray-300 ' :'border-[#1111]'}  flex items-center justify-between`}
      >
        <div className="w-[50%] flex items-center">
          <div className="lg:hidden flex" onClick={hanldeDrawerOpen}>
            <Icon
              icon="basil:caret-right-outline"
              className="text-3xl cursor-pointer text-[#6f7f92] "
            />
          </div>
          <span className="lg:w-[30%]  lg:hidden w-full lg:ml-10 ml-2 flex items-center lg:justify-center gap-2">
            <img
              src={Logo}
              alt="Logo"
              className="py-1 max-w-[100%]: h-[2.5em]"
            />
            <h1
              className={`${
                isDarkMode ? "text-white" : "text-[#07142e]"
              }  text-[28px] font-semibold leading-[37.44px]`}
            >
              SocialV
            </h1>
          </span>

          <DrawerSidebar
            isDrawerOpen={isDrawerOpen}
            handleDrawerClose={hanldeDrawerClose}
          />

          <div className={` w-[100%] ml-12  lg:flex hidden `}>
            <ul className="flex gap-4">
              <li className="text-[#2f65b9] font-semibold font-sans text-[16px] cursor-pointer karta">
                HOME
              </li>

              {/* Shop Dropdown */}
              <li
                className="relative group flex font-semibold  text-[#6f7f92]  hover:text-[#2f65b9] font-sans text-[16px] cursor-pointer"
                onMouseEnter={() => openDropdown("COMUNITY")}
                onMouseLeave={() => closeDropdown("COMUNITY")}
              >
                COMUNITY
                <Icon icon="ri:arrow-down-s-line" width="24" height="24" />
                <div
                  className={`w-[40vw] z-50  ${isDarkMode ? "bg-[#080D1E]" : "bg-white"
          }  absolute top-[45px] left-0 mt-2  shadow-md text-[#222] font-sans text-[13px] transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out`}
                  style={{
                    display: isShopDropdownOpen ? "flex" : "none",
                  }}
                >
                  <div className="flex justify-between px-6 py-4">
                    {communityData.map((category, index) => (
                      <div key={index} className="flex-1 w-[15vw]">
                        {/* Category Header */}
                        <h3 className={`font-semibold text-[16px] font-sans mb-2 uppercase  text-sans leading-[27px] ${
                              isDarkMode ? "text-white" : "text-[#07142e]"
                            }  `}>
                          {category.category}
                        </h3>

                        {/* Links */}
                        <ul>
                          {category.links.map((link, linkIndex) => (
                            <li key={linkIndex} className="mb-2">
                              <a
                                href={link.link}
                                className="text-gray-500 text-[16px] font-sans  hover:text-[#2f65b9] transition-colors duration-300"
                              >
                                {link.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
              <li className="text-[#6f7f92] font-semibold cursor-pointer hover:text-[#2f65b9] font-sans text-[16px] cursor-posans">
                PAGES
              </li>

              {/* Blog Dropdown */}
              <li
                className="relative  cursor-pointer group font-semibold  text-[#6f7f92] hover:text-[#2f65b9] font-sans text-[16px] cursor-posans"
                onMouseEnter={() => openDropdown("blog")}
                onMouseLeave={() => closeDropdown("blog")}
              >
                BLOGS
                <div
                  className="absolute left-0 font-sans font-semibold top-[45px] mt-2 w-[15vw] bg-white shadow-md"
                  style={{
                    display: isBlogDropdownOpen ? "flex" : "none",
                    opacity: isBlogDropdownOpen ? 1 : 0,
                    transform: isBlogDropdownOpen
                      ? "translateY(0)"
                      : "translateY(10px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    flexDirection: "column",
                  }}
                >
                  <ul>  
                    <li
                      className={`relative blog  ${isDarkMode ? "bg-[#080D1E]" : "bg-white"
          } font-sans hover:text-[#2f65b9]  py-3 px-3 text-[#6f7f92] cursor-posans flex items-center justify-between`}
                      onMouseEnter={openNested}
                      onMouseLeave={closeNested}
                    >
                      Blog Layout
                      <i className="text-[16px]">&#x2192;</i>
                      <div
                        className={`absolute left-full top-0 ml-2 w-[15vw]  ${isDarkMode ? "bg-[#080D1E]" : "bg-white"
          } shadow-md`}
                        style={{
                          display: isNestedOpen ? "block" : "none",
                          opacity: isNestedOpen ? 1 : 0,
                          transform: isNestedOpen
                            ? "translateX(0)"
                            : "translateX(10px)",
                          transition: "opacity 0.3s ease, transform 0.3s ease",
                        }}
                      >
                        <ul>
                          <li className="py-2 px-3 font-sans text-[#6f7f92] hover:text-[#2f65b9]">
                            11
                          </li>
                          <li className="py-2 px-3 font-sans text-[#6f7f92] hover:text-[#2f65b9]">
                            12
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="text-[#6f7f92]  font-semibold cursor-pointer hover:text-[#2f65b9] font-sans text-[16px] cursor-posans">
                CONTACT
              </li>
            </ul>
          </div>
        </div>

        {/* Md Display */}
        <div
          className="flex lg:hidden  items-center gap-4 mr-4"
        >
          <Icon
          onClick={()=>handleThemeToggle()}
            icon={`${isDarkMode ? "mi:moon" : "uil:brightness"}`}
            className="text-[22px] text-[#6f7f92] cursor-pointer"
          />
          <Icon
            icon="bitcoin-icons:menu-outline"
            onClick={toggleSidebar}
            className="text-[45px] text-[#6f7f92]  lg:hidden cursor-pointer flex"
          />
        </div>

        {/* lg Display */}
        <div className="lg:flex  hidden lg:gap-6 items-center gap-4 lg:mr-10 mr-4">
          {navbarBtnsIcon.map((nav, idx) => (
            <div key={idx} className="relative">
              <Icon
                icon={
                  idx === 0
                    ? isDarkMode
                      ? "mi:moon"
                      : "uil:brightness"
                    : nav.icon
                }
                onClick={idx === 0 ? handleThemeToggle : undefined}
                className="text-[22px] text-[#6f7f92] cursor-pointer"
              />
              {nav?.quanity && (
                <span className="bg-red-500 -top-[6px] left-[10px] rounded-full w-4 h-4 flex justify-center items-center text-[12px] text-white absolute">
                  {nav.quanity}
                </span>
              )}
            </div>
          ))}

          <div
            className="relative w-[45px] rounded-full cursor-pointer"
            onClick={AvatarClick}
          >
            <img src={User} alt="" className="rounded-full" />
          </div>

          <Icon
            icon="bitcoin-icons:menu-outline"
            onClick={toggleSidebar}
            className="text-[45px] text-[#6f7f92]  lg:hidden  flex"
          />
          {dropdownShow && <AvatarDropDown />}
        </div>
      </div>

      {/* Md and Sm */}
      <div className={`w-full p-1 lg:hidden ${isDarkMode ? 'bg-[#080D1E]' : 'bg-[#FEFEFE]'}  flex justify-around items-center gap-4`}>
        {navbarBtnsIcon.slice(1, 6).map((nav, idx) => (
          <div key={idx} className="relative">
            <Icon
              icon={nav.icon}
              className="text-[22px] text-[#6f7f92] cursor-pointer"
            />
            {nav?.quanity && (
              <span className="bg-red-500 -top-[6px] left-[10px] rounded-full w-4 h-4 flex justify-center items-center text-[12px] text-white absolute ">
                {nav?.quanity}
              </span>
            )}
          </div>
        ))}

        <div className="relative w-[30px] rounded-full" onClick={AvatarClick}>
          <img src={User} alt="" className="rounded-full" />
        </div>

        {dropdownShow && <AvatarDropDown />}
      </div>

      <NavSideBar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </nav>
  );
}
