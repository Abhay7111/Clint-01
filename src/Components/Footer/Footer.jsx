import React from 'react';
import Logo_01 from '/Logo_01-transformed.png';
import expertsalution_qr from '/expertsalution_qr.png';

function Footer() {
  return (
    <div className='flex flex-col sm:flex-row bg-orange-200'>
        <div className='w-full sm:w-[70%] p-5 flex flex-col sm:flex-row'>
          <div className='w-auto text-[#141414af]'>
          <img src={Logo_01} className='w-24'/>
          <p className='text-sm font-light mt-6'>Since 1954, Navrathan has delighted the connoisseurs of India with breathtaking designs, intricate craftsmanship and ancient techniques, presenting a wealth of gold, diamond & platinum jewellery to adorn the modern day woman.</p>
          <p className='text-sm font-light mt-6'>Navrathan's specializes in integrating temple jewellery designs into modern settings that are contemporary marvels from meenakari, kundan and polki styles.</p>
          <div className=' flex items-start justify-start gap-4 mt-4 px-3'>
          <img src={expertsalution_qr} className=' w-40' />
          <div className='flex flex-col gap-2'>
            <a href="#"><i class="ri-map-pin-line"></i> Gold Plaza, 26, Adi Banstalla Lane <br /> 4th Floor, Shop No. 403 Kolkata-700 007</a>
            <span><a className='hover:text-blue-600 hover:underline underline-offset-2' href="https://wa.me/+918583898958?text="><i className=' ri-whatsapp-line'></i> 8583898958</a> / <a className='hover:text-blue-600 hover:underline underline-offset-2' href="https://wa.me/+918420310541?text=">8420310541</a></span>
            <a className='hover:text-blue-600 hover:underline underline-offset-2' href="mailto:vanijewels@yahoo.com"><i className='ri-mail-send-line'></i> vanijewels@yahoo.com</a>
            <a className='hover:text-blue-600 hover:underline underline-offset-2' href="https://vanijewels.co"><i class="ri-global-line"></i> vanijewels.co</a>
          </div>
          </div>
          </div>
          <div className=''>
              <h2 className='py-3 font-medium text-lg'>Instagram</h2>
              <div className='flex flex-wrap gap-4 sm:w-80'>
                <a href="#"><img src="https://cdn.pixabay.com/photo/2017/06/18/14/47/bindi-2416039_1280.jpg" className=' w-52 h-52 sm:size-28 hover:scale-105 transition-all object-cover bg-blue-400 rounded-lg' /></a>
                <a href="#"><img src="https://cdn.pixabay.com/photo/2023/12/19/11/16/red-8457517_1280.jpg" className=' w-52 h-52 sm:size-28 object-center hover:scale-105 transition-all object-cover bg-blue-400 rounded-lg' /></a>
                <a href="#"><img src="https://cdn.pixabay.com/photo/2016/10/16/12/28/mehndi-designs-1745048_1280.jpg" className=' w-52 h-52 sm:size-28 object-top hover:scale-105 transition-all object-cover bg-blue-400 rounded-lg' /></a>
              </div>
          </div>
        </div>
        <div className='w-full sm:w-[30%] p-5 px-8 flex flex-col gap-2 '>
          <h2 className='text-xl font-medium mb-2'>Follow us on Social Media</h2>
          <span className='text-2xl flex gap-3 hover:text-zinc-800/50 w-fit'>
            <a href="#"><i class="transition-all hover:text-zinc-800 ri-instagram-line"></i></a>
            <a href="#"><i class="transition-all hover:text-zinc-800 ri-facebook-fill"></i></a>
            <a href="#"><i class="transition-all hover:text-zinc-800 ri-pinterest-line"></i></a>
          </span>
          <div className='w-full flex items-start justify-center text-zinc-600 gap-7'>
            <ul className='flex flex-col items-start justify-start gap-3'>
              <li><a className='hover:text-zinc-800' href="#">About us</a></li>
              <li><a className='hover:text-zinc-800' href="#">Stores</a></li>
              <li><a className='hover:text-zinc-800' href="#">In the news</a></li>
              <li><a className='hover:text-zinc-800' href="#">Contact Us</a></li>
              <li><a className='hover:text-zinc-800' href="#">FAQ</a></li>
              <li><a className='hover:text-zinc-800' href="#">Jewellery Care</a></li>
              <li><a className='hover:text-zinc-800' href="#">Blogs</a></li>
            </ul>
            <ul className='flex flex-col items-start justify-start gap-3'>
              <li><a className='hover:text-zinc-800' href="#">Terms & Conditions</a></li>
              <li><a className='hover:text-zinc-800' href="#">Privacy</a></li>
              <li><a className='hover:text-zinc-800' href="#">Disclaimer</a></li>
              <li><a className='hover:text-zinc-800' href="#">Shipping</a></li>
              <li><a className='hover:text-zinc-800' href="#">Return</a></li>
              <li><a className='hover:text-zinc-800' href="#">Payment</a></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Footer