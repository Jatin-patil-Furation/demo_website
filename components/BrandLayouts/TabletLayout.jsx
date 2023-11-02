import React from "react";
import BrandCard from "../BrandCard";
import { images } from "@/public/assets";

const TabletLayout = ({ isIpad }) => {
  return (
    // <div className="hidden sm:flex md:hidden lg:hidden xl:hidden justify-center scale-[0.85] w-[90%]">
    <div
      className={`hidden sm:flex ${
        isIpad ? "" : "md:flex lg:hidden xl:hidden"
      } justify-center scale-[0.85] w-[90%]`}
    >
      {/* 4  rows */}
      <div className="mt-10">
        <BrandCard image={images.akina} />
        <BrandCard image={images.alba} />
        <BrandCard image={images.bg} />
        <BrandCard image={images.flyer} />
        <BrandCard image={images.ginko} />
      </div>

      {/* 4 rows without margin */}
      <div>
        <BrandCard image={images.gupta} />
        <BrandCard image={images.guptaApp} />
        <BrandCard image={images.kuwaiti} />
        <BrandCard image={images.pritam} />
        <BrandCard image={images.qinling} />
        <BrandCard image={images.quattro} />
      </div>

      {/* 4  rows */}
      <div className="mt-10">
        <BrandCard image={images.spiceklub} />
        <BrandCard image={images.taftoon} />
        <BrandCard image={images.tft} />
        <BrandCard image={images.trp} />
        <BrandCard image={images.wwi} />
      </div>

      {/* 4 rows without margin */}
      {/* <div>
        <BrandCard image={images.behance} />
        <BrandCard image={images.behance} />
        <BrandCard image={images.behance} />
        <BrandCard image={images.behance} />
      </div> */}
    </div>
  );
};

export default TabletLayout;
