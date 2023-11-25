import React from 'react';
import Laptop from '../assets/laptop1.png';
import Headphone from '../assets/head.png';
import watch from '../assets/watches.png';
const Analytics = () => {
  return (
    <div className='w-full bg-white py-4  flex flex-col px-4 md:px-[80px]'>
      <div className='max-w-[1240px] grid md:grid-cols-2 gap-4'>
        <img className='w-[400px] mx-auto my-4' src={Headphone} alt='/' />
        <div className='flex flex-col justify-center'>
          <h1 className='text-orange-500 font-bold text-2xl'>Headphones</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center order-1 lg:order-last'>
          <h1 className='text-orange-500 font-bold text-2xl'>Smart Watches</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
        <img className='w-[400px] mx-auto my-4' src={watch} alt='/' />
      </div>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[400px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <h1 className='text-orange-500 font-bold text-2xl'>Gaming Laptops</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
