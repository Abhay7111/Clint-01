import React, { useRef, useState } from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

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
      <SwiperSlide className=' w-96 bg-red-400'>Slide 1</SwiperSlide>
      <SwiperSlide className=' w-96 bg-blue-400'>Slide 2</SwiperSlide>
      <SwiperSlide className=' w-96 bg-green-400'>Slide 3</SwiperSlide>
      <SwiperSlide className=' w-96 bg-yellow-400'>Slide 4</SwiperSlide>
      ...
    </Swiper>
    </div>
  )
}

export default Home