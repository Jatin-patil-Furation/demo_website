import React from "react";

const CoreServicesCard = ({ heading, description }) => {
  return (
    <div className="border w-full sm:basis-[100%] text-white border-gray-500 rounded-lg px-8 py-6">
      <h4 className="font-normal text-xl md:text-2xl lg:text-3xl mb-3">
        {heading}
      </h4>
      <p className="capitalize font-light text-sm md:text-base lg:text-[17px]">
        {description}
      </p>
    </div>
  );
};

export default CoreServicesCard;
