"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import "./styles.css";

const SolutionCard = ({ image, text }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="h-[160px] w-[160px] md:h-[200px] md:w-[200px] bg-black border    gradient_border grid grid-cols-2 relative mr-2 mb-2 p-0  overflow-hidden">
        <Image
          height={60}
          width={60}
          data-aos="fade-in"
          data-aos-duration="4000"
          data-aos-delay="500"
          //   className="absolute align-middle self-center justify-self-center"
          className="absolute top-[1.4rem] left-[1.1rem]  md:top-10 md:left-10"
          src={image}
          alt=""
        />
        <p className="absolute bottom-[1.5rem] left-[1.1rem] text-xl md:bottom-8 md:left-10 md:text-2xl">{text}</p>
      </div>
    </>
  );
};

export default SolutionCard;
