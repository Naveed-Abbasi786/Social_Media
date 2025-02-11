import React from "react";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
export default function Footer() {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div>
      <div className={`w-[100%] h-full shadow-sm  ${isDarkMode ? "bg-[#080D1E]" : "bg-gray-50"
          }  text-[#848484] p-10`}>
        <div className="grid grid-cols-1 md:grid-cols-5 justify-items-start items-start">
          <ul className="flex justify-center">
            <h1 className={`text-[35px] font-PoppinsBold  ${
                              isDarkMode ? "text-white" : "text-[#222222] "
                            } font-semibold`}>
              SocialV
            </h1>
          </ul>

          <ul>
            <h1 className={`text-[24px] font-semibold mb-4  ${
                              isDarkMode ? "text-white" : "text-[#222222] "
                            }  font-Josefin`}>
              Category
            </h1>
            <li className="mb-2 hover:text-gray-400 cursor-pointer leading-[29px]">
              Men
            </li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer leading-[29px]">
              Women
            </li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer leading-[29px]">
              Kids
            </li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer leading-[29px]">
              Accessories
            </li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer leading-[29px]">
              Shoe
            </li>
          </ul>

          <ul>
            <h1 className={`text-[24px] font-semibold mb-4  ${
                              isDarkMode ? "text-white" : "text-[#222222] "
                            } text-[#222222] font-Josefin`}>
              Useful Links
            </h1>
            <li className="mb-2 hover:text-gray-400 cursor-pointer leading-[29px]">
              News and Tips
            </li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer leading-[29px]">
              About Us
            </li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer leading-[29px]">
              Contact Us
            </li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer leading-[29px]">
              Help & FAQ
            </li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer leading-[29px]">
              Privacy Policy
            </li>
          </ul>

          <ul>
            <h1 className={`text-[24px] font-semibold mb-4  ${
                              isDarkMode ? "text-white" : "text-[#222222] "
                            }  font-Josefin`}>
              Contact
            </h1>
            <li className="mb-2 leading-[29px] cursor-pointer">
              4708 Ruecker Wall, Kassandratown, HI
            </li>
            <li className="mb-2 leading-[29px] cursor-pointer">
              +2(305) 587-3407
            </li>
            <li className="mb-2 leading-[29px] cursor-pointer">
              info@example.com
            </li>
            <div className="flex space-x-4 mt-4">
              <span className="hover:text-gray-400 cursor-pointer">
                <Icon icon="ri:facebook-fill" />
              </span>
              <span className="hover:text-gray-400 cursor-pointer">
                <Icon icon="mingcute:twitter-fill" />
              </span>
              <span className="hover:text-gray-400 cursor-pointer">
                <Icon icon="ri:instagram-fill" />
              </span>
              <span className="hover:text-gray-400 cursor-pointer">
                <Icon icon="ri:google-fill" />
              </span>
            </div>
          </ul>

          <ul>
            <h1 className={`text-[24px] font-semibold mb-4 ${
                              isDarkMode ? "text-white" : "text-[#222222]"
                            } font-Josefin`}>
              Newsletter
            </h1>
            <li className="mb-4 leading-[29px]">
              Subscribe to our newsletter for updates
            </li>
            <li className="">
              <input
                type="text"
                placeholder="Enter Your Email"
                className={`py-2 px-4 border outline-none lg:w-[17vw]  ${isDarkMode ? "bg-[#080D1E]" : "bg-[#F7F8F9]"
          } w-full  mb-2 sm:mb-0 sm:mr-2`}
              />
              <button
                style={{ height: "40px", fontSize: "13px" }}
                className="btn blk font-Poppins"
              >
                <span className="spn bl"></span>Subscribe
              </button>
            </li>
          </ul>
        </div>

        <div className="text-center mt-8 text-gray-500 text-sm">
          &copy; 2024 Your Company Name. All rights reserved.
        </div>
      </div>
    </div>
  );
}
