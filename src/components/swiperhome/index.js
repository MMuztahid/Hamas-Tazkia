import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper';
import './styles.css';

function HomeSwiper() {
    return(
        <>
        <Swiper 
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Headline 1</SwiperSlide>
        <SwiperSlide>Headline 2</SwiperSlide>
        <SwiperSlide>Headline 3</SwiperSlide>
        <SwiperSlide>Headline 4</SwiperSlide>
      </Swiper>
      </>
    );
};

export default HomeSwiper;