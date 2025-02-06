import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/img/logo.png";
import { Icon } from "@iconify/react";
import User from "../../assets/img/Avatar.jpg";
import { Link } from "react-router-dom";
import DrawerSidebar from "../drawer/drawerSidebar";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import { toggleTheme } from "../../store/slices/themeSlice";
export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const [isNestedOpen, setIsNestedOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const hanldeDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const hanldeDrawerOpen = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const sidebarRef = useRef(null);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [dropdownShow, setDropDownShow] = useState(false);
  const communityData = [
    {
      category: "Social",
      links: [
        { name: "Activity", link: "/activity" },
        { name: "Members", link: "/members" },
        { name: "Groups", link: "/groups" },
        { name: "Badges", link: "/badges" },
      ],
    },
    {
      category: "Profile",
      links: [
        { name: "Timeline", link: "/timeline" },
        { name: "About User", link: "/about-user" },
        { name: "User's Timeline", link: "/users-timeline" },
        { name: "User's Friends", link: "/users-friends" },
        { name: "User's Groups", link: "/users-groups" },
      ],
    },
    {
      category: "Forum",
      links: [
        { name: "All Forums", link: "/all-forums" },
        { name: "Forum Details", link: "/forum-details" },
        { name: "Topic Single", link: "/topic-single" },
      ],
    },
  ];
  const pagesData = [
    { name: "about Us", link: "/" },
    { name: "Reload", link: "/relod" },
    { name: "Contact Us", link: "/relod" },
    { name: "Frequintly", link: "/relod" },
    { name: "Terms&Condition", link: "/relod" },
  ];

  const blogData = [
    { name: "blog Listing", link: "/" },
    { name: "blog grid", link: "/relod" },
    { name: "Blog Sidebar", link: "/relod" },
    { name: "Frequintly", link: "/relod" },
    { name: "Terms&Condition", link: "/relod" },
  ];

  const nav = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop-list" },
    { name: "Blogs", link: "/blog-listing" },
    { name: "About", link: "/about-us" },
    { name: "Contact", link: "/contact-us" },
  ];

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
        className={`w-full  h-fit p-2 bg-[#FEFEFE] z-50 md:border-b flex items-center justify-between`}
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
            <h1 className="text-[#07142e] text-[28px] font-semibold leading-[37.44px]">
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
                  className="w-[40vw] z-50  bg-white absolute top-[45px] left-0 mt-2  shadow-md text-[#222] font-sans text-[13px] transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"
                  style={{
                    display: isShopDropdownOpen ? "flex" : "none",
                  }}
                >
                  <div className="flex justify-between px-6 py-4">
                    {communityData.map((category, index) => (
                      <div key={index} className="flex-1 w-[15vw]">
                        {/* Category Header */}
                        <h3 className="font-semibold text-[16px] font-sans mb-2 uppercase  text-sans leading-[27px]  text-[#07142e]">
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
              <li className="text-[#6f7f92] font-semibold hover:text-[#2f65b9] font-sans text-[16px] cursor-posans">
                PAGES
              </li>

              {/* Blog Dropdown */}
              <li
                className="relative group font-semibold  text-[#6f7f92] hover:text-[#2f65b9] font-sans text-[16px] cursor-posans"
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
                      className="relative blog font-sans hover:text-[#2f65b9] border-b py-3 px-3 text-[#6f7f92] cursor-posans flex items-center justify-between"
                      onMouseEnter={openNested}
                      onMouseLeave={closeNested}
                    >
                      Blog Layout
                      <i className="text-[16px]">&#x2192;</i>
                      <div
                        className="absolute left-full top-0 ml-2 w-[15vw] bg-white shadow-md"
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

              <li className="text-[#6f7f92]  font-semibold hover:text-[#2f65b9] font-sans text-[16px] cursor-posans">
                CONTACT
              </li>
            </ul>
          </div>
        </div>
        <div
          onClick={handleThemeToggle}
          className="flex lg:hidden  items-center gap-4 mr-4"
        >
          <Icon
            icon={`${darkMode ? "mi:moon" : "uil:brightness"}`}
            className="text-[22px] text-[#6f7f92]"
          />
          <Icon
            icon="bitcoin-icons:menu-outline"
            onClick={toggleSidebar}
            className="text-[45px] text-[#6f7f92]  lg:hidden  flex"
          />
        </div>
        <div className="lg:flex  hidden lg:gap-6 items-center gap-4 lg:mr-10 mr-4">
          <Icon
            icon="iconamoon:search-light"
            className="text-[22px] text-[#6f7f92]"
          />
          <Icon icon="uil:brightness" className="text-[22px] text-[#6f7f92]" />
          <Icon icon="tabler:users" className="text-[22px] text-[#6f7f92]" />
          <Icon
            icon="material-symbols:mail-outline"
            className="text-[22px] text-[#6f7f92]"
          />
          <div className="relative">
            <Icon
              icon="mingcute:notification-line"
              className="text-[22px] text-[#6f7f92]"
            />
            <span className="bg-red-500 -top-[6px] left-[10px] rounded-full w-4 h-4 flex justify-center items-center text-[12px] text-white absolute ">
              1
            </span>
          </div>
          <Icon icon="f7:bag" className="text-[22px] text-[#6f7f92]" />

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
          {dropdownShow && (
            <div className="absolute top-20 w-[15vw] rounded-md bg-white shadow-md right-10">
              <ul className="p-4">
                <li className="w-full text-[#6f7f92] font-sans cursor-pointer justify-start items-center flex gap-2 p-2 ">
                  <Icon icon="solar:user-linear" className="text-[20px]" />
                  Profile Info
                </li>
                <li className="w-full text-[#6f7f92] font-sans justify-start cursor-pointer items-center flex gap-2 p-2 ">
                  <Icon icon="weui:setting-outlined" className="text-[20px]" />
                  Account Setting
                </li>
                <li className="w-full text-[#6f7f92] font-sans cursor-pointer justify-start items-center flex gap-2 p-2 ">
                  <Icon icon="lineicons:gallery" className="text-[20px]" />
                  Change Avatar
                </li>
                <li className="w-full text-[#6f7f92] font-sanscursor-pointer justify-start items-center flex gap-2 p-2 ">
                  <Icon icon="weui:setting-outlined" className="text-[20px]" />
                  Profile Setting
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="w-full p-1 lg:hidden bg-[#FEFEFE]  flex justify-around items-center gap-4">
        <Icon
          icon="iconamoon:search-light"
          className="text-[17px] text-[#6f7f92]"
        />
        <Icon icon="tabler:users" className="text-[17px] text-[#6f7f92]" />
        <Icon
          icon="material-symbols:mail-outline"
          className="text-[17px] text-[#6f7f92]"
        />
        <Icon
          icon="mingcute:notification-line"
          className="text-[17px] text-[#6f7f92]"
        />
        <Icon icon="f7:bag" className="text-[17px] text-[#6f7f92]" />

        <div className="relative w-[30px] rounded-full" onClick={AvatarClick}>
          <img src={User} alt="" className="rounded-full" />
        </div>

        {dropdownShow && (
          <div className="lg:w-[30vw] md:w-[30%] absolute top-[130px]  z-50 rounded-md bg-gray-200 right-10">
            <ul className="p-4">
              <li className="w-full text-[#6f7f92] justify-start items-center flex gap-2 p-2 ">
                <Icon icon="solar:user-linear" className="text-[20px]" />
                Profile Info
              </li>
              <li className="w-full text-[#6f7f92] justify-start items-center flex gap-2 p-2 ">
                <Icon icon="weui:setting-outlined" className="text-[20px]" />
                Account Setting
              </li>
              <li className="w-full text-[#6f7f92] justify-start items-center flex gap-2 p-2 ">
                <Icon icon="lineicons:gallery" className="text-[20px]" />
                Change Avatar
              </li>
              <li className="w-full text-[#6f7f92] justify-start items-center flex gap-2 p-2 ">
                <Icon icon="weui:setting-outlined" className="text-[20px]" />
                Profile Setting
              </li>
            </ul>
          </div>
        )}
      </div>

      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 w-[270px] h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <button
          onClick={toggleSidebar}
          className="w-full p-4 flex border-b text-[22px] text-[#07142e] justify-end items-center"
        >
          Close
          <Icon icon="mdi:close" className="text-3xl mt-1 text-gray-600" />
        </button>

        {/* Sidebar Content */}
        <div className="mt-6">
          <div
            className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
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
            {nav.map((item, idx) => (
              <div
                key={idx}
                className="py-1 cursor-pointer hover:text-[#1cc0a0]"
              >
                <a className="w-full" href={item.link}>
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
