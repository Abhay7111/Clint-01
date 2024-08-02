import React, { useRef, useState } from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import gold from '/gold.jpg'
import goldh from '/goldh.jpg'
import gold_jewelry from '/gold-jewelry.jpg'
import gemstone from '/gemstone.jpg'

function Home() {
  return (
    <div className='max-w-[1370px] w-full flex flex-col items-center '>
          <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full"
      >
      <SwiperSlide className=' w-96 bg-red-400'><img src={gold} className='w-full h-[80vh] object-cover object-center' /></SwiperSlide>
      <SwiperSlide className=' w-96 bg-red-400'><img src={goldh} className='w-full h-[80vh] object-cover object-center' /></SwiperSlide>
      <SwiperSlide className=' w-96 bg-red-400'><img src={gold_jewelry} className='w-full h-[80vh] object-cover object-center' /></SwiperSlide>
      <SwiperSlide className=' w-96 bg-red-400'><img src={gemstone} className='w-full h-[80vh] object-cover object-center' /></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Home