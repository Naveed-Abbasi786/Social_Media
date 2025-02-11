import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Avatar from "../../assets/img/Avatar.jpg";
import { Pagination } from "@mui/material";
import SearchBar from "../../componnets/searchBar";
import CoverBg from "../../assets/img/bg-banner.jpg";
import GroupDp from "../../assets/img/groupDp.jpg";
import { useSelector } from "react-redux";

export default function Groups() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All Groups");
  const [sortOption, setSortOption] = useState("Last Active");
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const groupsData = [
    {
      id: 1,
      name: "Tech Enthusiasts",
      profileImg: GroupDp,
      coverImg: CoverBg,
      isMember: false,
      members: 20,
      post: 12,
      createdAt: "5 minutes ago",
    },
    {
      id: 2,
      name: "React Developers",
      profileImg: Avatar,
      coverImg: CoverBg,
      isMember: true,
      members: 20,
      post: 32,
      createdAt: "1 hour ago",
    },
    {
      id: 3,
      name: "Frontend Devs",
      profileImg: Avatar,
      coverImg: CoverBg,
      isMember: true,
      members: 20,
      post: 122,
      createdAt: "10 minutes ago",
    },
    {
      id: 4,
      name: "Node.js Developers",
      profileImg: Avatar,
      coverImg: CoverBg,
      isMember: true,
      members: 20,
      post: 2,
      createdAt: "2 hours ago",
    },
  ];

  const [groups, setGroups] = useState(groupsData);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleJoinLeaveGroup = (id) => {
    setGroups(
      groups.map((group) =>
        group.id === id ? { ...group, isMember: !group.isMember } : group
      )
    );
  };

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedGroups = [...filteredGroups].sort((a, b) => {
    switch (sortOption) {
      case "Newest":
        return new Date(b.createdAt) - new Date(a.createdAt);
      case "Alphabetical":
        return a.name.localeCompare(b.name);
      case "Last Active":
        return b.createdAt - a.createdAt;
      default:
        return 0;
    }
  });

  const displayedGroups =
    activeTab === "All Groups"
      ? sortedGroups
      : sortedGroups.filter((group) => group.isMember);

  const allGroupsCount = groups.length;
  const myGroupsCount = groups.filter((group) => group.isMember).length;

  return (
    <>
      <div className="mt-2">
        <SearchBar
          search={search}
          setSearch={setSearch}
          placeholder="Search Groups..."
        />
      </div>
      <div className={`${isDarkMode ? "bg-[#091025]" : "bg-white"
          }  -mt-4 rounded-lg mb-10`}>
        <div className="flex flex-col sm:flex-row p-6 justify-between mt-12 items-center border-b mb-4 gap-4 sm:gap-0">
          {/* Tabs Section */}
          <div className="flex flex-nowrap items-center gap-4 w-full">
            <button
              className={`lg:px-4 flex items-center gap-2 flex-nowrap whitespace-nowrap py-2 ${
                activeTab === "All Groups"
                  ? `border-b-2 ${isDarkMode ?'border-gray-700 text-gray-700' :'border-gray-900 text-gray-900'} `
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick("All Groups")}
            >
              <span>All Groups</span>{" "}
              <span className="text-[12px] font-medium bg-orange-400 rounded-full text-white py-[2px] px-[8px]">
                {allGroupsCount}
              </span>
            </button>
            <div className="flex flex-nowrap items-center lg:gap-4 gap-0 w-full">
              <button
                className={`lg:px-4 flex items-center gap-2 flex-nowrap whitespace-nowrap py-2 ${
                  activeTab === "My Groups"
                    ? `border-b-2 ${isDarkMode ?'border-gray-700 text-gray-700' :'border-gray-900 text-gray-900'} `
                    : "text-gray-500"
                }`}
                onClick={() => handleTabClick("My Groups")}
              >
                <span>My Groups</span>{" "}
                <span className="text-[12px] font-medium bg-orange-400 rounded-full text-white py-[2px] px-[8px]">
                  {myGroupsCount}
                </span>
              </button>
            </div>
          </div>

          {/* Filter Section */}
          <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <h3 className={`text-[16px] whitespace-nowrap items-center sm:text-[19px] ${isDarkMode?'text-gray-700' :'text-gray-900'}  font-normal`}>
              Show By:
            </h3>
            <select
              className={`border px-4 py-2 text-gray-500  ${isDarkMode ? "bg-[#080D1E]" : "bg-white"
          } rounded outline-none w-full sm:w-auto`}
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="Last Active">Last Active</option>
              <option value="Newest">Newest</option>
              <option value="Alphabetical">Alphabetical</option>
            </select>
          </div>
        </div>

        <div className="w-full flex justify-center flex-wrap  gap-2">
          {displayedGroups.map((group, idx) => (
            <div
              key={idx}
              className="lg:w-[40%] md:w-[40%] w-full p-5 h-[303px] mb-4  shadow-lg rounded-lg overflow-hidden"
            >
              <div className="h-[33vh] ">
                <div className="w-full h-[125px]">
                  <img
                    src={group.coverImg}
                    alt=""
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
                <div className="-mt-10 flex  flex-col items-center justify-center">
                  <div className="w-20 ">
                    <img
                      src={group.profileImg}
                      alt=""
                      className="w-full h-full object-cover rounded-lg border-2 border-white"
                    />
                  </div>
                  <h1 className="text-gray-700 mt-1">{group.name}</h1>
                  <div className="mt-2 flex gap-2 items-center justify-center space-y-1 text-sm text-gray-600">
                    <div className="flex justify-center items-center space-x-1">
                      <Icon icon="mdi:post" />
                      <span>{group.post} Post</span>
                    </div>
                    <div className="flex justify-center items-center space-x-1">
                      <Icon icon="ph:users-four-fill" />
                      <span>{group.members} Member</span>
                    </div>
                  </div>

                  <div className="-mt-2">
                    {group.isMember ? (
                      <button className="border p-2  rounded-lg bg-[#d1d7e0] mt-4 px-6 font-medium  hover:bg-[#2f65b9] text-[#2f65b9] hover:text-white">
                        {" "}
                        Join Group
                      </button>
                    ) : (
                      <button
                        onClick={() => handleJoinLeaveGroup(group._id)}
                        className="border p-2 rounded-lg bg-red-200 mt-4 px-6 font-medium  hover:bg-[#F26464] text-red-400 hover:text-white"
                      >
                        Leave group
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
