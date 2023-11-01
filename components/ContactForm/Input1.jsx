import React from "react";

const Input1 = ({ id, label, required, ...props }) => {
  return (
    <>
      <div className="w-full mb-4">
        <label
          className="block text-sm font-semibold text-gray-800"
          htmlFor={id}
        >
          {label} {required ? <span className="text-[20px]">*</span> : null}
        </label>
        <input
          className="block text-sm w-full border-b p-2 focus:outline-none focus:border-black"
          id={id}
          {...props}
        />
      </div>
    </>
  );
};

export default Input1;
