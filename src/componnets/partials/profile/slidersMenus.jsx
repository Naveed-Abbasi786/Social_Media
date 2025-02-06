import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Icon } from "@iconify/react";

export default function SlideLogos() {
  const icons=[
    {name:"",icon:'fontisto:date'}
  ]
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <div className="w-full lg:flex hidden justify-center items-center  h-[20vh] mt-5 relative">
      <div className="w-[80%] flex justify-center">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={6}
          loop={true}
          autoplay={{
            disableOnInteraction: false,
          }}
        >
          {icon.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <Icon src={logo} alt={`Logo ${index + 1}`} className="h-16" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
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
