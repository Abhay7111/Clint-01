import React from 'react'
import Logo from '/Logo_01.png'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className=' py-3 sm:px-20 px-3 flex items-center justify-between'>
     <div className="logo"><img src={Logo} className='w-24 object-cover'/></div>
     <ul className='font-medium text-zinc-800/70 flex top-0 w-1/2 sm:w-auto flex-col sm:flex-row items-center gap-3 uppercase absolute sm:relative'>
          <li><NavLink to='/' className={({isActive})=>`${ isActive ? 'text-orange-400' : 'text-zinc-800/80'}`} >Today's price</NavLink></li>
          <li><NavLink to='Collection' className={({isActive})=>`${ isActive ? 'text-orange-400' : 'text-zinc-800/80'}`} >Collection</NavLink></li>
          <li><NavLink to='Gold' className={({isActive})=>`${ isActive ? 'text-orange-400' : 'text-zinc-800/80'}`} >Gold</NavLink></li>
          <li><NavLink to='Diamond' className={({isActive})=>`${ isActive ? 'text-orange-400' : 'text-zinc-800/80'}`} >Diamond</NavLink></li>
          <li><NavLink to='Apsara' className={({isActive})=>`${ isActive ? 'text-orange-400' : 'text-zinc-800/80'}`} >Apsara</NavLink></li>
          <li><NavLink to='Silver' className={({isActive})=>`${ isActive ? 'text-orange-400' : 'text-zinc-800/80'}`} >Silver</NavLink></li>
          <li><NavLink to='saving scheme' className={({isActive})=>` ${isActive ? 'bg-orange-500' : ''} py-2.5 text-nowrap text-zinc-50 font-medium px-3 bg-red-400 rounded-md`}>Saving scheme</NavLink></li>
     </ul>
    </div>
  )
}

export default Nav