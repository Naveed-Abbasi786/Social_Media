import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { icons } from "../../../constant/data";

export default function SlidesMenus() {


  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <div className="w-full flex justify-center items-center h-[20vh]  mt-5  relative">
      <Swiper
       ref={swiperRef}
       modules={[Autoplay]}
       spaceBetween={2}
       slidesPerView={6}
       loop={true}
       autoplay={{
         disableOnInteraction: false,
       }}
        // spaceBetween={2}
        // slidesPerView={6}
        // navigation
        // modules={[Navigation]}
        className="w-[95%]"
      >
        {icons.map((val, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center p-10 bg-white  text-gray-600 rounded-sm">
              <div className="p-4 bg-[#F8F9FA] rounded-md mb-2">
              <Icon icon={val.icon} className="h-5 w-5  text-[#6f7f92]" />
              </div>
              <p className="text-sm font-medium text-[#6f7f92]">{val.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-1/2 transform -translate-y-1/2 left-5 z-10">
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
      </div>
    </div>
  );
}
