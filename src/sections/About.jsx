import React, { useEffect } from 'react';
import AboutImage from '../assets/about.jpg';
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();
  console.log("darkMode", darkMode);
  console.log("toggleDarkMode", toggleDarkMode);

  return (
    <section id='about' className={`${darkMode ? 'dark bg-black' : 'light bg-white'} w-full m-auto lg:px-40 px-10 py-10 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}>
      <div>
        <img
          data-aos='zoom-in'
          src={AboutImage}
          alt="About us"
          className='rounded-2xl lg:w-[500px] lg:h-[600px] h-[140px] w-[100%] mx-auto'
        />
      </div>
      <div className='flex flex-col justify-center items-start gap-8'>
      <h1 data-aos='zoom-in' className='text-red-500 dark:text-white'>WHO WE ARE</h1>
<h1 data-aos='zoom-in' className='text-black text-[40px] font-semibold leading-10 dark:text-white'>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, cupiditate?
</h1>
        <p data-aos='zoom-in' className='text-xl text-gray-600 dark:text-white'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt et aliquam itaque ex quia nostrum porro corrupti ipsam excepturi in.
        </p>
        <button className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300">
          Read More
        </button>
      </div>
    </section>
    
  );
};

export default About;