import React from "react";

const Input = (props) => {
  return (
    <input
      className="rounded-[27px] w-full text-base font-normal min-h-[54px] color-white mb-8 bg-[#1e1e1e] px-[25px] py-[15px]"
      {...props}
    />
  );
};

export default Input;
