import React from "react";

const PhoneInput = ({ label, id, ...props }) => {
  return (
    <div className="phone-input mb-4">
      <div>
        <label
          className="block text-sm font-semibold text-gray-800"
          htmlFor={id}
        >
          {label}
        </label>
        <div className="flex border-b borer-black">
          <select className="country-code outline-none" id={id}>

            <option value="+1">C-Level</option>
            <option value="+1">VP</option>
            <option value="+44">+44 (UK)</option>
            <option value="+44">+44 (UK)</option>
          </select>
          {/* <input
            className="text-sm w-full p-2 focus:outline-none focus:border-black"
            {...props}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default PhoneInput;
