"use client";

import React, { useEffect } from "react";
import { images } from "@/public/assets";
import Image from "next/image";

const WhatWeDoSection = () => {
  const whatWeDo = [
    "Strategy",
    "Branding",
    "Designs",
    "Engineering",
    "Product Management",
  ];

  useEffect(() => {
    const liElements = document.querySelectorAll(".whatWeDoItem");
    const totalElements = liElements.length;

    const applyOpacityClass = (index) => {
      liElements[index].classList.add("opacity-50");

      setTimeout(() => {
        liElements[index].classList.remove("opacity-50");

        // Calculate the next index using modulo to loop back to the first element
        const nextIndex = (index + 1) % totalElements;
        applyOpacityClass(nextIndex);
      }, 2000); // Remove opacity class after 2 seconds
    };

    applyOpacityClass(0); // Start applying opacity class from the first element
  }, []);

  return (
    <div className="w-[90%] md:grid md:grid-cols-3 ">
      <div className="md:col-span-1">
        <h4 className="text-center md:text-left text-4xl font-extrabold mb-3">
          What we do.
        </h4>
        <p className="text-center md:text-left opacity-80">
          We believe in perfection by design and performance by default.
        </p>
        <div>
          <Image src={images.uber} className="w-full h-full" alt="" />
        </div>
      </div>

      <div className="md:col-span-2 md:flex md:justify-end">
        <ul>
          {whatWeDo.map((item, index) => (
            <li className="mb-8 whatWeDoItem" key={index}>
              <div className="pb-2 font-bold leading-[1] text-[40px] md:text-[40px] lg:text-[50px] xl:text-[62px] capitalize text-center md:text-left md:truncate">
                {item}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhatWeDoSection;
