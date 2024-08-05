import React from 'react';
import Ring10 from '/ring10-transformed.png';
import Ring11 from '/ring11-transformed.png';
import Ring12 from '/ring12-transformed.png';
import Ring14 from '/Ring14.png';
import Ring15 from '/Ring15.png';

function SignatureJewellery() {
  return (
    <div className='w-full sm:w-[70vw] flex relative gap-5'>
          <div className='w-1/2 h-96 sm:h-[650px] flex flex-col gap-5'>
               <div className='h-[55%] flex items-center justify-center bg-img2'><img className='w-full h-full object-cover' src={Ring10} /></div>
               <div className='h-[40%] flex items-center justify-center bg-img2'><img className='w-full sm:w-[90%] h-full object-cover' src={Ring14} /></div>
          </div>
          <div className='w-1/2 h-96 sm:h-[650px] gap-5 flex flex-col items-center justify-start'>
               <div className='w-full h-[35%] flex items-center justify-center bg-img2'><img className='w-[60%] h-full object-cover' src={Ring11} /></div>
               <div className='w-full h-[60%] flex items-center justify-between gap-5'>
                    <div className='w-[50%] flex items-center justify-center bg-img2 h-full'><img className='w-full h-1/2 object-cover' src={Ring12} /></div>
                    <div className='w-[50%] flex items-center justify-center bg-img2 h-full'><img className='w-full h-[80%] object-cover' src={Ring15} /></div>
               </div>
          </div>
    </div>
  )
}

export default SignatureJewellery