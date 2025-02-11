import React from "react";
import Avatar from "../assets/img/Avatar.jpg";
import VerifyImg from "../assets/img/verify.png";
import Logo from "../assets/img/logo-white.png";
import LeftBanner from "../assets/img/left-banner.webp";
import { useSelector } from "react-redux";
export default function Activities() {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const activitiesData = [
    {
      _id: 1,
      authorProfile: Avatar,
      userName: "Aaron Jones",
      createdAt: "2 years ago",
      group: {
        profileImage: "https://via.placeholder.com/40",
        name: "Squad Ghouls",
      },
    },
    {
      _id: 2,
      authorProfile: Avatar,
      userName: "Aaron Jones",
      createdAt: "1 min ago",
      group: null, // No group
    },
    {
      _id: 2,
      authorProfile: Avatar,
      userName: "Aaron Jones",
      createdAt: "1 min ago",
      group: null, // No group
    },
  ];

  return (
    <div className="w-full h-fit">
      <div className={`w-90%] max-w-4xl  ${isDarkMode ? "bg-[#080D1E]" : "bg-[#F7F8F9]"
          } rounded-lg shadow-md`}>
        {/* Header */}
        <h1 className={` ${isDarkMode ? 'text-white' :'text-[#07142e] '} px-6 pt-6 text-[21px] font-semibold`}>

          Latest Activities
        </h1>
        <hr className="bg-sky-950 mt-2 mb-4 w-[20%] ml-6 border-0 h-[2px]" />

        {/* Activities List */}
        {activitiesData.map((val) => (
          <div
            key={val._id}
            className={`w-full ml-5 py-4 flex items-start border-b  ${ isDarkMode
                  ? "border-[#101421]"
                  : "border-[#F1F1F1]"
              } last:border-b-0`}
          >
            {/* Profile Image */}
            <div>
              <img
                src={val.authorProfile}
                alt="Author Profile"
                className="w-12 h-12 rounded-full object-cover border-2 border-blue-400"
              />
            </div>

            {/* User Details */}
            <div className="ml-4 flex-1">
              <h2 className="text-[#6f7f92] font-semibold text-[15px] flex items-center">
                {val.userName}
                <img
                  src={VerifyImg}
                  alt="Verified"
                  className="w-4 h-4 ml-1 inline-block"
                />
              </h2>
              {val.group ? (
                // If group exists, show group details
                <p className="w-[92%] text-sm text-wrap overflow-hidden  text-gray-700">
                  posted an update in the group{" "}
                  <span className="font-semibold text-gray-700">
                    {val.group.name}
                  </span>
                  .
                </p>
              ) : (
                <p className="text-sm  text-gray-700 -mt-1">
                  posted an update.
                </p>
              )}

              {/* Created At */}
              <p className="text-xs text-gray-500 mt-1">{val.createdAt}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative w-[100%] h-[60vh] mt-16 mx-auto">
        <img src={LeftBanner} alt="" className="w-full h-full object-cover" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className=" bg-opacity-80 p-6 rounded-lg shadow-lg text-center">
            {/* Logo and Heading */}
            <div className="flex items-center justify-center mb-4">
              <img
                src={Logo}
                alt="Logo"
                className="w-42 h-12 mr-2 object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-white flex-wrap overflow-hidden mb-4">
              Feel free to reach us anytime. We are available 24 hours.
            </p>

            {/* Button */}
            <button className="px-6 py-2 bg-white text-black rounded-lg hover:bg-blue-700 hover:text-white">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
