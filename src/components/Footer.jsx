import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-black">
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white bg-black'>
      <div>
        <h1 className='w-full text-3xl font-bold text-white'>Shop<span className="text-orange-500">Gul</span></h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} className='hover:text-orange-500 cursor-pointer duration-200'/>
          <FaInstagram size={30}  className='hover:text-orange-500 cursor-pointer duration-200'/>
          <FaTwitterSquare size={30}  className='hover:text-orange-500 cursor-pointer duration-200'/>
          <FaGithubSquare size={30}  className='hover:text-orange-500 cursor-pointer duration-200'/>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <h6 className='font-semibold text-md text-white'>Solutions</h6>
          <ul className=''>
            <li className='py-2 text-md hover:text-orange-500 cursor-pointer'>Analytics</li>
            <li className='py-2 text-md hover:text-orange-500 cursor-pointer'>Marketing</li>
            <li className='py-2 text-md hover:text-orange-500 cursor-pointer'>Commerce</li>
            <li className='py-2 text-md hover:text-orange-500 cursor-pointer'>Insights</li>
          </ul>
        </div>
        <div>
          <h6 className='font-semibold text-md text-white'>Support</h6>
          <ul>
            <li className='py-2 text-md hover:text-orange-500 cursor-pointer'>Pricing</li>
            <li className='py-2 text-md hover:text-orange-500 cursor-pointer'>Documentation</li>
            <li className='py-2 text-md hover:text-orange-500 cursor-pointer'>Guides</li>
            <li className='py-2 text-md hover:text-orange-500 cursor-pointer'>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className='font-semibold text-md text-white'>Company</h6>
          <ul>
            <li className='py-2 text-md hover:text-orange-500 cursor-pointer'>About</li>
            <li className='py-2 text-md hover:text-orange-500 cursor-pointer'>Blog</li>
            <li className='py-2 text-md hover:text-orange-500 cursor-pointer'>Jobs</li>
            <li className='py-2 text-md hover:text-orange-500 cursor-pointer'>Press</li>
            <li className='py-2 text-md hover:text-orange-500 cursor-pointer'>Careers</li>
          </ul>
        </div>
        <div>
          <h6 className='font-semibold text-md text-white'>Legal</h6>
          <ul>
            <li className='py-2 text-md hover:text-orange-500 cursor-pointer'>Claim</li>
            <li className='py-2 text-md hover:text-orange-500 cursor-pointer'>Policy</li>
            <li className='py-2 text-md hover:text-orange-500 cursor-pointer'>Terms</li>
          </ul>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
