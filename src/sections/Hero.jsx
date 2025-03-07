import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import hero from "../assets/hero.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();
  console.log("darkMode", darkMode);

  return (
    <>
      <div className={`${darkMode ? "dark bg-black" : "light bg-white"}`}>
        <section
          id="hero"
          className="w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-28 px-0 gap-7 z-20"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <h1
            data-aos="zoom-in"
            className="text-6xl text-black font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px] ml-10 mr-10"
          >
            Find your nxt Home in Las Vegas
          </h1>
          <p data-aos="zoom-in" className="text-black text-xl lg:pr-[500px] ml-10 mr-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            provident vel dignissimos similique eaque adipisci, repellat
            expedita ex alias id aut dicta ipsam consequatur autem cumque.
            Accusantium velit nesciunt soluta, quis id aut totam, provident
            sequi doloribus consequatur quos incidunt quaerat
          </p>
        </section>
      </div>
      {/* form starts from here */}
      <div
        className={`${darkMode ? "dark-black" : "lightt bg-transparent"} z-10`}
      >
        <div
          data-aos="zoom-out"
          id="form"
          className={`${
            darkMode ? "dark bg-gray-800" : "light bg-white"
          } lg:w-[80%] w-full m-auto justify-center  gap p-8 rounded-xl -mt-12`}
        >
          <div className="w-full">
            <h1 className="text-black font-semibold  dark:text-white">
              LOCATION
            </h1>
            <input
              type="text"
              placeholder="Enter an address, state city or pincode"
              className="bg-white p-2 w-full mt-2 border-b-[1px border-[#c9c7c1]"
            />
          </div>
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">TYPE</h1>
            <select
              name="selectOption"
              id="selectOPtion"
              className="bg-white p-2 border-b-[1px] w-full mb-2 order-[#c9c7c1] text-gray-500 text-md"
            >
              <option value="" disabled selected>
                Select Property
              </option>
              <option value="option1">Rentals</option>
              <option value="option2">Sales</option>
              <option value="option3">Commercial</option>
            </select>
          </div>
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">CATEGORY</h1>
            <select
              name="selectOption"
              id="selectOPtion"
              className="bg-white p-2 border-b-[1px] w-full mb-2 order-[#c9c7c1] text-gray-500 text-md"
            >
              <option value="" disabled selected>
                Property Category
              </option>
              <option value="option1">Apartments</option>
              <option value="option2">Duples</option>
              <option value="option3">Condos</option>
              <option value="option3">Condos</option>
              <option value="option3">Condos</option>
              
            </select>
          </div>
          <div className="w-full">
            <button className="bg-red-600 dar:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300">SUBMIT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
