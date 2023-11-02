"use client";

import React, { useEffect, useState } from "react";
import { BrandCard } from "../index";
import { images } from "@/public/assets";

const DesktopLayout = ({ isIpad }) => {
  const [redCardIndices, setRedCardIndices] = useState([]);

  useEffect(() => {
    const shuffle = () => {
      const imagearr = [
        {
          id: 1,
          img: images.tft,
        },
      ];
      const cardIndices = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
      ];
      const shuffledIndices = cardIndices.sort(() => Math.random() - 0.5);
      setRedCardIndices(shuffledIndices.slice(0, 3));
    };

    shuffle();

    const intervalId = setInterval(() => {
      shuffle();
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  if (isIpad) {
    return null;
  }

  return (
    <div className="hidden sm:hidden md:hidden lg:flex xl:flex justify-center md:scale-[0.7] scale-x-50  w-[90%]">
      {/* 2  rows */}
      <div className="mt-10">
        {[
          { id: 0, img: images.akina },
          { id: 1, img: images.alba },
        ].map((item, index) => (
          <BrandCard
            key={index}
            image={item?.img}
            // bg={redCardIndices.includes(item?.id) ? "#EF3239" : "#212121a6"}
            isActive={redCardIndices.includes(item?.id)}
          />
        ))}
      </div>

      {/* 3 rows */}
      <div>
        {[
          { id: 2, img: images.bg },
          { id: 3, img: images.flyer },
          { id: 4, img: images.ginko },
        ].map((item, index) => (
          <BrandCard
            key={index}
            image={item.img}
            isActive={redCardIndices.includes(item?.id)}
            // bg={redCardIndices.includes(item.id) ? "#EF3239" : "#212121a6"}
          />
        ))}
      </div>

      {/* 2  rows */}
      <div className="mt-10">
        {[
          { id: 5, img: images.grandmama },
          { id: 6, img: images.gupta },
        ].map((item, index) => (
          <BrandCard
            key={index}
            image={item.img}
            isActive={redCardIndices.includes(item?.id)}
            // bg={redCardIndices.includes(item.id) ? "#EF3239" : "#212121a6"}
          />
        ))}
      </div>

      {/* 3 rows */}
      <div>
        {[
          { id: 7, img: images.guptaApp },
          { id: 8, img: images.kuwaiti },
          { id: 9, img: images.pritam },
        ].map((item, index) => (
          <BrandCard
            key={index}
            image={item.img}
            isActive={redCardIndices.includes(item?.id)}
            // bg={redCardIndices.includes(item.id) ? "#EF3239" : "#212121a6"}
          />
        ))}
      </div>

      {/* 2  rows */}
      <div className="mt-10">
        {[
          { id: 10, img: images.qinling },
          { id: 11, img: images.quattro },
        ].map((item, index) => (
          <BrandCard
            key={index}
            image={item.img}
            isActive={redCardIndices.includes(item?.id)}
            // bg={redCardIndices.includes(item.id) ? "#EF3239" : "#212121a6"}
          />
        ))}
      </div>

      {/* 3 rows */}
      <div>
        {[
          { id: 12, img: images.spiceklub },
          { id: 13, img: images.taftoon },
          { id: 14, img: images.tft },
        ].map((item, index) => (
          <BrandCard
            key={index}
            image={item.img}
            isActive={redCardIndices.includes(item?.id)}
            // bg={redCardIndices.includes(item.id) ? "#EF3239" : "#212121a6"}
          />
        ))}
      </div>

      {/* 2  rows */}
      <div className="mt-10">
        {[
          { id: 15, img: images.trp },
          { id: 16, img: images.wwi },
        ].map((item, index) => (
          <BrandCard
            key={index}
            image={item.img}
            isActive={redCardIndices.includes(item?.id)}
            // bg={redCardIndices.includes(item.id) ? "#EF3239" : "#212121a6"}
          />
        ))}
      </div>
    </div>
  );
};

export default DesktopLayout;
