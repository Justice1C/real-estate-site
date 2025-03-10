import React, {useEffect} from 'react'
// import {service} from '../components/export'
import { useDarkMode } from '../components/DarkModeContext';
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      });
    }, []);

    const { darkMode, toggleDarkMode } = useDarkMode();
    console.log(toggleDarkMode);

  return (
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} pb-20`}>
      <section id='services' className={`${darkMode ? 'dark bg-black' : 'light bg-red-100'} lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10`}>
        <div className='flex flex-col justify-center items-start gap-4'>
          <h1>OUR SERVICES</h1>
        </div>
      </section>
    </div>
  )
}

export default Services
