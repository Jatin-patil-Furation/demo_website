import React from "react";

const SelectInput = ({ id, label, required, ...props }) => {
  return (
    <>
      <div className="mb-4">
        <label
          className="block text-sm font-semibold text-gray-800 "
          htmlFor={id}
        >
          {label} {required ? <span>*</span> : null}
        </label>
        <select
          className="w-full text-sm p-2 border-b focus:outline-none focus:border-black"
          id={id}
        >
          <option value="+1">+1 (US)</option>
        </select>
      </div>
    </>
  );
};

export default SelectInput;
