import React from 'react'
import { NavLink } from 'react-router-dom'

function Category({categorydata}) {
  return (
    <div className='w-36 h-44 sm:w-[350px] cursor-pointer bg-img2 sm:h-[300px] relative overflow-hidden'>
     <div className='w-full h-full flex items-center justify-center'>
     <img src={categorydata.img} className={` object-cover  ${categorydata.style} transition-all`} />
     </div>
     <div className='absolute bottom-0 left-0 h-16 w-full py-2 bg-zinc-800/70 flex flex-col items-center'>
          <h2 className='text-2xl text-zinc-50 font-bold'>{categorydata.title}</h2>
          <NavLink to={categorydata.url} className='text-zinc-50'>{categorydata.disc}</NavLink>
     </div>
    </div>
  )
}

export default Category