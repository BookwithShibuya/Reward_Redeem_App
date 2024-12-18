import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";

const RewardsSlider = ({ rewards, onRewardClick }) => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Rewards Coupon</h1>   
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {rewards.map((reward) => (
          <SwiperSlide key={reward.id}>
            <div
              onClick={() => onRewardClick(reward.id)}
              className="relative flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <img
                src={reward.image}
                alt={reward.name}
                className="w-80 h-80 object-cover"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 w-full text-center">
                <h3 className="text-lg font-semibold">{reward.name}</h3>
                <p>{reward.points} Points</p>
                <RxArrowTopRight className="inline-block mt-2 text-blue-300 w-6 h-6" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RewardsSlider;
