import React from 'react';
import Typed from 'react-typed';
import Laptop from '../assets/17017.jpg';

const Hero = () => {
  return (
    <div className='text-black h-[800px] px-4 mx-auto max-w-[1240px]'>
      <div className=' item-center w-full h-screen  flex flex-col md:flex-row'>
       <div className="  left-banner flex flex-col   md:h-auto w-[full] md:w-[50%] justify-center">
        
        <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6'>
          Blessed Friday Sale
        </h1>
        <div className='flex items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 text-black'>
            Shop
          </p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-orange-500'
            strings={['Watches', 'Airpods', 'Headphones']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <button className='md:ml-0 bg-[black] w-[100px] md:w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:text-orange-500 duration-200'>Shop Now</button>
      </div>
      <div className="right-banner md:w-[50%] flex justify-end items-center w-[full]">
      <img className='w-[400px] mx-auto ' src={Laptop} alt='/' />
      </div>
      </div>
    </div>
  );
};

export default Hero;
