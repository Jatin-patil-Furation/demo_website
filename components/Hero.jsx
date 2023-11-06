"use client";
import { useEffect, useRef } from "react";
import { Button, HeroImage } from "./index";
import { transition } from "./hero_animation";
// import { init } from "ityped";

const Hero = () => {
  // const textRef = useRef();

  //   useEffect(() => {
  //     init(textRef.current, {
  //       // showCursor: true,
  //       // backDelay: 2000,
  //       // backSpeed: 70,
  //       strings: ["People.", "Problem Solver"],
  //     });
  //   }, []);
  useEffect(() => {
    transition();
  }, []);

  return (
    <div className="w-[90%] md:w-[100%] flex flex-wrap h-full ">
      <div className="text-white w-full md:w-1/2  md:pl-[70px] md:pr-[40px] flex justify-center flex-col gap-8 text-xl md:text-2xl lg:text-3xl">
        <p className="text-gray-500 ">AI Assisted ...</p>

        <p className="">
          A friendly group of Thinkers, Designers & Techies who love coming up
          with cool ideas and making awesome digital products & platforms.
        </p>
        <p className="">We don't do boring stuff</p>
        <p className="">
          We help organizations & <br /> startups to build {/* <br/>  */}
          {/* <span className="themeColor font-semibold" ref={textRef}></span> */}
          <span
            className="  font-bold typewrite text-lg md:text-xl lg:text-3xl text-red-500"
            data-period="2000"
            data-type='[ "Outstanding", "Data Driven", "Secure", "Scalable", "Engaging", "Beautiful" ]'
          ></span>{" "}
          Digital Products / Platforms.
        </p>
      </div>
      <div className="text-white w-full hidden md:flex md:items-center md:justify-center md:w-1/2 h-[80vh]">
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
