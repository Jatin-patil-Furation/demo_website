import React from "react";
import { Button, CultureCard } from "../../components/index";

const CultureCodeSection = () => {
  return (
    // <div className="w-[90%] px-3 py-10 flex flex-col md:flex-row justify-center gap-10 relative text-white bg-[#101010] rounded-lg">
    //   <div className="leftDiv flex flex-col md:w-1/2 gap-5 items-center md:items-start">
    //     <h4 className="text-[30px] md:text-[45px] lg:text-[70px] font-bold leading-[1]">
    //       <span className="md:block mx-2">The</span>
    //       <span className="md:block mx-2">Culture</span>
    //       <span className="md:block mx-2">Code</span>
    //     </h4>
    //     <p className="text-center md:text-left md:w-[90%] text-xl opacity-80">
    //       For us, our values are more than just words. These won’t be on any
    //       test, but they come from the heart and run deep through our culture.
    //     </p>
    //     <div className="w-[50%]">
    //       <Button text="Know More" type="button" />
    //     </div>
    //   </div>

    //   <div className="rightDiv md:w-1/2 flex justify-center">
    //     <div className="grid grid-cols-2 gap-3 w-4/5 md:w-full">
    //       <CultureCard />
    //       <CultureCard />
    //       <CultureCard />
    //       <CultureCard />
    //       <CultureCard />
    //       <CultureCard />
    //     </div>
    //   </div>
    // </div>
    <div className="w-[90%] px-3 py-10 flex flex-col md:flex-row justify-center gap-10 relative text-white  rounded-lg">
      <div className="leftDiv flex flex-col md:w-1/2 gap-5 items-center md:items-start md:self-start  md:sticky top-[100px]">
        <h4 className="text-[30px] md:text-[45px] lg:text-[70px] font-bold leading-[1]">
          <span className="md:block mx-2">The</span>
          <span className="md:block mx-2">Culture</span>
          <span className="md:block mx-2">Code</span>
        </h4>
        <p className="text-center md:text-left md:w-[90%] text-xl opacity-80">
          For us, our values are more than just words. These won’t be on any
          test, but they come from the heart and run deep through our culture.
        </p>
        <div className="w-[50%]">
          <Button text="Know More" type="button" />
        </div>
      </div>

      <div className="rightDiv md:w-1/2 flex justify-center overflow-auto">
        <div className="grid grid-cols-2 gap-3 w-4/5 md:w-full">
          <CultureCard />
          <CultureCard />
          <CultureCard />
          <CultureCard />
          <CultureCard />
          <CultureCard />
        </div>
      </div>
    </div>
  );
};

export default CultureCodeSection;
