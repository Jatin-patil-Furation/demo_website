import React from "react";
import { SolutionsLayout } from "..";

const SolutionsSection = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] flex flex-wrap relative">
        <div className="w-full lg:w-[27%] lg:sticky top-32 self-start ">
          <h4 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3">
            Solutions
          </h4>
          <p className="capitalize text-sm mb-12  ">
            Cutting edge Technology Integration
          </p>

          <p className="text-base mb-3 text-left">
            Technology's ongoing evolution unlocks unprecedented possibilities
            for every business. To capitalize on these opportunities, we've
            cultivated expertise in cutting-edge technologies, both within our
            in-house team and through a network of skilled subject matter
            experts. This collaborative effort ensures the delivery of efficient
            and cost-effective solutions for our clients.
          </p>
          {/* <p className="text-base">
            Besides our in-house team, we have a strong pool of subject matter
            experts who come into projects to ensure that we deliver the most
            efficient and cost-effective results.
          </p> */}
        </div>

        <div className=" flex justify-center w-full lg:w-[70%]">
          <SolutionsLayout />
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
