import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import WhatsApp from "../../assets/img/whatsapp.png";
import ReactModal from "react-modal";
import { Toaster, toast } from "react-hot-toast";
import EmojiPicker from "emoji-picker-react";
import { posts } from "../../constant/data";
import { useSelector } from "react-redux";
// Dummy data for multiple posts

export default function Post() {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const [showCommentsSection, setShowCommentSection] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [showLikePicker, setShowLikePicker] = useState(false);

  // Handle emoji selection
  const [isLikeLoading, setIsLikeLoading] = useState(false);

  const [likes, setLikes] = useState([
    { username: "John", emoji: "❤️" },
    { username: "Sara", emoji: "👍" },
    { username: "Mike", emoji: "😂" },
    { username: "Anna", emoji: "😍" },
  ]);
  const displayedLikes = likes.slice(0, 3);
  const [showLikesModal, setShowLikesModal] = useState(false);

  const handleReaction = (emoji) => {
    setSelectedEmoji(emoji.emoji);
    setShowLikePicker(false);
    toast.success(`You selected: ${emoji.emoji}`, {
      position: "top-center",
    });
  };

  const toggleModal = () => {
    setShowLikesModal(!showLikesModal);
  };

  const hanldeLikeShow = (post) => {
    setShowLikePicker((prev) => (prev === post._id ? null : post._id));
  };

  const hanldeShareShow = (post) => {
    setIsModalOpen((prev) => (prev === post._id ? null : post._id));
  };

  const videoLink = "https://youtu.be/OQFcVITaHx4?si=9abjNZq_Hqjz7QLy";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(videoLink);
    toast.success("Link Copied!", {
      position: "top-center",
    });
  };

  const handleShare = (platform) => {
    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          videoLink
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          videoLink
        )}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          videoLink
        )}`;
        break;
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
          videoLink
        )}`;
        break;
      default:
        break;
    }
    window.open(shareUrl, "_blank");
  };

  const openModal = (story) => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleComments = (post) => {
    setShowCommentSection((prev) => (prev === post._id ? null : post._id));
  };
  const hanldeReply = (post) => {
    setShowReply((prev) => (prev === post._id ? null : post._id));
  };

  return (
    <div className="space-y-5 p-6 lg:p-0 h-fit -ml-4 mb-10">
      {posts.map((post) => (
        <div
          key={post._id}
          className={`w-auto ml-2   lg:ml-8 mb-10 h-fit ${
            isDarkMode ? "bg-[#080D1E]" : "bg-[#F7F8F9]"
          } shadow-md rounded-lg overflow-hidden mt-5`}
        >
          {/* Post Header */}
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-cente">
              {post?.group?.profileImage ? (
                <div className="relative w-12 -top-2 h-12">
                  {/* Group image */}
                  <img
                    src={post?.group?.profileImage} // Group profile image
                    alt="Group Profile"
                    className="w-full h-full rounded-full object-cover border-2 border-blue-400"
                  />
                  {/* Author image over the group image */}
                  <img
                    src={post?.author?.profileImage} // Author's profile image
                    alt="Author Profile"
                    className="absolute bottom-0 right-0 w-6 h-6 rounded-full object-cover border-2 border-blue-400"
                  />
                </div>
              ) : (
                // If no group, only show author image
                <img
                  src={post?.author?.profileImage}
                  alt="Author Profile"
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-400"
                />
              )}

              <div className="ml-3">
                <h1 className="font-bold text-gray-800">{post?.group?.name}</h1>
                <h3 className="font-bold text-[#6f7f92]">{post.author.name}</h3>
                <span className="text-sm text-gray-500">
                  {post.author.headline} • {post.postTime}
                </span>
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div className="px-4">
            {/* Post Text */}
            {post.content.text && (
              <p className="text-gray-700 mb-3">{post.content.text}</p>
            )}

            {/* Post Media */}
            {post.content.type === "image" &&
              post.content.media.length === 1 && (
                <img
                  src={post.content.media[0]}
                  alt="Post"
                  className="w-full h-[380px] object-cover rounded-lg"
                />
              )}

            {post.content.type === "video" &&
              post.content.media.length === 1 && (
                <video
                  src={post.content.media[0]}
                  controls
                  className="w-full rounded-lg"
                />
              )}

            {/* Collage for Multiple Images */}
            {post.content.type === "collage" &&
              post.content.media.length > 1 && (
                <div className="grid grid-cols-2 gap-2">
                  {post.content.media.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Collage ${index}`}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  ))}
                </div>
              )}
          </div>

          {showLikePicker === post._id && (
            <div
              className="transform scale-95 transition-transform duration-200"
              style={{ zIndex: 1000 }}
            >
              <div className="app-container">
                <EmojiPicker
                  reactionsDefaultOpen={true}
                  onEmojiClick={handleReaction}
                />
              </div>
            </div>
          )}
          {/* Display Selected Emoji */}

          {/* Show "You and X others" */}
          <div className=" ml-2 p-2 flex items-center">
            <div className="cursor-pointer w-auto p-2 items-center flex mt-3">
              {selectedEmoji && (
                <span className="text-[23px] border-none">{selectedEmoji}</span>
              )}
              <img
                src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/love.png"
                className={`w-[30px] h-[26px]`}
                alt=""
              />
              <img
                src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/happy.png"
                alt=""
                className={`w-[30px] h-[26px]`}
              />
            </div>
            <div className="flex flex-wrap gap-1 text-[#6f7f92]  mt-3">
              <span>Reacted By</span>
              <span className="font-semibold text-gray-700 whitespace-nowrap">
                Aron Janoes
              </span>
              and
              <span className="font-semibold text-gray-700">2 Others</span>
            </div>
          </div>

          {showLikesModal === post._id && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div
                className={`${
                  isDarkMode ? "bg-[#080D1E]" : "bg-[#F7F8F9]"
                } p-5 rounded-lg w-8`}
              >
                <h2 className="text-xl font-semibold mb-4">Likes</h2>
                <ul>
                  {likes.map((like, index) => (
                    <li key={index} className="mb-2">
                      {like.username} liked this with {like.emoji}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={toggleModal}
                  className="mt-4 w-full bg-red-500 text-white py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Post Footer */}
          <div className={`mt-3 p-2`}>
            <div
              className={`p-4 flex flex-wrap gap-4 lg:justify-between md:justify-between justify-center items-center py-2 ${
                isDarkMode
                  ? "bg-[#080D1E] border-[#101421]"
                  : "bg-[#F7F8F9] border-[#F1F1F1]"
              } border-t`}
            >
              {/* Like Button */}
              <button
                onClick={() => hanldeLikeShow(post)}
                className={`flex items-center text-gray-600 group  ${
                  isDarkMode ? "hover:text-blue-200 " : "hover:text-blue-500 "
                }  text-sm sm:text-base`}
              >
                {selectedEmoji ? (
                  <span className="!border-none text-lg sm:text-xl">
                    {selectedEmoji}
                  </span>
                ) : (
                  <Icon
                    icon="iconamoon:like-light"
                    className={`text-gray-700 ${
                      isDarkMode
                        ? "group-hover:text-blue-200 "
                        : "group-hover:text-blue-500 "
                    }  text-[18px] sm:text-[22px]`}
                  />
                )}
                <span className="ml-1">Like ({post.likes})</span>
              </button>

              {/* Comment Button */}
              <button
                className={`flex items-center group text-gray-600 ${
                  isDarkMode ? "hover:text-blue-200 " : "hover:text-blue-500 "
                } hover:text-blue-500 text-sm sm:text-base`}
                onClick={() => handleComments(post)}
              >
                <Icon
                  icon="arcticons:psms"
                  className={`text-gray-700  ${
                    isDarkMode
                      ? "group-hover:text-blue-200 "
                      : "group-hover:text-blue-500 "
                  } text-[16px] sm:text-[20px]`}
                />
                <span className="ml-1">Comment ({post.comments})</span>
              </button>

              {/* Share Button */}
              <button
                onClick={() => hanldeShareShow(post)}
                className={`flex items-center group text-gray-600 ${
                  isDarkMode ? "hover:text-blue-200 " : "hover:text-blue-500 "
                } hover:text-blue-500 text-sm sm:text-base`}
              >
                <Icon
                  icon="mdi-light:share"
                  className={`  ${
                    isDarkMode
                      ? "group-hover:text-blue-200 "
                      : "group-hover:text-blue-500 "
                  } text-gray-700 text-[18px] sm:text-[22px]`}
                />
                <span className="ml-1">Share ({post.shares})</span>
              </button>
            </div>

            {showCommentsSection === post._id && (
              <>
                <div key={post._id}>
                  {/* Comments */}
                  <>
                    <div className="py-2 px-10  flex w-full">
                      <img
                        src={post.author.profileImage}
                        alt=""
                        className="rounded-full w-10 h-10  px-[2px] py-[2px] "
                      />
                      <div
                        className={`  ${
                          isDarkMode ? "bg-[#091025]" : "bg-[#EEF0F2]"
                        }  w-full p-1 ml-2 rounded-lg`}
                      >
                        <div className="flex justify-between">
                          <h1
                            className={`font-semibold px-3 ${
                              isDarkMode ? "text-white" : "text-gray-900"
                            } `}
                          >
                            Lori Ferguson
                          </h1>
                          <span className="text-gray-500 text-sm mr-2">
                            5 hours ago
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm py-2 px-3">
                          See resolved goodness felicity shy civility domestic
                          had but Drawings .
                        </p>
                      </div>
                    </div>
                    <div className="flex lg:w-[60%] md:w-[40%] sm:w-[100%] ml-[73px] flex-wrap  px-4 gap-2 items-center">
                      <span className="text-gray-500 text-sm">Like (5)</span>{" "}
                      <span className=" font-semibold  text-4xl text-gray-500 -mt-5"></span>{" "}
                      <span
                        className="text-gray-500 text-sm"
                        onClick={() => hanldeReply(post)}
                      >
                        Reply (5)
                      </span>
                      <span className="font-semibold  text-4xl text-gray-500 -mt-5 "></span>
                      <span className="text-gray-500 text-sm">
                        View 2 Replies
                      </span>
                    </div>
                  </>

                  {/* CommentsReplies */}
                  <>
                    <div className="p-2 ml-20  flex w-[370px]">
                      <img
                        src={post.group.profileImage}
                        alt=""
                        className="rounded-full w-10 h-10  px-[2px] py-[2px]"
                      />
                      <div
                        className={`${
                          isDarkMode ? "bg-[#091025]" : "bg-[#EEF0F2]"
                        } w-full p-[6px] rounded-lg ml-2`}
                      >
                        <div className="flex justify-between">
                          <h1
                            className={`font-semibold px-3 ${
                              isDarkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Lori Ferguson
                          </h1>
                          <span className="text-gray-500 text-sm mr-2">
                            5 hours ago
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm py-2 px-3">
                          See resolved goodness felicity shy civility domestic
                          had but Drawings .
                        </p>
                      </div>
                    </div>
                    <div className="flex lg:w-[60%] md:w-[40%] sm:w-[100%] ml-24 flex-wrap  px-4 gap-2 items-center">
                      <span className="text-gray-500 text-sm">Like (5)</span>{" "}
                      <span className=" font-semibold  text-4xl text-gray-500 -mt-5"></span>{" "}
                      <span
                        className="text-gray-500 text-sm"
                        onClick={() => hanldeReply(post)}
                      >
                        Reply (5)
                      </span>
                      <span className="font-semibold  text-4xl text-gray-500 -mt-5 "></span>
                      <span className="text-gray-500 text-sm">
                        View 2 Replies
                      </span>
                    </div>
                  </>

                  {/* Comment Reply */}
                  {showReply && (
                    <div className="py-2 px-2 ml-24  flex w-[440px]">
                      <img
                        src={post.author.profileImage}
                        alt=""
                        className="rounded-full w-10 h-10  px-[2px] py-[2px] "
                      />
                      <div
                        className={`${
                          isDarkMode ? "bg-[#091025]" : "bg-[#EEF0F2]"
                        }w-full p-2 ml-2 rounded-lg`}
                      >
                        <div className="flex justify-between">
                          <h1
                            className={`font-semibold px-3  ${
                              isDarkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Lori Ferguson
                          </h1>
                          <span className="text-gray-500 text-sm mr-2">
                            5 hours ago
                          </span>
                        </div>
                        <div
                          className={` ${
                            isDarkMode ? "bg-[#091025]" : "bg-[#EEF0F2]"
                          } flex justify-between items-center w-full px-3 ml-2 focus:outline-none focus:border-sky-500 focus:ring-1 cursor-pointer`}
                        >
                          <input
                            type="text"
                            placeholder="Add a Reply"
                            className={`w-full rounded-lg bg-transparent border-none ${
                              isDarkMode ? "text-gray-500" : "text-gray-900"
                            } outline-none  py-2`}
                          />
                          <svg
                            className="text-gray-500"
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Add Comments */}
                  <div className="py-2 px-3 flex">
                    <img
                      src={post.author.profileImage}
                      alt=""
                      className="rounded-full w-10 h-10  px-[2px] py-[2px] "
                    />
                    <div
                      className={` ${
                        isDarkMode ? "bg-[#091025]" : "bg-[#EEF0F2]"
                      } flex justify-between items-center w-full px-3 ml-2 focus:outline-none focus:border-sky-500 focus:ring-1 cursor-pointer`}
                    >
                      <input
                        type="text"
                        placeholder="Add a Comment"
                        className={`w-full rounded-lg bg-transparent ${
                          isDarkMode ? "text-gray-500" : "text-gray-900"
                        } border-none outline-none  py-2`}
                      />
                      <svg
                        className="text-gray-500"
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </>
            )}

            <ReactModal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              overlayClassName="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
              className={` ${
                isDarkMode ? "bg-[#091025]" : "bg-[#EEF0F2]"
              } rounded-lg w-full max-w-lg p-4 relative`}
            >
              <Toaster /> {/* Hot Toast Notifications */}
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4  text-gray-700 rounded-full p-2 hover:bg-gray-200"
              >
                ✕
              </button>
              {/* Modal Content */}
              <div className="text-center">
                <h2
                  className={`text-xl ${
                    isDarkMode ? "text-gray-500" : "text-gray-900"
                  } font-bold mb-4`}
                >
                  Share this Post
                </h2>

                {/* Video Link */}
                <div
                  className={`flex items-center justify-between ${
                    isDarkMode ? "bg-[#080D1E]" : "bg-gray-100"
                  }  p-2 rounded-lg mb-4`}
                >
                  <input
                    type="text"
                    value={videoLink}
                    readOnly
                    className="bg-transparent flex-1 text-sm outline-none text-gray-700"
                  />
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600"
                    onClick={copyToClipboard}
                  >
                    Copy
                  </button>
                </div>

                {/* Share Icons */}
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => handleShare("facebook")}
                    className={` ${
                      isDarkMode
                        ? "bg-[#080D1E] hover:bg-gray-900"
                        : "bg-gray-100 hover:bg-gray-200"
                    } p-3 rounded-full `}
                  >
                    <img
                      src="https://img.icons8.com/color/48/facebook-circled--v1.png"
                      alt="Facebook"
                      className="w-12 h-12"
                    />
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className={`p-3 rounded-full ${
                      isDarkMode
                        ? "bg-[#080D1E] hover:bg-gray-900"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    <img
                      src="https://img.icons8.com/color/48/twitter-circled--v1.png"
                      alt="Twitter"
                      className="w-12 h-12"
                    />
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className={`${
                      isDarkMode
                        ? "bg-[#080D1E] hover:bg-gray-900"
                        : "bg-gray-100 hover:bg-gray-200"
                    } p-3 rounded-full`}
                  >
                    <img
                      src="https://img.icons8.com/color/48/linkedin-circled.png"
                      alt="LinkedIn"
                      className="w-12 h-12"
                    />
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className={`${
                      isDarkMode
                        ? "bg-[#080D1E] hover:bg-gray-900"
                        : "bg-gray-100 hover:bg-gray-200"
                    } p-3 rounded-full `}
                  >
                    <img src={WhatsApp} alt="WhatsApp" className="w-12 h-12" />
                  </button>
                </div>
              </div>
            </ReactModal>
          </div>
        </div>
      ))}
    </div>
  );
}
