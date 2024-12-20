import React, { useState } from "react";
import BgBanner from "../../assets/img/bp-banner.jpg";
import Activites from '../../componnets/Actvies';
import { Icon } from "@iconify/react";
import Avatar from '../../assets/img/Avatar.jpg'
import { Pagination } from "@mui/material";
export default function Members() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All Members");
  const [sortOption, setSortOption] = useState("Last Active");

  const friendsData = [
    { id: 1, name: "Marvin McKinney",auhtor:true, profileImg: Avatar, location: "United States", lastActive: "4 minutes ago", isFriend: true, registrationDate: "2023-10-05" },
    { id: 2, name: "Jenny Wilson",auhtor:false, profileImg: Avatar,location: "New Mexico, US", lastActive: "2 hours ago", isFriend: false, registrationDate: "2023-08-12" },
    { id: 3, name: " Wilson McKinney ", auhtor:false,profileImg: Avatar, location: "United States", lastActive: "14 minutes ago", isFriend: true, registrationDate: "2023-10-05" },
    { id: 4, name: " Wilson Jenny ",auhtor:false, profileImg: Avatar, location: "New Mexico, US", lastActive: "1 hours ago", isFriend: false, registrationDate: "2023-08-12" },
  ];

  const [friends, setFriends] = useState(friendsData);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleRequest = (id) => {
    setFriends(friends.map(friend =>
      friend.id === id ? { ...friend, isFriend: !friend.isFriend } : friend
    ));
  };

  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedFriends = [...filteredFriends].sort((a, b) => {
    switch (sortOption) {
      case "Newest":
        return new Date(b.registrationDate) - new Date(a.registrationDate);
      case "Alphabetical":
        return a.name.localeCompare(b.name);
      case "Last Active":
        return b.lastActive - a.lastActive;
      default:
        return 0;
    }
  });

  // Filter based on the active tab
  const displayedFriends = activeTab === "All Members" ? sortedFriends : sortedFriends.filter(friend => friend.isFriend);

  const allMembersCount = friends.length;
  const myFriendsCount = friends.filter(friend => friend.isFriend).length;

  return (
    <div className="p-4 mt-0 mb-4">
      <div className="relative w-full  h-[40vh]">
        <img src={BgBanner} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center">
          <div className="bg-opacity-80 p-6 rounded-lg shadow-lg text-start">
            <h1 className="text-[40px] leading-[52px] text-white font-semibold">
              Member Directory
            </h1>
            <p className="text-white text-[16px] mb-4 font-sans font-medium">
              Good Communication is the key to cop-up with good ideas
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex gap-4 mt-4">

        <div className="lg:w-[70%] w-full">

        <div className="mb-4 p-8  bg-white flex items-center justify-between">
  <input
    type="text"
    placeholder="Search Members..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full mb-4 sm:mb-0 border px-4 py-2 rounded-lg focus:outline-none"
  />
  <button className="w-12 h-10  flex justify-center items-center text-white bg-[#2F65B9] text-[23px] rounded-md">
    <Icon icon="ic:baseline-search" />
  </button>
</div>

<div className="bg-white rounded-lg mb-10">
      <div className="flex p-6 justify-between mt-12 items-center border-b mb-4">
        <div className="flex">
          <button
            className={`px-4 py-2 ${
              activeTab === "All Members"
                ? "border-b-2 border-gray-900 text-gray-900"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("All Members")}
          >
            All Members{" "}
            <span className="text-[12px] text-center font-medium bg-orange-400 rounded-full text-white pt-[1px] px-[9px] pb-[2px]">
              {allMembersCount}
            </span>
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "My Friends"
                ? "border-b-2 border-gray-900 text-gray-900"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("My Friends")}
          >
            My Friends{" "}
            <span className="text-[12px] text-center font-medium bg-orange-400 rounded-full text-white pt-[1px] px-[9px] pb-[2px]">
              {myFriendsCount}
            </span>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <h3 className="text-[19px] text-gray-900 font-normal">Show By :</h3>
          <select
            className="border px-4 py-2 text-gray-500 rounded outline-none"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="Last Active">Last Active</option>
            <option value="Newest">Newest</option>
            <option value="Registered">Registered</option>
            <option value="Alphabetical">Alphabetical</option>
          </select>
        </div>
      </div>

      <div className="px-6">
        <ul>
          {displayedFriends.map((friend) => (
            <li
              key={friend.id}
              className="flex items-center bg-[#F8F9FA mt-4 justify-between border-b py-2"
            >
              <div className="flex items-center">
                <img
                  src={friend.profileImg}
                  alt=""
                  className="rounded-full w-16 h-18 ml-2 object-fill"
                />
                <div className="ml-4">
                  <h3 className="text-lg cursor-pointer text-gray-700 hover:text-[#2F65B9] font-semibold">
                    {friend.name}
                  </h3>
                  <div className="flex mt-1 -ml-1">
                    <div className="flex items-center">
                      <Icon icon="mdi:location" className="text-[#6f7f92]" />
                      <p className="text-sm text-[#6f7f92] ml-1">
                        {friend.location}
                      </p>
                    </div>
                    <div className="flex items-center ml-4">
                      <Icon icon="mdi:clock-outline" className="text-[#6f7f92]" />
                      <p className="text-sm text-[#6f7f92] ml-1">
                        {friend.lastActive}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {friend.auhtor &&(
                    <button
                    className="bg-green-500 rounded-full text-white px-4 py-2 "
                  >
                    Author
                  </button>
                )}
             {!friend.auhtor && (
  friend.isFriend ? (
    <button
      onClick={() => handleRequest(friend.id)}
      className="bg-red-500 text-white px-4 py-2 rounded-full"
    >
      Unfriend
    </button>
  ) : (
    <button
      onClick={() => handleRequest(friend.id)}
      className="bg-gray-500 text-white px-4 py-2 rounded-full"
    >
      Add Friend
    </button>
  )
)}

              </div>
            </li>
          ))}
        </ul>

<div className="flex justify-center g h-[17vh] items-center mt-4 mb-10 gap-2">
        <Pagination
  count={2}
  variant="outlined"
  shape="rounded"
  sx={{
    "& .Mui-selected": {
      backgroundColor: "#2f65b9 !important", 
      color: "white !important",  
    },
    "& .MuiPaginationItem-root": {
      borderColor: "gray",
      marginLeft:'18px',
      border:'solid 1px', 
      paddingTop:'22px',
      paddingBottom:'22px',
      paddingLeft:'18px',
      paddingRight:'18px',
      color:'gray'
        },
      }}
/>
      </div>

      </div>
    </div>

        </div>



        <div className="w-[30%]  lg:flex hidden">
          <Activites  />
        </div>
      </div>
    </div>
  );
}
