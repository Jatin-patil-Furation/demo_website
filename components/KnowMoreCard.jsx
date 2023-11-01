"use client";

import Image from "next/image";
import React, { useState } from "react";
import { images } from "@/public/assets";
import KnowMoreModal from "./KnowMoreModal";
import { CiDark } from 'react-icons/ci'
import { ImBrightnessContrast } from 'react-icons/im'
import { FiPower } from 'react-icons/fi'
import { SlEnergy } from 'react-icons/sl'


const KnowMoreCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        onClick={handleOpenModal}
        className="bg-[#3B3B3B] cursor-pointer shadow-sm knowMoreCard text-white fixed z-40 bottom-[103px] left-[25px]  rounded-lg   w-[70px]"
      >
        <div className="openingDiv">
          <div className="p-2 border-b flex justify-center items-center">
            <CiDark size={25}/>
            {/* <Image
              src={images.instagram}
              height={25}
              width={25}
              alt="instagram"
            /> */}
          </div>
          <div className="p-2 border-b flex justify-center items-center">
            <ImBrightnessContrast  size={25}/>
            {/* <Image
              src={images.instagram}
              height={25}
              width={25}
              alt="instagram"
            /> */}
          </div>
          <div className="p-2 border-b flex justify-center items-center">
          <FiPower  size={25}/>
            {/* <Image
              src={images.instagram}
              height={25}
              width={25}
              alt="instagram"
            /> */}
          </div>
        </div>

        <div className="p-2 flex justify-center items-center flex-col">
        <SlEnergy size={20} className="text-yellow-400"/>
          {/* <Image src="/assets/behance.svg" width={30} height={30} /> */}
          <p className="text-[9px] uppercase text-center mt-2">
            eco <br /> engine
          </p>
        </div>
        <hr className="text-red h-[1px] " />
        <div className="flex justify-center items-center text-center p-2 text-[8px]">
          <p className=" text-[8px] uppercase">Know More</p>
        </div>
      </div>
      <KnowMoreModal open={isOpen} close={handleClose} />
    </>
  );
};

export default KnowMoreCard;
