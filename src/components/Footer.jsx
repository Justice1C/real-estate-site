import React, { useEffect } from 'react';
import { useDarkMode } from './DarkModeContext';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaMobile, FaBuilding, FaFax, FaArrowUp, FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { IoMdMail } from 'react-icons/io';
import prop5 from '../assets/prop5.jpg';
import prop6 from '../assets/prop6.jpg';
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();
  console.log("toggleDarkMode", toggleDarkMode);

  return (
    <>
      <footer className={`${darkMode ? 'dark bg-black' : 'light bg-gray-800'} w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}>
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className='text-white text-2xl font-semibold'>About Us</h1>
          <p className='text-slate-200 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, et. Lorem ipsum dolor sit amet.</p>
          <div id='social-icons' className="flex justify-start items-center gap-4 mt-4">
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaFacebookF className='text-xl' />
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaInstagram className='text-xl' />
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaTwitter className='text-xl' />
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaYoutube className='text-xl' />
            </div>
          </div>
          <h1 className='text-white mt-8'>Copyright Real Estate, All Rights Reserved</h1>
        </div>
        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>Contact Us</h1>
          <div className='flex justify-center items-center gap-3'>
            <FaBuilding className='text-white text-xl ml-2' />
            <p className='text-slate-200'>Lorem, ipsum adipisicing elit. Voluptas exercitationem, tempore quidem voluptate?</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <FaMobile className='text-white text-xl ml-1' />
            <p className='text-slate-200'>+984 2902 0290</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <FaFax className='text-white text-xl ml-1' />
            <p className='text-slate-200'>9494 45949</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <IoMdMail className='text-white text-xl ml-1' />
            <p className='text-slate-200'>domain@gmail.com</p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>Latest Properties</h1>
          <div className='flex justify-center items-center gap-4'>
            <img src={prop5} alt="Property 1" className='w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300' />
            <div>
              <h1 className='text-lg text-white'>Villa with amazing view</h1>
              <p className='text-slate-400'>$ 287.98</p>
            </div>
          </div>
          <div className='flex justify-center items-center gap-4'>
            <img src={prop6} alt="Property 2" className='w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300' />
            <div>
              <h1 className='text-lg text-white'>Smart view from beach</h1>
              <p className='text-slate-400'>$ 487.98</p>
            </div>
          </div>
        </div>
      </footer>
      <div id='icon-box' className='bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6'>
        <Link to='hero' spy={true} smooth={true} offset={-100}>
          <FaArrowUp className='text-white text-xl' />
        </Link>
      </div>
      <div>
        <button onClick={toggleDarkMode} className='flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6 top-6'>
          {darkMode ? <FaMoon size={25} className='text-black' /> : <FaSun size={25} className='text-black' />}
        </button>
      </div>
    </>
  );
}

export default Footer;