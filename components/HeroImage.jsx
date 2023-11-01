"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import React from "react";
import { images } from "@/public/assets";
import gsap from "gsap";

const HeroImage = () => {
  const imgRef = useRef(null);

  return (
    <div className="h-full w-full rounded-xl">
      {/* <Image
        ref={imgRef}
        src={images.studios}
        className="h-full w-full"
        alt=""
      /> */}
         {/* <div className="h-full"> */}
      <video
        className="top-0 left-0 h-full w-full object-cover rounded-xl"
        autoPlay
        loop
        muted
      >
        <source src="https://s3.ap-south-1.amazonaws.com/grappus-website/GrappusVideo-Feb17th+(online-video-cutter.com).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    {/* </div> */}
    </div>
  );
};

export default HeroImage;
