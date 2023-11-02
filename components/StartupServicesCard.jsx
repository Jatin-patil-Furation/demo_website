"use client";

import { images } from "@/public/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const StartupServicesCard = ({ data }) => {
  const [isActive, setIsActive] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
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
    <div ref={ref} className="w-full flex justify-between gap-4">
      <div className="w-1/12">
        {isActive && (
          <Image
            className="object-cover"
            src={images.redArrow}
            height={80}
            width={80}
            alt="red arrow"
          />
        )}
      </div>
      <div className="space-y-5 w-11/12">
        <h3 className="text-2xl font-semibold">{data?.head}</h3>
        <p className="text-base leading-5 font-extralight text-white ">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default StartupServicesCard;
