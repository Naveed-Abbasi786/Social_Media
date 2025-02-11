import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "../../assets/img/logo.png";
import Avatar from "../../assets/img/Avatar.jpg";
import "../../App.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleDrawer, openDrawer, closeDrawer } from "../../store/slices/drawerSlice";
import { nav } from "../../constant/data";
const Drawer = () => {
  // const [isOpen, setIsOpen] = useState(true);
  const isOpen = useSelector((state) => state.drawer.isOpen);
  const dispatch = useDispatch();
     const isDarkMode = useSelector((state) => state.theme.darkMode);
  
  // const toggleDrawer = () => {
  //   setIsOpen(!isOpen);
  // };

  const navigate=useNavigate()

  const location = useLocation();

  return (
    <div className=" w-min-[20px]">
      <div
        className={`flex relative transition-all duration-300 ease-in-out border-l ${
          isOpen ? "w-60" : "w-16"
        } h-full`}
      >
        <div
          onClick={() => dispatch(toggleDrawer())}
          className="absolute -right-[17px] z-0 top-[120px] rounded-md h-8 w-10 text-center flex justify-center items-center shadow-sm bg-white transform rotate-[310deg] cursor-pointer text-white"
        >
          <div className="-mr-5 mt-2">
            <Icon
              icon={
                isOpen
                  ? "basil:caret-left-outline"
                  : "basil:caret-right-outline"
              }
              className="text-2xl text-[#6f7f92] transform rotate-[50deg]"
            />
          </div>
        </div>

        {/* Drawer */}
        <div
          className={`h-[100vh] shadow-lg z-10 ${isDarkMode ? 'bg-[#080D1E]':'bg-white'}  border-l transition-all duration-300 ease-in-out ${
            isOpen ? "w-60 p-4" : "w-16"
          } flex flex-col gap-4`}
        >
          {/* Drawer Content (Visible when the drawer is open) */}
          {isOpen ? (
            <>
              {/* Logo and Title */}
              <div    onClick={()=>navigate('/')} className="flex -mt-1  items-center gap-3 pb-2">
                <img
                  src={Logo}
                  alt="Logo"
                  className="h-[2.2em]  cursor-pointer object-cover w-auto"
                />
                <h1 className={` ${isDarkMode ? 'text-white' : 'text-[#07142e]'} cursor-pointer text-[28px] font-sans font-semibold`}>
                  SocialV
                </h1>
              </div>
              <hr  className={`${isDarkMode?'border-[#101421]':'border-[F1F1F1]'}  border-t-1  w-[17.5vw] overflow-hidden -ml-4 -mt-[17px]`}/>

              {/* Profile Image and Name */}
              <div  onClick={()=>navigate('/profile')} className="flex cursor-pointer items-center border-b pb-6 mt-2 space-x-3">
                <img
                  src={Avatar}
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
                <div className="cursor-pointer"   onClick={()=>navigate('/profile')}
                >
                  <p className={`font-semibold  ${isDarkMode ? 'text-white' :'text-[#07142e]'}  text-[16px]`}>
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
                    className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer ${
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

              {/* Bottom Actions */}
              <div className={`w-full mt-10  ${isDarkMode ?'bg-[#080D1]' :'bg-[#F8F9FA] '}  p-2 rounded-md flex justify-between`}>
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
                  <Icon icon="mdi:youtube" className="text-xl text-[#6f7f92]" />
                </button>
              </div>
            </>
          ) : (
            // Drawer Closed Content
            <>
              <div className="w-full  flex flex-col  items-center space-y-4">
                <div className="w-8 h-12">
                  
                  <img
                    src={Logo}
                    alt=""
                    className="w-full h-full mt-2 object-contain"
                    onClick={()=>navigate('/')}
                  />
                </div>
                <hr className={`${isDarkMode?'border-[#101421]':'border-[#F1F1F1]'} border-t-1   !mt-3 !w-[4.8vw] `} />
                <div className="">
                  <button className="mt-2">
                    <img
                      src={Avatar}
                      alt="Profile"
                      className="w-24 h-10 object-contain rounded-full"
                    />
                  </button>
                </div>
                <hr className={`${isDarkMode?'border-[#101421]':'border-[#F1F1F1]'} border-t-1 !w-[6vw] -mt-2`} />

                {/* <hr className={`${isDarkMode?'border-[#101421]':'border-[F1F1F1]'}   !w-[4vw] -mt-3`} /> */}
                <h1 className="text-[#6f7f92] font-semibold !mt-6">Menu</h1>

                
                {nav.slice(0,2).map((nav,idx)=>(                  
                <button className="p-2  hover:bg-[#2F65B9] !mt-3 rounded-md hover:text-white">
                  <Link to='icon'>
                  <Icon
                    icon={nav.icon}
                    className="text-xl text-[#6f7f92] hover:text-white"
                    />
                    </Link>
                </button>
                ))}
              

                
              <div className={`w-full p-6 flex flex-col justify-between items-center !mt-20  ${isDarkMode ?'bg-[#080D1]' :'bg-[#F8F9FA] '} rounded-md gap-6`}>
                {nav.slice(2,5).map((nav,idx)=>(
                 <button className="group p-2 rounded-md hover:bg-[#2F65B9]">
                 <Icon
                   icon={nav.icon}
                   className="text-xl text-[#6f7f92] group-hover:text-white"
                 />
               </button>
               
                ))}
                  
                


                </div>

              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
