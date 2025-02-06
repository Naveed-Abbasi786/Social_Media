import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Avatar from "../../assets/img/Avatar.jpg";
import { useNavigate } from "react-router-dom";

export default function Chats() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("messages");

  const messages = [
    {
      profileImg: Avatar,
      name: "Jenney Welsion",
      msg: "That's great, see you soon",
      createdAt: "1Min ago",
      _id: 1,
    },
    {
      profileImg: Avatar,
      name: "Jenney Welsion",
      msg: "That's great, see you soon",
      createdAt: "1Min ago",
      _id: 2,
    },
    {
      profileImg: Avatar,
      name: "Jenney Welsion",
      msg: "That's great, see you soon",
      createdAt: "1Min ago",
      _id: 3,
    },
    {
      profileImg: Avatar,
      name: "Jenney Welsion",
      msg: "That's great, see you soon",
      createdAt: "1Min ago",
      _id: 4,
    },
    {
      profileImg: Avatar,
      name: "Jenney Welsion",
      msg: "That's great, see you soon",
      createdAt: "1Min ago",
      _id: 5,
    },
  ];

  const friends = [
    { profileImg: Avatar, name: "John Doe", _id: 1 },
    { profileImg: Avatar, name: "Jane Doe", _id: 2 },
  ];

  const groups = [
    { profileImg: Avatar, name: "React Developers", _id: 1 },
    { profileImg: Avatar, name: "Tailwind CSS Enthusiasts", _id: 2 },
  ];

  const filteredMessages = messages.filter(
    (message) =>
      message.name.toLowerCase().includes(search.toLowerCase()) ||
      message.msg.toLowerCase().includes(search.toLowerCase())
  );

  const navigate=useNavigate()

  const hanldeChat=(user)=>{
    navigate(`/messeges/${user._id}`)
  }

  return (
    <div className="w-full h-full">
      <div className="p-4 flex bg-white items-center justify-between gap-4 rounded-lg">
        {/* Search */}
        <input
          type="text"
          placeholder="Enter a Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-auto flex-grow border px-4 py-2 rounded-lg focus:outline-none focus:ring text-[#6f7f92] bg-[#EAEFF8] focus:ring-blue-300"
        />
        <button className="w-full sm:w-12 h-10 flex justify-center items-center text-[#6f7f92] bg-[#EAEFF8] text-[20px] rounded-lg sm:rounded-md hover:bg-sky-100 transition">
          <Icon icon="lucide:edit" />
        </button>
      </div>

      {/* Tabs */}
      <div className="w-full mt-6 p-2 rounded-lg flex justify-around items-center bg-white">
        <div
          onClick={() => setActiveTab("messages")}
          className={`text-[13px] flex items-center gap-2 cursor-pointer p-3 rounded-md ${
            activeTab === "messages"
              ? "bg-blue-500 text-white"
              : "text-[#6f7f92]"
          }`}
        >
          <Icon icon="gravity-ui:comments" width={17} />
          <span>Messages</span>
        </div>
        <div
          onClick={() => setActiveTab("friends")}
          className={`text-[14px] flex items-center gap-2 cursor-pointer p-3 rounded-md ${
            activeTab === "friends"
              ? "bg-blue-500 text-white"
              : "text-[#6f7f92]"
          }`}
        >
          <Icon icon="lucide:users-round" width={17} />
          <span>Friends</span>
        </div>
        <div
          onClick={() => setActiveTab("groups")}
          className={`text-[14px] flex items-center gap-2 cursor-pointer p-3 rounded-md ${
            activeTab === "groups" ? "bg-blue-500 text-white" : "text-[#6f7f92]"
          }`}
        >
          <Icon icon="mynaui:users-group" width={22} />
          <span>Groups</span>
        </div>
      </div>

      {/* Tabs Content */}
      <div className="w-full h-full overflow-y-auto mt-2">
        {activeTab === "messages" && filteredMessages.length > 0 ? (
          filteredMessages.map((user) => (
            <div
            onClick={()=>hanldeChat(user)}
              key={user._id}
              className="w-full  p-4 flex mt-4 items-start gap-2 justify-around rounded-lg bg-white"
            >
              <div className="flex items-center gap-2 -ml-5">
                <div className="w-[49px] rounded-full">
                  <img
                    src={user.profileImg}
                    alt=""
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div>
                  <h1 className="text-[#07142e] font-medium text-[15px]">
                    {user.name}
                  </h1>
                  <h5 className="text-[#6f7f92] text-[13px]">{user.msg}</h5>
                </div>
              </div>
              <div className="text-[#6f7f92] text-[14px]">{user.createdAt}</div>
            </div>
          ))
        ) : activeTab === "messages" ? (
          <div className="w-full p-4 mt-4 text-center text-[#6f7f92]">
            No results found
          </div>
        ) : null}

        {activeTab === "friends" && friends.length > 0 ? (
          friends.map((friend) => (
            <div
              key={friend._id}
              className="w-full  p-4 flex mt-4 items-center justify-between gap-2 rounded-lg bg-white"
            >
              <div className="flex items-center gap-2">
                <div className="w-[49px] rounded-full">
                  <img
                    src={friend.profileImg}
                    alt=""
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div>
                  <h1 className="text-[#07142e] font-medium text-[15px]">
                    {friend.name}
                  </h1>
                </div>
              </div>
              <div className="text-[#6f7f92] text-[14px]">
                <Icon icon="uil:user" width={20} />
              </div>
            </div>
          ))
        ) : activeTab === "friends" ? (
          <div className="w-full p-4 mt-4 text-center text-[#6f7f92]">
            No results found
          </div>
        ) : null}

        {activeTab === "groups" && groups.length > 0 ? (
          groups.map((group) => (
            <div
              key={group._id}
              className="w-full  p-4 flex mt-4 items-center justify-between gap-2 rounded-lg bg-white"
            >
              <div className="flex items-center gap-2">
                <div className="w-[49px] rounded-full">
                  <img
                    src={group.profileImg}
                    alt=""
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div>
                  <h1 className="text-[#07142e] font-medium text-[15px]">
                    {group.name}
                  </h1>
                </div>
              </div>
              <div className="text-[#6f7f92] text-[14px]">
                <Icon icon="material-symbols:home-outline-rounded" width={20} />
              </div>
            </div>
          ))
        ) : activeTab === "groups" ? (
          <div className="w-full p-4 mt-4 text-center text-[#6f7f92]">
            No results found
          </div>
        ) : null}
      </div>
    </div>
  );
}
