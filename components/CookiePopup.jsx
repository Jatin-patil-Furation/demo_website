"use client";

import React, { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const CookiePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const cookie = JSON.parse(localStorage.getItem("cookie"));
    if (cookie?.accepted) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, []);

  return (
    <>
      <div
        className={`fixed z-[99] ${
          isOpen
            ? "bottom-0 h-auto py-2 transition-all duration-1000 ease-in-out"
            : "-bottom-16 h-0"
        }  left-0 bg-black w-full flex justify-center`}
      >
        {/* <div className={`w-[90%] flex flex-wrap items-center justify-between`}>
          <div>
            <p className=" text-white text-xs md:text-sm lg:text-base">
              This website uses to enhance your digital For additional details
              please visit&nbsp;
              <span className="themeColor font-bold underline cursor-pointer">
                Privay Policy&nbsp;
              </span>
              and&nbsp;
              <span className="themeColor font-bold underline cursor-pointer">
                Cookie Policy
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <span className="themeColor text-xs md:text-sm lg:text-base font-bold underline cursor-pointer">
                Cookie Policy
              </span>
            </div>
            <button className="themeBg md:font-semibold text-white text-xs md:text-sm lg:text-base p-2 rounded-sm">
              Reject All
            </button>
            <button className="themeBg md:font-semibold text-white text-xs md:text-sm lg:text-base p-2 rounded-sm">
              Accept All Cookies
            </button>
          </div>
        </div> */}
        {/* <button
              onClick={() => setIsOpen(false)}
              className="text-white text-xl"
            >
              <IoMdCloseCircle />
            </button> */}

        <div className="w-[90%] bg-black py-3 px-3 flex flex-col justify-between gap-3  md:flex-row">
          <p className="text-white bg-black text-xs md:text-sm w-full md:w-1/2">
            This wensite uses cookies to enhance your digital experience. For
            additional details please visit&nbsp;
            <span className="themeColor underline cursor-pointer font-bold">
              Privacy Policy&nbsp;
            </span>
            and
            <span className="themeColor underline cursor-pointer font-bold">
              &nbsp;Cookie Policy
            </span>
          </p>

          <div className="flex flex-col w-full md:w-1/2 md:flex-row gap-3 py-3 md:py-0 justify-center items-center md:justify-end ">
            <span className="text-xs md:text-sm underline cursor-pointer themeColor">
              Cookie Settings
            </span>

            <button
              className="w-full md:w-auto themeBg md:font-semibold text-white text-xs md:text-sm lg:text-sm  p-2 md:p-2 rounded-sm"
              onClick={() => setIsOpen(() => false)}
            >
              Reject All
            </button>
            <button
              className="w-full md:w-auto themeBg md:font-semibold text-white text-xs md:text-sm lg:text-sm p-2 md:p-2 rounded-sm"
              onClick={() => {
                setIsOpen(() => false);
                localStorage.setItem(
                  "cookie",
                  JSON.stringify({ accepted: true })
                );
              }}
            >
              Accept All Cookies
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePopup;
