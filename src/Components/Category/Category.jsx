import React from 'react'
import { NavLink } from 'react-router-dom'

function Category({categorydata}) {
  return (
    <div className='w-36 h-44 sm:w-[350px] cursor-pointer bg-img2 sm:h-[300px] relative overflow-hidden'>
     <div className='w-full h-full flex items-center justify-center'>
     <img src={categorydata.img} className={` object-cover  ${categorydata.style} transition-all saturate-[1.3] rotate-12 hover:rotate-2`} />
     </div>
     <div className='absolute bottom-0 left-0  sm:h-16 w-full py-1 sm:py-2 bg-gradient-to-l from-blue-400/40 via-slate-800/50 to-blue-900/40 flex flex-col items-center'>
          <h2 className='sm:text-xl text-zinc-50 font-bold'>{categorydata.title}</h2>
          <NavLink to={categorydata.url} className='text-xs sm:text-sm text-zinc-50'>{categorydata.disc}</NavLink>
     </div>
    </div>
  )
}

export default Category