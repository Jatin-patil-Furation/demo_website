import React from "react";

const CoreServicesCard = ({ heading, description }) => {
  return (
    <div className="border w-full sm:basis-[100%] text-white border-gray-500 rounded-lg p-8">
      <h4 className="font-normal text-lg md:text-xl lg:text-2xl">{heading}</h4>
      <p className="capitalize font-light text-sm lg:text-base">
        {description}
      </p>
    </div>
  );
};

export default CoreServicesCard;
