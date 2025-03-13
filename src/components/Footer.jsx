import React, {useEffect} from 'react'
import { useDarkMode } from './DarkModeContext';
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
    <div>
      
    </div>
  )
}

export default Footer
