import React, {useEffect} from 'react'
import { useDarkMode  } from '../components/DarkModeContext';
import { FaStar } from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css";

const Clients = () => {
  useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      });
    }, []);
const { darkMode, toggleDarkMode } = useDarkMode
console.log("toggleDarkMode", toggleDarkMode);

  return (
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
      <section id='testimonials'className='lg:w-[95%]w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-20 px-6 py-20 gap-y-20' >

<div className='flex fex-col justify-cebter items-start gap04'>
<h1 className='text-red-500 dark:text-white'>OUR CLIENTS</h1>
<h1 datclassName='text-black dark:text-white text-[40px] fot-semibold' leading-10>What our clients <br />saying about us</h1>
</div>
<div id='clients-box' className='grid lg:grid-cols-3 grid-xcols-1 justify-center items-center gp-8 w-full'>

</div>
      </section>
    </div>
  ) 
}

export default Clients