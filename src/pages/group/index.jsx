import React from "react";
import Tabs from "./Tabs";
import BgBanner from "../../assets/img/bg-banner.jpg";
import Activities from "../../shared/Actvies";
export default function index() {
  return (
    <div className="w-full p-4 mt-2">
      <div className="relative w-full  h-[40vh]">
        <img src={BgBanner} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center">
          <div className="bg-opacity-80 p-6 rounded-lg shadow-lg text-start">
            <h1 className="text-[40px] leading-[52px] text-white font-semibold">
              Group Directory
            </h1>
            <p className="text-white text-[16px] mb-4 font-sans font-medium">
              Good Communication is the key to cop-up with good ideas
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex">
        <div className="lg:w-[70%] mt-3 w-full">
          
          <Tabs />
        </div>
        <div className="w-[30%] p-4 lg:flex hidden">
          <Activities />
        </div>
      </div>
    </div>
  );
}
