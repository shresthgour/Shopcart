import React from 'react';
import { Girl_Headphone } from '../assets';

const Hero = () => {
  return (
    <div className='h-[300px] w-full flex justify-around'>
      <div className='flex flex-col justify-center'>
        <h1 className='text-[#003d2a] font-bold text-4xl pb-6'>Grab Upto 50% Off On <br /> Selected Headphone</h1>
        <button className='text-center w-[120px] h-[50px] text-white bg-[#003d2a] rounded-3xl text-base hover:border-2 hover:bg-white hover:text-black hover:border-black hover:font-bold transition delay-75'>Buy Now</button>
      </div>

      <div className=''>
        <img src={Girl_Headphone} alt="Girl_with_headphone" className='h-[300px]' />
      </div>
    </div>
  )
}

export default Hero