import React from "react";
import { BrandCard, SolutionCard } from "..";
import { images } from "@/public/assets";
import Image from "next/image";

const SolutionsLayout = () => {
  const solutions = [
    { icon: images.Ai, text: "AI / ML" },
    { icon: images.Vr, text: "AR / VR" },
    { icon: images.Blockchain, text: "Blockchain" },
    { icon: images.RPA, text: "RPA" },
    { icon: images.IOT, text: "IoT" },
    { icon: images.OCR, text: "OCR" },
    { icon: images.behance, text: "Voice" },
    { icon: images.Bot, text: "Bots" },
    { icon: images.bigdata, text: "Big Data" },
    { icon: images.location, text: "Location" },
    { icon: images.CRM, text: "CRM" },
    { icon: images.erp, text: "ERP" },
    { icon: images.cms, text: "CMS" },
    { icon: images.behance, text: "Ecommerce" },
    { icon: images.video, text: "Video" },
    { icon: images.metaverse, text: "Metaverse / Web3" },
    { icon: images.fiveg, text: "5G" },
    { icon: images.cloud, text: "Cloud / Edge Computing" },
    { icon: images.data, text: "Data / Analytics" },
    { icon: images.genrativeAI, text: "Generative AI" },
    { icon: images.behance, text: "Super Apps" },
  ];

  const div1 = solutions.slice(0, 6);
  const div2 = solutions.slice(7, 13);
  const div3 = solutions.slice(14, 20);

  return (
    <>
      <div className=" flex justify-center lg:justify-end w-[100%] scale-[0.7] md:scale-[10px]">
        {/* 5  rows */}
        <div className="">
          {div1.map((item, index) => {
            return (
              <SolutionCard key={index} image={item.icon} text={item.text} />
            );
          })}
        </div>

        <div className="mt-10">
          {div2.map((item, index) => {
            return (
              <SolutionCard key={index} image={item.icon} text={item.text} />
            );
          })}
        </div>

        <div className="">
          {div3.map((item, index) => {
            return (
              <SolutionCard key={index} image={item.icon} text={item.text} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SolutionsLayout;
