"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import { serviceData } from "@/data";

const SliderServices = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] w-[270px] md:h-[340px] md:w-[550px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="group flex h-auto cursor-pointer gap-x-6 rounded-lg border-2 bg-[rgba(65,47,123,0.15)] px-6 py-8 transition-all duration-300 hover:border-secondary hover:bg-[rgba(89,65,169,0.15)] sm:flex-col sm:gap-x-0 md:h-[290px]">
            <div className="mb-4 text-4xl text-secondary">{item.icon}</div>
            <div>
              <h3 className="mb-4 text-lg">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderServices;
