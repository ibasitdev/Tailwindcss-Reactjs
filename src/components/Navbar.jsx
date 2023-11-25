import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black shadow-sm">
      <h1 className="w-full text-3xl font-bold text-[black]">Shop<span className="text-orange-500">Gul</span></h1>
      <ul className="hidden md:flex">
        <li className="p-4 font-semibold hover:text-orange-500 duration-200 cursor-pointer">Home</li>
        <li className="p-4 font-semibold hover:text-orange-500 duration-200 cursor-pointer">Company</li>
        <li className="p-4 font-semibold hover:text-orange-500 duration-200 cursor-pointer">Shop</li>
        <li className="p-4 font-semibold hover:text-orange-500 duration-200 cursor-pointer">About</li>
        <li className="p-4 font-semibold hover:text-orange-500 duration-200 cursor-pointer">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-white m-4">Shop<span className="text-orange-500">Gul</span></h1>
        <li className="p-4 border-b  hover:text-orange-500 duration-200 cursor-pointer border-orange-500 text-white">Home</li>
        <li className="p-4 border-b  hover:text-orange-500 duration-200 cursor-pointer border-orange-500 text-white">Company</li>
        <li className="p-4 border-b  hover:text-orange-500 duration-200 cursor-pointer border-orange-500 text-white">Resources</li>
        <li className="p-4 border-b  hover:text-orange-500 duration-200 cursor-pointer border-orange-500 text-white">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
