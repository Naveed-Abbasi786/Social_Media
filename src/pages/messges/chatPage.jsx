import React, { useState } from "react";
import { Icon } from "@iconify/react"; // Import Iconify
import Avatar from "../../assets/img/Avatar.jpg";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToggleChat } from "../../store/slices/chatsToggle";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Oh wow! I am myself a big fan of Avengers...",
      sender: "Freya Davies",
      time: "21:52",
    },
    {
      id: 2,
      text: "Very true. There was no better way to finish the Avengers...",
      sender: "You",
      time: "21:52",
    },
    {
      id: 3,
      text: "True! Just when I was feeling happy...",
      sender: "Freya Davies",
      time: "21:53",
    },
    {
      id: 4,
      text: "Yes, true. We can't ever see Black Widow, Iron Man...",
      sender: "You",
      time: "21:53",
    },
    { id: 5, text: "Yes, same here. Bye.", sender: "You", time: "21:55" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [editMessage, setEditMessage] = useState(false);
  const [showOptionsReceiver, setShowOptionsReceiver] = useState(false);
  const [showOptionsSender, setShowOptionSender] = useState(false);

  //   const { id } = useParams();
  //   const chat = messages.find((msg) => msg._id === parseInt(id));

  // Add new message
  const handleSend = () => {
    if (newMessage.trim() !== "") {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: newMessage,
          sender: "You",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setNewMessage("");
    }
  };

  const hanldeShowOptions = (msg) => {
    if (msg.sender === "You") {
      setShowOptionSender((prev) => (prev === msg.id ? null : msg.id)); // Toggle sender's options
    } else {
      setShowOptionsReceiver((prev) => (prev === msg.id ? null : msg.id)); // Toggle receiver's options
    }
  };

  // Edit message
  const handleEdit = (id) => {
    const message = messages.find((msg) => msg.id === id);
  };

  const dispatch = useDispatch();
  const chatsToggle=()=>{
   dispatch(ToggleChat())
  }

  // Reverse messages for latest at the bottom
  const sortedMessages = [...messages].reverse();

  return (
    <div className="w-full h-screen   p-2  flex flex-col">
      {/* <div>
      {chat ? (
        <div>
          <h2 className="text-lg font-bold mb-2">{chat.name}</h2>
          <p className="text-gray-700">{chat.msg}</p>
          <small className="text-gray-400">{chat.createdAt}</small>
        </div>
      ) : (
        <p>Chat not found</p>
      )}
    </div> */}
      {/* Header */}
      <div className="flex justify-between items-center -mt-1 py-5 px-5 bg-white text-white rounded-t-lg">
        <div className="flex items-center gap-2">
          <Icon onClick={chatsToggle} icon='lsicon:left-outline'  width={20} className="text-black"/>
          <img src={Avatar} alt="" className="rounded-full w-[30px]" />
          <h1 className="font-semibold text-lg text-[#07142e]">Freya Davies</h1>
        </div>
        <div className="flex it ems-center text-gray-800 gap-2">
          <Icon icon="mdi:phone-outline" width={25} />
          <Icon icon="mdi:video-outline" width={25} />
        </div>
      </div>

      {/* Messages */}
      <>
        <div className="flex-1 bg-white p-2 overflow-y-auto mt-6 space-y-4">
          <h1 className="text-center text-gray-600 pb-2">
            Start a Conversation
          </h1>
          <div className="w-full h-[30px] flex justify-center">
            <h5 className="px-2 py-1 w-[20%] rounded-lg text-center text-[12px] bg-[#ECF1F9] text-[#2f65b9]">
              November 17
            </h5>
          </div>
          <hr className="bg-gray-900 w-full !-mt-3" />

          {/* Messages */}
          {sortedMessages.map((msg) => (
            <div
              key={msg.id}
              className={`!mt-8 relative gap-3 flex ${
                msg.sender === "You" ? "justify-end" : "justify-start"
              } items-center group`}
            >
              {msg.sender !== "You" && (
                <img
                  src={Avatar}
                  alt="Avatar"
                  className="w-[29px] rounded-full"
                />
              )}

              {msg.sender == "You" && (
                <div
                  className="relative"
                  onClick={() => hanldeShowOptions(msg)}
                >
                  {/* Icon with animation */}
                  <div className="text-gray-700 cursor-pointer opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                    <Icon icon="qlementine-icons:menu-dots-16" width={20} />
                  </div>
                </div>
              )}

              {showOptionsSender === msg.id && (
                <>
                  {msg.sender == "You" && (
                    <div className="absolute top-10 left-40 w-[30%] bg-white shadow-lg rounded-lg z-10 p-2">
                      <div className="flex text-gray-700 justify-start gap-2 text-[14px]  items-center">
                        <Icon icon="line-md:edit" width={20} />
                        <span>Edit</span>
                      </div>
                      <div className="flex text-gray-700 justify-start gap-2 text-[14px]  items-center">
                        <Icon icon="line-md:edit" width={20} />
                        <span>Delete</span>
                      </div>
                    </div>
                  )}
                </>
              )}

              {showOptionsReceiver === msg.id && (
                <>
                  {msg.sender !== "You" && (
                    <div className="absolute top-10 left-40 w-[30%] bg-white shadow-lg rounded-lg z-10 p-2">
                      <div className="flex text-gray-700 justify-start gap-2 text-[14px]  items-center">
                        <Icon icon="line-md:edit" width={20} />
                        <span>Reply</span>
                      </div>
                      <div className="flex text-gray-700 justify-start gap-2 text-[14px]  items-center">
                        <Icon icon="line-md:edit" width={20} />
                        <span>Delete</span>
                      </div>
                    </div>
                  )}
                </>
              )}

              <div
                className={`flex flex-col p-2 rounded-lg shadow-md ${
                  msg.sender === "You"
                    ? "bg-[#3366B9] text-white"
                    : "bg-[#F8F9FA] text-[#6f7f92]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm">{msg.text}</p>
                  <span className="text-xs text-gray-400">{msg.time}</span>
                </div>
              </div>

              {msg.sender !== "You" && (
                <div
                  onClick={() => hanldeShowOptions(msg)}
                  className="relative"
                >
                  {/* Icon with animation */}
                  <div className="text-gray-700 cursor-pointer opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                    <Icon icon="qlementine-icons:menu-dots-16" width={20} />
                  </div>
                </div>
              )}

              {msg.sender === "You" && (
                <img
                  src={Avatar}
                  alt="Avatar"
                  className="w-[29px] rounded-full"
                />
              )}
            </div>
          ))}
        </div>
      </>

      {/* Input Section */}
      <div className="flex items-center  gap-2 justify-between -mt-1 bg-white   p-3 rounded-lg border-t">
        <div className="text-gray-800">
          <input
            type="file"
            className="hidden"
            id="file-input"
            onChange={(e) => console.log(e.target.files[0])}
          />
          <label htmlFor="file-input" className="cursor-pointer">
            <Icon icon="proicons:attach" width={20} height={20} />
          </label>
        </div>

        <input
          type="text"
          placeholder="Write your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="w-full p-2  rounded-lg border-none outline-none"
        />
        <button
          onClick={handleSend}
          className="w-1/12 p-2 bg-blue-500 px-2 py-2 text-white rounded-lg flex justify-center items-center"
        >
          <Icon icon="mdi:send" width={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
