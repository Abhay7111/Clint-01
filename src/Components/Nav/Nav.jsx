import React, { useEffect } from 'react';
import Logo from '/Logo_01.png';
import { NavLink } from 'react-router-dom';

function Nav() {
     useEffect(() => {
          const open = document.querySelector(".open");
          const menu = document.querySelector(".menu");
          const close = document.querySelector(".close");

          open.addEventListener("click", (e)=>{
               menu.style.right = "0vh"
          });
          close.addEventListener("click", ()=>{
               menu.style.right = "-100%"
          })
     })
  return (
    <div className='z-50 py-3 sm:px-20 px-3 flex items-center justify-between'>
     <div className="logo"><NavLink to='/'><img src={Logo} className='w-20 object-cover'/></NavLink></div>
     <ul className='font-medium menu transition-all z-[99] text-zinc-800/70 flex top-0 w-3/4 sm:w-auto flex-col sm:flex-row items-center gap-3 uppercase fixed sm:relative sm:right-auto -right-full sm:pt-0 pt-24 h-full sm:bg-transparent bg-zinc-100'>
          <li><NavLink to='/' className={({isActive})=>`${ isActive ? 'text-orange-400' : 'text-zinc-800/80'}`} >Today's price</NavLink></li>
          <li><NavLink to='Collection' className={({isActive})=>`${ isActive ? 'text-orange-400' : 'text-zinc-800/80'}`} >Collection</NavLink></li>
          <li><NavLink to='Gold' className={({isActive})=>`${ isActive ? 'text-orange-400' : 'text-zinc-800/80'}`} >Gold</NavLink></li>
          <li><NavLink to='Diamond' className={({isActive})=>`${ isActive ? 'text-orange-400' : 'text-zinc-800/80'}`} >Diamond</NavLink></li>
          <li><NavLink to='Apsara' className={({isActive})=>`${ isActive ? 'text-orange-400' : 'text-zinc-800/80'}`} >Apsara</NavLink></li>
          <li><NavLink to='Silver' className={({isActive})=>`${ isActive ? 'text-orange-400' : 'text-zinc-800/80'}`} >Silver</NavLink></li>
          <li><NavLink to='saving scheme' className={({isActive})=>` ${isActive ? 'bg-orange-500' : ''} py-2.5 text-nowrap text-zinc-50 font-medium px-3 bg-red-400 rounded-md`}>Saving scheme</NavLink></li>
          <li className='close sm:hidden absolute top-7 right-3 text-2xl font-bold text-zinc-900 size-8 rounded-full flex items-center justify-center hover:bg-zinc-800 hover:text-zinc-100 transition-all cursor-pointer'><i class="ri-close-line"></i></li>
     </ul>
     <div className='sm:hidden'><i className="ri-menu-line open text-2xl text-red-500 font-bold cursor-pointer"></i></div>
    </div>
  )
}

export default Nav