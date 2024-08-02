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
import Shapes from '/Shapes.png';
import { NavLink } from 'react-router-dom';

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
      <SwiperSlide className=' w-96'><img src={gold} className='w-full h-80 sm:h-[80vh] object-cover object-center' /></SwiperSlide>
      <SwiperSlide className=' w-96'><img src={goldh} className='w-full h-80 sm:h-[80vh] object-cover object-center' /></SwiperSlide>
      <SwiperSlide className=' w-96'><img src={gold_jewelry} className='w-full h-80 sm:h-[80vh] object-cover object-center' /></SwiperSlide>
      <SwiperSlide className=' w-96'><img src={gemstone} className='w-full h-80 sm:h-[80vh] object-cover object-center' /></SwiperSlide>
     </Swiper>
     <div className='w-full bg-img'>
          <div className='w-full h-full py-5 flex flex-col gap-3 items-center bg-[#ffffffb4]'>
               <h2 className='uppercase w-full text-center font-medium text-2xl sm:text-4xl py-6 text-zinc-700'>Brides of India</h2>
               <div className='flex items-start justify-center gap-4'>
                    <div className=' bg-[#ebebeba6] w-[150px] sm:w-80 overflow-hidden'>
                    <div className='overflow-hidden'>
                         <NavLink to=''>
                              <img src="https://cdn.pixabay.com/photo/2016/10/16/12/28/mehndi-designs-1745048_1280.jpg" className='w-full hover:scale-110 transition-transform h-60 sm:h-[450px] object-cover' />
                         </NavLink>
                    </div>
                         <h2 className=' w-full text-center text-lg text-wrap px-2 font-medium mt-4 '>The Golden Bride</h2>
                         <p className=' w-full text-center text-sm sm:text-lg text-wrap'>An expression of breathtaking ethnics</p>
                    </div>
                    <div className=' bg-[#f3f3f362] w-[150px] sm:w-80 overflow-hidden'>
                    <div className='overflow-hidden'>
                         <NavLink to=''>
                              <img src="https://cdn.pixabay.com/photo/2017/06/18/14/47/bindi-2416039_1280.jpg" className='w-full hover:scale-110 transition-transform h-60 sm:h-[450px] object-cover' />
                         </NavLink>
                    </div>
                         <h2 className=' w-full text-center text-lg text-wrap px-2 font-medium mt-4 '>The Diamond Bride</h2>
                         <p className=' w-full text-center text-sm sm:text-lg text-wrap'>A celebration of glam light and shimmer</p>
                    </div>
                    <div className=' bg-[#f3f3f362] w-[150px] sm:w-80 overflow-hidden'>
                    <div className='overflow-hidden'>
                         <NavLink to=''>
                              <img src="https://cdn.pixabay.com/photo/2023/12/19/11/16/red-8457517_1280.jpg" className='w-full hover:scale-110 transition-transform h-60 sm:h-[450px] object-cover' />
                         </NavLink>
                    </div>
                         <h2 className=' w-full text-center text-lg text-wrap px-2 font-medium mt-4 '>The Antique Bride</h2>
                         <p className=' w-full text-center text-sm sm:text-lg text-wrap'>A treasure of magnificent art and culture</p>
                    </div>
               </div>
          </div>
     </div>
     <div className='w-full py-5 flex items-center justify-center'>
          <div className='w-32 sm:w-[15%] h-60 bg-green-400'>
               <video src="" muted autoPlay></video>
          </div>
          <div className='w-1/2 h-60 bg-red-400'></div>
          <div className='w-32 sm:w-[15%] h-60 bg-green-400'>
               <video src="" muted autoPlay></video>
          </div>
     </div>
    </div>
  )
}

export default Home