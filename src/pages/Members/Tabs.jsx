import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Avatar from "../../assets/img/Avatar.jpg";
import { Pagination } from "@mui/material";
import SearchBar from "../../componnets/searchBar";
export default function Members() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All Members");
  const [sortOption, setSortOption] = useState("Last Active");

  const friendsData = [
    {
      id: 1,
      name: "Marvin McKinney",
      auhtor: true,
      profileImg: Avatar,
      location: "United States",
      lastActive: "4 minutes ago",
      isFriend: true,
      registrationDate: "2023-10-05",
    },
    {
      id: 2,
      name: "Jenny Wilson",
      auhtor: false,
      profileImg: Avatar,
      location: "New Mexico, US",
      lastActive: "2 hours ago",
      isFriend: false,
      registrationDate: "2023-08-12",
    },
    {
      id: 3,
      name: " Wilson McKinney ",
      auhtor: false,
      profileImg: Avatar,
      location: "United States",
      lastActive: "14 minutes ago",
      isFriend: true,
      registrationDate: "2023-10-05",
    },
    {
      id: 4,
      name: " Wilson Jenny ",
      auhtor: false,
      profileImg: Avatar,
      location: "New Mexico, US",
      lastActive: "1 hours ago",
      isFriend: false,
      registrationDate: "2023-08-12",
    },
  ];

  const [friends, setFriends] = useState(friendsData);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleRequest = (id) => {
    setFriends(
      friends.map((friend) =>
        friend.id === id ? { ...friend, isFriend: !friend.isFriend } : friend
      )
    );
  };

  const filteredFriends = friends.filter((friend) =>
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
  const displayedFriends =
    activeTab === "All Members"
      ? sortedFriends
      : sortedFriends.filter((friend) => friend.isFriend);

  const allMembersCount = friends.length;
  const myFriendsCount = friends.filter((friend) => friend.isFriend).length;

  return (
    <div className="w-full">
      <div className="mt-1">
        <SearchBar
          search={search}
          setSearch={setSearch}
          placeholder="Search Members..."
        />
      </div>

      <div className="bg-white -mt-4 rounded-lg mb-10">
        <div className="flex flex-col sm:flex-row p-6 justify-between mt-12 items-center border-b mb-4 gap-4 sm:gap-0">
          {/* Tabs Section */}
          <div className="flex flex-nowrap items-center gap-4  w-full ">
            <button
              className={`lg:px-4 flex items-center gap-2 flex-nowrap whitespace-nowrap  py-2 ${
                activeTab === "All Members"
                  ? "border-b-2 border-gray-900 text-gray-900"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick("All Members")}
            >
              <span>All Members</span>{" "}
              <span className="text-[12px]  font-medium bg-orange-400 rounded-full text-white py-[2px] px-[8px]">
                {allMembersCount}
              </span>
            </button>
            <div className="flex  flex-nowrap items-center lg:gap-4 gap-0 w-full ">
              <button
                className={`lg:px-4 flex items-center gap-2 flex-nowrap whitespace-nowrap  py-2 ${
                  activeTab === "My Friends"
                    ? "border-b-2 border-gray-900 text-gray-900"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabClick("My Friends")}
              >
                <span>My Friends</span>{" "}
                <span className="text-[12px] font-medium bg-orange-400 rounded-full text-white py-[2px] px-[8px]">
                  {myFriendsCount}
                </span>
              </button>
            </div>
          </div>

          {/* Filter Section */}
          <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <h3 className="text-[16px] whitespace-nowrap items-center sm:text-[19px] text-gray-900 font-normal">
              Show By:
            </h3>
            <select
              className="border px-4 py-2 text-gray-500 rounded outline-none w-full sm:w-auto"
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
                className="flex flex-col sm:flex-row items-center bg-[#F8F9FA] mt-4 justify-between border-b py-4 px-4 rounded-lg shadow-sm"
              >
                {/* Profile Section */}
                <div className="flex items-center w-full sm:w-auto">
                  <img
                    src={friend.profileImg}
                    alt={friend.name}
                    className="rounded-full w-14 h-14 sm:w-16 sm:h-16 object-cover"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="text-base sm:text-lg cursor-pointer text-gray-700 hover:text-[#2F65B9] font-semibold">
                      {friend.name}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center mt-2 text-sm text-[#6f7f92]">
                      <div className="flex items-center mb-1 sm:mb-0 sm:mr-4">
                        <Icon
                          icon="mdi:location"
                          className="text-[#6f7f92] text-base"
                        />
                        <p className="ml-1">{friend.location}</p>
                      </div>
                      <div className="flex items-center">
                        <Icon
                          icon="mdi:clock-outline"
                          className="text-[#6f7f92] text-base"
                        />
                        <p className="ml-1">{friend.lastActive}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Buttons Section */}
                <div className="mt-4 sm:mt-0 flex items-center justify-center sm:justify-end w-full sm:w-auto">
                  {friend.auhtor && (
                    <button className="bg-green-500 rounded-full text-white px-4 py-2 text-sm sm:text-base">
                      Author
                    </button>
                  )}
                  {!friend.auhtor &&
                    (friend.isFriend ? (
                      <button
                        onClick={() => handleRequest(friend.id)}
                        className="bg-red-500 text-white px-4 py-2 text-sm sm:text-base rounded-full ml-2"
                      >
                        Unfriend
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRequest(friend.id)}
                        className="bg-gray-500 text-white px-4 py-2 text-sm sm:text-base rounded-full ml-2"
                      >
                        Add Friend
                      </button>
                    ))}
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
                  marginLeft: "18px",
                  border: "solid 1px",
                  paddingTop: "22px",
                  paddingBottom: "22px",
                  paddingLeft: "18px",
                  paddingRight: "18px",
                  color: "gray",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
