"use client";

import React, { useEffect, useRef } from "react";
import "./styles.css";
import Button from "./Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const CareersSection = () => {
  const ref = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        pin: false,
        scrub: 0.2,
        start: "top bottom",
        end: "bottom top",
      },
    });

    tl.set(".ring1, .ring2, .ring3", { rotation: 0 });

    tl.to(".ring1", {
      rotation: 360, // 360 degrees clockwise
      duration: 2,
      ease: "none",
    });

    tl.to(
      ".ring2",
      {
        rotation: -360, // 360 degrees counterclockwise (opposite direction)
        duration: 2,
        ease: "none",
      },
      0 // Add this argument to ensure the animations start at the same time
    );

    tl.to(
      ".ring3",
      {
        rotation: 360, // 360 degrees clockwise
        duration: 2,
        ease: "none",
      },
      0
    );
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div
      ref={ref}
      className="py-32 relative careerSection overflow-hidden flex items-center justify-center min-h-[100vh] w-full h-full mb-[10px]"
    >
      <div className="ring1 absolute top-0 left-0 scale-90"></div>
      <div className="ring2 absolute top-0 left-0 scale-[1.3]"></div>
      <div className="ring3 absolute top-0 left-0 scale-[1.9]"></div>
      <div className="text-white flex gap-2 md:gap-4 flex-col items-center z-[9] scale-75">
        <h4 className="text-[25px] md:text-[60px] leading-[40px] md:leading-[65px] font-bold text-center">
          Feel like a<br />
          good fit?
        </h4>
        <p className="text-md md:text-lg opacity-[0.6]">
          Let's kick some ass together
        </p>

        <Button className="text-lg" text="Get in touch" type="button" />
      </div>
    </div>
  );
};

export default CareersSection;
