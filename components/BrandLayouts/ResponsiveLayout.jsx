"use client";

import DesktopLayout from "./DesktopLayout";
import TabletLayout from "./TabletLayout";
import MobileLayout from "./MobileLayout";
import { useEffect, useState } from "react";

const ResponsiveLayout = () => {
  const [isIpad, setIsIpad] = useState(false);

  useEffect(() => {
    const checkIsIpad = () => {
      const userAgent = navigator.userAgent;
      setIsIpad(userAgent.match(/iPad/i) !== null);
    };

    // Initial check on component mount
    checkIsIpad();

    // Event listener for window resize
    window.addEventListener("resize", checkIsIpad);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", checkIsIpad);
    };
  }, []);

  return (
    <>
      <div className="w-[90%] flex justify-center items-center flex-col sm:mt-10">
        <h4 className="max-w-[70%] md:max-w-[60%] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl  lg:mt-20  text-center">
          We've worked with some cool people.
        </h4>
        <p className="mt-3 font-light opacity-70 text-lg">
          Helping new brands start up and old ones start over.
        </p>

        <div className="container mx-auto p-4 flex justify-center h-full items-center ">
          <DesktopLayout isIpad={isIpad} />
          <TabletLayout isIpad={isIpad} />
          <MobileLayout />
        </div>
      </div>
    </>
  );
};

export default ResponsiveLayout;
