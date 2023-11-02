"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const OurDnaCard = ({ heading, description, isLast }) => {
  const [isActive, setIsActive] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(divRef.current, {
      scrollTrigger: {
        trigger: divRef.current,
        start: "top center",
        end: "bottom center",
        markers: false,
        onEnter: () => {
          setIsActive(true);
        },
        onLeave: () => {
          setIsActive(false);
        },
        onEnterBack: () => {
          setIsActive(true);
        },
        onLeaveBack: () => {
          setIsActive(false);
        },
      },
    });
  }, []);

  return (
    <>
      <div
        ref={divRef}
        className={`cardDiv w-[90%] md:w-[70%] flex justify-between ${
          isLast ? "" : "border-b"
        } py-6 `}
      >
        <div className="flex justify-center items-center w-[20%] mx-auto ">
          <p
            className={`text-7xl  font-extrabold capitalize ${
              isActive ? "themeColor" : ""
            } `}
          >
            {heading.slice(0, 1)}
          </p>
        </div>

        {/* <div
          className={`border ${isActive ? "themeBorder" : ""} basis-[2%]`}
        ></div> */}

        <div
          className={`${isActive ? "themeBorder" : ""} w-[80%]  border-l px-5`}
        >
          <h5 className="capitalize font-bold text-base md:text-xl lg:text-2xl mb-3">
            {heading}
          </h5>
          <p className="text-left text-sm md:text-base lg:text-lg">
            {description}
          </p>
        </div>
      </div>
      {/* <div className="border border-gray-700 my-3 w-[60%]"></div> */}
    </>
  );
};

export default OurDnaCard;
