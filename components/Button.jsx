import React from "react";

const Button = ({ text, type }) => {
  return (
    <button
      type={type}
      className="cursor-pointer w-full 
       md:w-[200px] px-5 h-[40px] md:h-[54px] text-white rounded-full 
      font-bold text-sm md:text-base flex justify-center items-center bg-[#EF3239]"
    >
      {text}
    </button>
  );
};

export default Button;
