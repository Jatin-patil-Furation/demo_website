"use client";

import React, { useEffect, useState } from "react";
import { OurDnaCard } from "..";

const OurDnaSections = () => {
  const ourDna = [
    {
      heading: "transparency",
      description:
        "We are committed to openness and honesty in our work. We value clear communication and straightforward interactions with our clients,partners, and team members.",
    },
    {
      heading: "reliability",
      description:
        "Reliability is at the core Of What we do. We take pride in delivering software solutions that are dependable, consiSW1t, and of high quality,",
    },
    {
      heading: "user-centric",
      description:
        "We prioritise the end-users in every decision we make. Understanding and meeting their needs is a fundamental part of our development process.",
    },
    {
      heading: "sustainability",
      description:
        "We aim for sustainable practices, not only in our software but also in our business operations. We consider the long-term impact of our solutions and actions.",
    },
    {
      heading: "teamwork",
      description:
        "We believe in the power of collaboration and teamwork. Together, we can achieve more and deliver exceptional results.",
    },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % ourDna.length);
    }, 2000); // Change color every 2 seconds (2000 milliseconds)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [ourDna.length]);

  return (
    <>
      <div className="w-full">
        <div className=" flex flex-col items-center justify-center">
          <div className="sm:p-6 lg:mb-[30px] flex flex-col justify-center items-center">
            <h4 className="font-bold text-center  text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
              Our DNA
            </h4>
            <p className="capitalize text-center text-md mb-10 text-sm w-[90%]">
              We at Furation believe in ”T.R.U.S.T.” and doing whatever is
              needed to build Digital Products that create WOW!
            </p>
          </div>

          {ourDna.map((dna, index) => {
            const isActive = index === currentCardIndex;
            let isLast = index === ourDna?.length - 1;
            return (
              <OurDnaCard
                key={index}
                isLast={isLast}
                isActive={isActive}
                {...dna}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OurDnaSections;
