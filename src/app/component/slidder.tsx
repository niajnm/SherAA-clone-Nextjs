"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const slides = [
  {
    src: "https://picsum.photos/id/1015/800/400",
    title: "Empowering Women in Climate Action",
  },
  {
    src: "https://picsum.photos/id/1016/800/400",
    title: "Sustainable Futures in Rural Communities",
  },
  {
    src: "https://picsum.photos/id/1018/800/400",
    title: "Grassroots Leadership and Change",
  },
];

export default function ImageCarousel() {
  return (
    <div className="w-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}

        autoplay={{ delay: 3000 }}
        loop
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[600px]">
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end  justify-start">
                <h2 className="text-white text-2xl md:text-4xl ms-10 mb-10 font-bold text-center px-4">
                  {slide.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
