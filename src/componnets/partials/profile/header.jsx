import React from "react";
import { Icon } from "@iconify/react";
import DefaultCover from "../../../assets/img/default-cover.jpg";
import Avatar from "../../../assets/img/Avatar.jpg";
import Coin from "../../../assets/img/coin.svg";
import Credit from "../../../assets/img/credit.svg";
import Gems from "../../../assets/img/gems.svg";
import { useSelector } from "react-redux";
export default function Header() {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  
  return (
    <div>
      {/* Cover Image Section */}
      <div className="w-full relative h-[50vh]">
        <img
          src={DefaultCover}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className={`absolute top-4 right-4  ${isDarkMode ? "bg-[#080D1E] text-gray-400" : "bg-white text-[#2f65b9]"}   hover:bg-[#2f65b9] hover:text-white cursor-pointer ease-linear duration-100 rounded-lg text-[14px] p-2`}>
          <Icon icon="akar-icons:edit" />
        </div>
      </div>

      {/* Lg: Profile Section */}
      <div className="w-full h-fit mb-4 lg:flex hidden relative">
  <div className={`w-[96%] mx-auto mb-6  ${isDarkMode ? "bg-[#080D1E]" : "bg-white"} rounded-lg shadow-lg grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-4`}>
    {/* Left Section */}
    <div className="p-8">
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex items-center">
          <img src={Coin} alt="Coin Icon" className="w-6 h-6 mr-2" />
          <h3 className={`${isDarkMode?'text-gray-700':'text-[#07142e]'}  text-[17px] font-semibold leading-[28px]`}>
            8420 Coins
          </h3>
        </div>
        <div className="flex items-center">
          <img src={Credit} alt="Credit Icon" className="w-6 h-6 mr-2" />
          <h3 className={`text-[17px] font-semibold leading-[28px] ${isDarkMode?'text-gray-700':'text-[#07142e]'}`}>
            12530 Credits
          </h3>
        </div>
        <div className="flex items-center">
          <img src={Gems} alt="Gems Icon" className="w-6 h-6 mr-2" />
          <h3 className={`text-[17px] font-semibold leading-[28px] ${isDarkMode?'text-gray-700':'text-[#07142e]'} `}>
            100 Gems
          </h3>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-4 mt-4">
        <div className="bg-[#2f65b9] p-2 rounded-md hover:scale-110 transition-transform">
          <Icon icon="akar-icons:facebook-fill" className="text-white w-4 h-4 cursor-pointer" />
        </div>
        <div className="bg-[#6EC1E4] p-2 rounded-md hover:scale-110 transition-transform">
          <Icon icon="akar-icons:twitter-fill" className="text-white w-4 h-4 cursor-pointer" />
        </div>
        <div className="bg-[#f9101e] p-2 rounded-md hover:scale-110 transition-transform">
          <Icon icon="akar-icons:youtube-fill" className="text-white w-4 h-4 cursor-pointer" />
        </div>
        <div
          style={{
            background: "linear-gradient(45deg, #f09433, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888)",
          }}
          className="p-2 rounded-md hover:scale-110 transition-transform"
        >
          <Icon icon="akar-icons:instagram-fill" className="text-white w-4 h-4 cursor-pointer" />
        </div>
      </div>
    </div>

    {/* Center Section */}
    <div className="flex justify-center items-center  -mt-40">
      <div className="flex flex-col items-center text-center">
        <div className="relative w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] border-[5px] border-white rounded-md mb-2">
          <img src={Avatar} alt="Profile Picture" className="w-full h-full rounded-md" />
          <div className="absolute -top-3 -right-4 px-1 flex justify-center items-start py-[5px] rounded-full text-white bg-[#3366B9]">
            <Icon icon="basil:camera-outline" width={20} />
          </div>
          <div className="bg-[#61C893] absolute -bottom-3 left-10 px-3 flex justify-center items-center rounded-lg text-white text-sm">
            Online
          </div>
        </div>
        <h2 className={`text-xl font-semibold ${isDarkMode?'text-gray-700':'text-gray-900'}  mt-4`}>Marvin McKinney</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <div className="flex items-center text-gray-500 text-sm">
            <Icon icon="weui:location-outlined" width={14} className="mr-1" />
            <p>United States</p>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Icon icon="typcn:world" width={14} className="mr-1" />
            <a
              href="https://iqonic.design/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-500"
            >
              iqonic.design
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex justify-between items-center text-center p-4">
      <div>
        <p className="text-gray-700 font-bold text-[19px]">0</p>
        <p className="text-gray-500 text-[17px]">Posts</p>
      </div>
      <div>
        <p className="text-gray-700 font-bold text-[19px]">0</p>
        <p className="text-gray-500 text-[17px]">Comments</p>
      </div>
      <div>
        <p className="text-gray-700 font-bold text-[19px]">137.7K</p>
        <p className="text-gray-500 text-[17px]">Views</p>
      </div>
    </div>
  </div>
</div>

  {/* Mobile Profile Section */}
  <div className="w-full h-fit  mb-4 lg:hidden flex relative">
  <div className={`w-[96%]   mx-auto mb-6  ${isDarkMode ? "bg-[#080D1E]" : "bg-white"} rounded-lg shadow-lg grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-4`}>
   
      {/* Avatar Section */}
      <div className="flex justify-center items-center  -mt-10">
      <div className="flex flex-col items-center text-center">
        <div className="relative w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] border-[5px] border-white rounded-md mb-2">
          <img src={Avatar} alt="Profile Picture" className="w-full h-full rounded-md" />
          <div className="absolute -top-3 -right-4 px-1 flex justify-center items-start py-[5px] rounded-full text-white bg-[#3366B9]">
            <Icon icon="basil:camera-outline" width={20} />
          </div>
          <div className="bg-[#61C893] absolute -bottom-3 left-10 px-3 flex justify-center items-center rounded-lg text-white text-sm">
            Online
          </div>
        </div>
        <h2 className={`text-xl font-semibold ${isDarkMode?'text-gray-700':'text-gray-900'} mt-4`}>Marvin McKinney</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <div className="flex items-center text-gray-500 text-sm">
            <Icon icon="weui:location-outlined" width={14} className="mr-1" />
            <p>United States</p>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Icon icon="typcn:world" width={14} className="mr-1" />
            <a
              href="https://iqonic.design/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-500"
            >
              iqonic.design
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Icons Section */}
    <div className="">
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex items-center">
          <img src={Coin} alt="Coin Icon" className="w-6 h-6 mr-2" />
          <h3 className={`text-[17px] font-semibold leading-[28px]  ${isDarkMode?'text-gray-700':'text-[#07142e]'}`}>
            8420 Coins
          </h3>
        </div>
        <div className="flex items-center">
          <img src={Credit} alt="Credit Icon" className="w-6 h-6 mr-2" />
          <h3 className={`text-[17px] font-semibold leading-[28px] ${isDarkMode?'text-gray-700':'text-[#07142e]'}`}>
            12530 Credits
          </h3>
        </div>
        <div className="flex items-center">
          <img src={Gems} alt="Gems Icon" className="w-6 h-6 mr-2" />
          <h3 className={`text-[17px] font-semibold leading-[28px] ${isDarkMode?'text-gray-700':'text-[#07142e]'}`}>
            100 Gems
          </h3>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-4 mt-4">
        <div className="bg-[#2f65b9] p-2 rounded-md hover:scale-110 transition-transform">
          <Icon icon="akar-icons:facebook-fill" className="text-white w-4 h-4 cursor-pointer" />
        </div>
        <div className="bg-[#6EC1E4] p-2 rounded-md hover:scale-110 transition-transform">
          <Icon icon="akar-icons:twitter-fill" className="text-white w-4 h-4 cursor-pointer" />
        </div>
        <div className="bg-[#f9101e] p-2 rounded-md hover:scale-110 transition-transform">
          <Icon icon="akar-icons:youtube-fill" className="text-white w-4 h-4 cursor-pointer" />
        </div>
        <div
          style={{
            background: "linear-gradient(45deg, #f09433, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888)",
          }}
          className="p-2 rounded-md hover:scale-110 transition-transform"
        >
          <Icon icon="akar-icons:instagram-fill" className="text-white w-4 h-4 cursor-pointer" />
        </div>
      </div>  
    </div>


    {/* Post Section */}
    <div className="flex justify-between items-center text-center p-4">
      <div>
        <p className="text-gray-700 font-bold text-[19px]">0</p>
        <p className="text-gray-500 text-[17px]">Posts</p>
      </div>
      <div>
        <p className="text-gray-700 font-bold text-[19px]">0</p>
        <p className="text-gray-500 text-[17px]">Comments</p>
      </div>
      <div>
        <p className="text-gray-700 font-bold text-[19px]">137.7K</p>
        <p className="text-gray-500 text-[17px]">Views</p>
      </div>
    </div>
  </div>
</div>



    </div>
  );
}
