import React from "react";

const JobInput = ({ label, id, ...props }) => {
  return (
    <div className="phone-input mb-4">
      <div>
        <label
          className="block text-sm font-semibold text-gray-800"
          htmlFor={id}
        >
          {label}
        </label>
       
          {/* <input
            className="text-sm w-full p-2 focus:outline-none focus:border-black"
            {...props}
          /> */}
        </div>
      </div>
    // </div>
  );
};

export default JobInput;
