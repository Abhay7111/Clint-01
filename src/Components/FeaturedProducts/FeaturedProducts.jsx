import React, { useRef, useState } from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import nosepin01 from '/ring01-transformed.png'
import nosepin02 from '/ring02-transformed.png'
import nosepin03 from '/ring03-transformed.png'
import nosepin04 from '/ring04-transformed.png'
import nosepin05 from '/ring05-transformed.png'
import nosepin06 from '/ring06-transformed.png'
import nosepin07 from '/ring07-transformed.png'
import nosepin08 from '/ring08-transformed.png'
import nosepin09 from '/ring09-transformed.png'
import nosepin10 from '/ring10-transformed.png'
import nosepin11 from '/ring11-transformed.png'
import nosepin12 from '/ring12-transformed.png'

function FeaturedProducts() {
  return (
    <div className='w-full max-w-[1366px] overflow-hidden'>
     <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-[100vw] cursor-pointer"
      >
      <SwiperSlide className=' bg-img2 flex items-center justify-center'><img src={nosepin01} className=' sm:w-1/2 h-auto  object-cover object-center' /></SwiperSlide>
      <SwiperSlide className=' bg-img2 flex items-center justify-center'><img src={nosepin02} className=' sm:w-1/2 h-auto  object-cover object-center' /></SwiperSlide>
      <SwiperSlide className=' bg-img2 flex items-center justify-center'><img src={nosepin03} className=' sm:w-1/2 h-auto  object-cover object-center' /></SwiperSlide>
      <SwiperSlide className=' bg-img2 flex items-center justify-center'><img src={nosepin04} className=' sm:w-1/2 h-auto  object-cover object-center' /></SwiperSlide>
      <SwiperSlide className=' bg-img2 flex items-center justify-center'><img src={nosepin05} className=' sm:w-1/2 h-auto  object-cover object-center' /></SwiperSlide>
      <SwiperSlide className=' bg-img2 flex items-center justify-center'><img src={nosepin06} className=' sm:w-1/2 h-auto  object-cover object-center' /></SwiperSlide>
      <SwiperSlide className=' bg-img2 flex items-center justify-center'><img src={nosepin07} className=' sm:w-1/2 h-auto  object-cover object-center' /></SwiperSlide>
      <SwiperSlide className=' bg-img2 flex items-center justify-center'><img src={nosepin08} className=' sm:w-1/2 h-auto  object-cover object-center' /></SwiperSlide>
      <SwiperSlide className=' bg-img2 flex items-center justify-center'><img src={nosepin09} className=' sm:w-1/2 h-auto  object-cover object-center' /></SwiperSlide>
      <SwiperSlide className=' bg-img2 flex items-center justify-center'><img src={nosepin10} className=' sm:w-1/2 h-auto  object-cover object-center' /></SwiperSlide>
      <SwiperSlide className=' bg-img2 flex items-center justify-center'><img src={nosepin11} className=' sm:w-1/2 h-auto  object-cover object-center' /></SwiperSlide>
      <SwiperSlide className=' bg-img2 flex items-center justify-center'><img src={nosepin12} className=' sm:w-1/2 h-auto  object-cover object-center' /></SwiperSlide>
     </Swiper>
    </div>
  )
}

export default FeaturedProducts