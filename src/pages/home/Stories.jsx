import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ReactModal from "react-modal";

import "swiper/swiper-bundle.css";
import { stories } from "../../constant/data";
import { useSelector } from "react-redux";

// Stories data


export default function Stories() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStory, setCurrentStory] = useState(null);
  const [progress, setProgress] = useState(0);
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const openModal = (story) => {
    setCurrentStory(story);
    setProgress(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentStory(null);
    setProgress(0);
  };

  // Linear progress effect for 30 seconds
  useEffect(() => {
    let interval;
    if (isModalOpen) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            closeModal();
            clearInterval(interval);
            return 0;
          }
          return prev + 100 / 100; // 30 seconds duration
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isModalOpen]);
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <div className="relative w-[100%] -z-0  p-6">
      {/* Stories Carousel */}
      <Swiper ref={swiperRef} spaceBetween={20} slidesPerView={4}  breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}>
        {stories.map((story, index) => (
          <SwiperSlide
            key={story.id}
            className="flex cursor-pointer  justify-center items-center"
          >
            <div className="" onClick={() => openModal(story)}>
              <img
                src={story.src}
                alt={story.name}
                className="rounded-xl w-full h-[220px] object-cover"
              />
              <div className=" flex   justify-center items-center">
                <img
                  src={story.authorImage}
                  alt={story.name}
                  className="w-18 h-10 absolute bottom-6 space-y-2 border rounded-lg"
                />
                <span className={`text-sm font-medium mt-5 text-center ${
                              isDarkMode ? "text-white" : "text-[#222222] "
                            }  `}>
                  {story.name}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="absolute top-1/2 transform -translate-y-1/2 left-5 z-10">
        <button
          onClick={handlePrev}
          className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition"
        >
          &#10094;
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-5 z-10">
        <button
          onClick={handleNext}
          className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition"
        >
          &#10095;
        </button>
      </div> */}
      {/* Story Modal */}
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
        className={` ${isDarkMode ? "bg-[#080D1E]" : "bg-white"} rounded-lg w-full max-w-lg p-0 relative`}
      >
        {/* Linear Loading Bar */}
        <div className={`absolute top-20 left-0 w-full h-1  ${isDarkMode ? "bg-[#080D1E]" : "bg-gray-300"}`}>
          <div
            className="h-full bg-blue-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-6 right-2 text-gray-700  rounded-full p-2"
        >
          ✕
        </button>

        {/* Story Content */}
        {currentStory && (
          <div className={`flex flex-col ${isDarkMode ? "bg-[#080D1E]" : "bg-white"} rounded-lg overflow-hidden`}>
            {/* Author Details */}
            <div className="flex items-center justify-start gap-2 mb-4 p-4">
              <img
                src={currentStory.authorImage}
                alt={currentStory.name}
                className="w-12 p-1 h-12 object-cover rounded-full"
              />
              <span className="text-lg font-medium text-[#6f7f92]">
                {currentStory.name}
              </span>
              <span className="text-[#6f7f92] text-[30px] -mt-4">.</span>
              <span className="text-[#6f7f92]">1Minute ago</span>
            </div>

            {/* Story Media */}
            <div className="w-full relative">
              <div
                className="absolute inset-0 bg-contain bg-center"
                style={{ backgroundImage: `url(${currentStory.src})` }}
              ></div>
              {currentStory.type === "image" ? (
                <img
                  src={currentStory.src}
                  alt={currentStory.name}
                  className="w-full h-[400px] object-contain rounded-lg"
                />
              ) : (
                <video
                  src={currentStory.src}
                  className="w-full h-[400px] object-cover rounded-lg"
                  autoPlay
                  muted
                  controls
                />
              )}
            </div>
          </div>
        )}
      </ReactModal>
    </div>
  );
}
