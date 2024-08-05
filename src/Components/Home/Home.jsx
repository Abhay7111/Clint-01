import React, { useRef, useState } from 'react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
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
import Ring01 from '/ring01-transformed.png';
import Ring02 from '/ring02-transformed.png';
import Ring03 from '/ring03-transformed.png';
import Ring04 from '/ring04-transformed.png';
import Ring05 from '/ring05-transformed.png';
import Ring06 from '/ring06-transformed.png';
import Ring07 from '/ring07-transformed.png';
import Ring08 from '/ring08-transformed.png';
import Ring09 from '/ring09-transformed.png';
import { NavLink } from 'react-router-dom';
import lftvid from '/19259-300109084_medium.mp4'
import rghtvid from '/24571-344258644_medium.mp4'
import Category from '../Category/Category';
import SignatureJewellery from '../SignatureJewellery/SignatureJewellery';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';

function Home() {
     const categorydata = [
          {
               title:"Nose pin",
               url:"nose pins012",
               img:Ring01,
               disc:"Explore >",
               style:'w-[96%] h-[80%] hover:scale-110',
          },
          {
               title:"Nose pin013",
               url:"nose pins",
               img:Ring02,
               disc:"Explore >",
               style:'h-full hover:scale-110',
          },
          {
               title:"Nose pin014",
               url:"nose pins",
               img:Ring03,
               disc:"Explore >",
               style:'h-full hover:scale-110',
          },
          {
               title:"Nose pin015",
               url:"nose pins",
               img:Ring04,
               disc:"Explore >",
               style:'h-full hover:scale-110',
          },
          {
               title:"Nose pin",
               url:"nose pins016",
               img:Ring05,
               disc:"Explore >",
               style:'h-full hover:scale-110',
          },
          {
               title:"Nose pin",
               url:"nose pins017",
               img:Ring06,
               disc:"Explore >",
               style:'h-full hover:scale-110',
          },
          {
               title:"Nose pin",
               url:"nose pins018",
               img:Ring07,
               disc:"Explore >",
               style:'h-full hover:scale-110',
          },
          {
               title:"Nose pin",
               url:"nose pins019",
               img:Ring08,
               disc:"Explore >",
               style:'h-full hover:scale-110',
          },
          {
               title:"Nose pin",
               url:"nose pins020",
               img:Ring09,
               disc:"Explore >",
               style:'h-full hover:scale-110',
          },
     ]
  return (
    <div className='max-w-[1370px] w-full flex flex-col items-center '>
     <Swiper
        slidesPerView={1}
        spaceBetween={30}
     //    loop={true}
         navigation={true}
     autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full"
      >
      <SwiperSlide className=' w-96'><img src={gold} className='w-full h-80 sm:h-[80vh] object-cover object-center' /></SwiperSlide>
      <SwiperSlide className=' w-96'><img src={goldh} className='w-full h-80 sm:h-[80vh] object-cover object-center' /></SwiperSlide>
      <SwiperSlide className=' w-96'><img src={gold_jewelry} className='w-full h-80 sm:h-[80vh] object-cover object-center' /></SwiperSlide>
      <SwiperSlide className=' w-96'><img src={gemstone} className='w-full h-80 sm:h-[80vh] object-cover object-center' /></SwiperSlide>
     </Swiper>
     <div className='w-full bg-img-gold'>
          <div className='w-full h-full py-5 flex flex-col gap-3 items-center bg-[#c7c7c76e]'>
               <h2 className='uppercase w-fit px-5 bg-gradient-to-l from-orange-400/90 to-orange-600/90 my-5 text-center text-3xl sm:text-4xl py-1.5 text-zinc-100'>Brides of India</h2>
               <div className='flex items-start justify-center gap-4 flex-wrap'>
                    <div className=' bg-gradient-to-br from-yellow-600/80 to-orange-500/80 w-[45%] p-1 sm:w-80 overflow-hidden'>
                    <div className='overflow-hidden'>
                         <NavLink to=''>
                              <img src="https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2019/05/shutterdownw.jpg" className='w-full hover:scale-110 transition-slow h-80 sm:h-[450px] object-cover' />
                         </NavLink>
                    </div>
                         <h2 className=' w-full text-center text-lg text-wrap px-2 font-medium mt-4 '>The Golden Bride</h2>
                         <p className=' w-full text-center text-sm sm:text-lg text-wrap'>An expression of breathtaking <br /> ethnics</p>
                    </div>
                    <div className='bg-gradient-to-br from-yellow-600/80 to-orange-500/80 w-[45%] p-1 sm:w-80 overflow-hidden'>
                    <div className='overflow-hidden'>
                         <NavLink to=''>
                              <img src="https://shaadiwish.com/blog/wp-content/uploads/2020/07/bridal-wedding-jewellery.jpg" className='w-full hover:scale-110 transition-slow h-80 sm:h-[450px] object-cover' />
                         </NavLink>
                    </div>
                         <h2 className=' w-full text-center text-lg text-wrap px-2 font-medium mt-4 '>The Diamond Bride</h2>
                         <p className=' w-full text-center text-sm sm:text-lg text-wrap'>A celebration of glam light and <br /> shimmer</p>
                    </div>
                    <div className='bg-gradient-to-br from-yellow-600/80 to-orange-500/80 w-full p-1 sm:w-80 overflow-hidden'>
                    <div className='overflow-hidden'>
                         <NavLink to=''>
                              <img src="https://cdn.pixabay.com/photo/2023/12/19/11/16/red-8457517_1280.jpg" className='w-full hover:scale-110 transition-slow h-[50vh] sm:h-[450px] object-cover' />
                         </NavLink>
                    </div>
                         <h2 className=' w-full text-center text-lg text-wrap px-2 font-medium mt-4 '>The Antique Bride</h2>
                         <p className=' w-full text-center text-sm sm:text-lg text-wrap'>A treasure of magnificent art <br /> and culture</p>
                    </div>
               </div>
          </div>
     </div>
     <div className='w-full py-5 flex items-center justify-center'>
          <div className='w-32 sm:w-[25%] h-60 sm:h-[580px] '>
               <video src={lftvid} muted autoPlay loop className='w-full h-full object-cover object-center'></video>
          </div>
          <div className='w-1/2 h-60 sm:h-[580px] bg-zinc-100 flex flex-col gap-[2%] sm:gap-14 items-center relative'>
          <div className='absolute w-full h-full opacity-20 bg-img2 z-0'></div>
               <h1 className='text-[7vw] sm:text-[5.5vw] uppercase relative  font-medium leading-none pt-5 text-zinc-600'>Apsara</h1>
               <p className='Playwrite-AR text-[3vw] sm:text-[2vw] relative  pt-5 leading-none text-center text-zinc-600' title='By Vani jewelry'>By Vani jewelry</p>
               <p className='text-sm sm:text-3xl text-center py-5  relative sm:pt-10 text-zinc-600 font-light'>A fast moving world of <br /> expression</p>
               <NavLink to='View collections' className='text-base relative  text-zinc-100 bg-gradient-to-b hover:from-orange-400 hover:to-zinc-800 transition-all from-slate-400 to-zinc-800 uppercase py-1.5 px-3 rounded-md bg-zinc-600'>View collections</NavLink>
          </div>
          <div className='w-32 sm:w-[25%] h-60 sm:h-[580px] '>
               <video src={rghtvid} muted autoPlay loop className='w-full h-full object-cover object-center'></video>
          </div>
     </div>
     <div className='flex flex-col items-center gap-4'>
          <p className='uppercase text-2xl text-zinc-600 font-light'>Shop by</p>
          <p className='uppercase text-5xl text-zinc-600'>Category</p>
          <div className='flex items-center flex-wrap gap-3 sm:gap-6 justify-center'>
          {categorydata.map((item, index)=>(
               <Category categorydata={item}/>
          ))}
          </div>
     </div>
     <h2 className='w-full mt-10 font-light text-2xl text-zinc-500 text-center uppercase'>Signature heritage jewellery</h2>
     <div className='mt-3 flex items-center justify-center bg-img-gray relative w-[98%] before:w-full before:h-full before:absolute before:bg-white/70 py-10 before:z-0'>
          <SignatureJewellery/>
     </div>
     <div>
          <h2 className='uppercase text-2xl py-5 font-light text-zinc-600 w-full text-center'>Featured poducts</h2>
          <FeaturedProducts/>
     </div>
     <div className='flex items-center bg-zinc-100 justify-around py-10 gap-5 w-full'>
          <NavLink to='contact'>
          <div className='flex px-5 py-2 rounded-lg flex-col items-center justify-center'> 
               <i className='ri-truck-fill text-red-500 text-3xl'></i>
               <p className='text-xl text-zinc-800'>Free Delivery!</p>
          </div>
          </NavLink>
          <NavLink to='contact'>
          <div className='flex px-5 py-2 rounded-lg flex-col items-center justify-center'> 
               <i className='ri-map-pin-fill text-red-500 text-3xl'></i>
               <p className='text-xl text-zinc-800'>Your Nearest Stores</p>
          </div>
          </NavLink>
          <a href="#">
          <div className='flex px-5 py-2 rounded-lg flex-col items-center justify-center'> 
               <i className='ri-gift-fill text-red-500 text-3xl'></i>
               <p className='text-xl text-zinc-800'>Gift Cards</p>
          </div>
          </a>
     </div>
    </div>
  )
}

export default Home