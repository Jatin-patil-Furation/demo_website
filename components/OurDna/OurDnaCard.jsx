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
        className={`cardDiv w-[70%] flex justify-between ${isLast ? "" : "border-b"} py-6 `}
      >
        <div className="flex justify-center items-center basis-[10%] ">
          <p
            className={`text-7xl  font-extrabold capitalize ${
              isActive ? "themeColor" : ""
            } sm:mr-5 ml-5`}
          >
            {heading.slice(0, 1)}
          </p>
        </div>

        {/* <div
          className={`border ${isActive ? "themeBorder" : ""} basis-[2%]`}
        ></div> */}

        <div
          className={`${
            isActive ? "themeBorder" : ""
          } basis-[88%] border-l px-5`}
        >
          <h5 className="capitalize font-bold text-lg md:text-xl lg:text-2xl mb-3">
            {heading}
          </h5>
          <p className="text-left">{description}</p>
        </div>
      </div>
      {/* <div className="border border-gray-700 my-3 w-[60%]"></div> */}
    </>
  );
};

export default OurDnaCard;
