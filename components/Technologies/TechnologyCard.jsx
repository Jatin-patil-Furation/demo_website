import { images } from "@/public/assets";
import Image from "next/image";
import React from "react";
import { FaPhp } from "react-icons/fa";

const TechnologyCard = ({ heading, technologies }) => {
  return (
    <div className="text-white w-full h-full rounded-xl py-8 px-10 box-shadow">
      <div>
        <h5 className="capitalize text-3xl font-semibold mb-3">{heading}</h5>
        <div className="flex flex-col gap-5">
          {technologies.map((item, index) => {
            return (
              <div key={index} className="flex gap-4 items-center">
                {React.createElement(item.icon, { size: 29, color: "white" })}
                {/* <Image src={item.icon} height={30} width={30} alt="image" /> */}
                <p className="w-full border-b py-3 text-xl ">{item.tech}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
