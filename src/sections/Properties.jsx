import React, {useEffect} from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import { property } from '../components/export'
import { FaBath, FaShareAlt, FaBed, FaUserCircle, FaPlus, FaMapMarkerAlt, FaVideo, FaCamera } from 'react-icons/fa'
import { MdSpaceDashboard } from 'react-icons/md'
import AOS from "aos";
import "aos/dist/aos.css";

const Properties = () => {

   useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      });
    }, []);
const {darkMode, toggleDarkMode} = useDarkMode()
console.log(toggleDarkMode)
  return (
   <div id='about' className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
<section id='properties' className='lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10'>
<div className='flex flex-col justify-center items-start gap-4'>
  <h1>PROPERTIES</h1>
</div>
</section>
   </div>
  )
}

export default Properties
