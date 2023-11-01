import React from "react";
import { Button, Input1, PhoneInput, SelectInput } from "..";
import JobInput from "./JobInput";

const ContactForm1 = () => {
  const checkList=["End-to-End Product Engineering","Digital Transformation","POC / MVP / Feasibility Study","UI / UX","Development","QA / Testing","Maintenance / Support","Startup Product Help"]
  const inputs = [
    {
      id: "yourName",
      type: "text",
      label: "First Name",
      placeholder: "Enter your first name",
      required: true,
      Component: Input1,
    }, 
    {
      id: "yourName",
      type: "text",
      label: "Last Name",
      placeholder: "Enter your last name",
      required: true,
      Component: Input1,
    },
    {
      id: "email",
      type: "email",
      label: "Email Address",
      placeholder: "Enter your Email Address",
      required: true,
      Component: Input1,
    },
    {
      id: "company_name",
      type: "text",
      label: "Company Name",
      placeholder: "Enter your company name",
      required: true,
      Component: Input1,
    }
    // {
    //   id: "phone",
    //   type: "text",
    //   label: "Job Role",
    //   placeholder: "Enter your Phone Number",
    //   required: true,
    //   Component: JobInput,
    // },
    // {
    //   id: "phone",
    //   type: "tel",
    //   label: "Your Phone",
    //   placeholder: "Enter your Phone Number",
    //   required: true,
    //   Component: PhoneInput,
    // },
    // {
    //   id: "skype",
    //   type: "text",
    //   label: "Skype Id",
    //   placeholder: "Enter your Skype Id",
    //   required: false,
    //   Component: Input1,
    // },
    // {
    //   id: "budget",
    //   label: "Budget",
    //   required: false,
    //   Component: SelectInput,
    // },
    // {
    //   id: "prefer",
    //   label: "I prefer to",
    //   required: false,
    //   Component: SelectInput,
    // },
  ];

  return (
    <>
      <form>
        <div className="gap-3 grid grid-cols-1 md:grid-cols-2 ">
          {inputs.map(({ Component, ...input }, index) => {
            return <Component key={index} {...input} />;
          })}
        </div>
        <label className="font-semibold">Job Role</label>
        <div className="flex border-b borer-black mb-8 mt-3">
          
          <select className="country-code outline-none w-full" >
          <option value="Select your role">Select your role</option>
          <option value="C-Level">C-Level</option>
            <option value="VP">VP</option>
            <option value="Director+">Director+</option>
            <option value="Manager">Manager</option>
            <option value="Engineer">Engineer</option>
            <option value="Consultant">Consultant</option>
            <option value="Partner">Partner</option>
            <option value="Specialist">Specialist</option>
            <option value="Product Leader">Product Leader</option>
            <option value="Other">Other</option>
          </select>
         </div>
        <label className=" font-semibold mb-5">
          How we can help you
        </label>
        {checkList.map((item, index) => (
   <div key={index} className=" gap-5 ">
     <input value={item} type="checkbox"  />
     <span className=" ml-4">{item}</span>
   </div>
))}
        <div className="mt-5">

        <label
          htmlFor="message"
          className="text-sm font-semibold text-gray-800 mb-1 mt-5"
          >
          Additional detail *
        </label>
        <textarea
          rows="4"
          name="message"
          id="message"
          className="text-sm w-full outline-none border-b focus:outline-none focus:border-black"
          placeholder="Message"
          required
          ></textarea>

          </div>
        <div className="flex justify-center mt-2">
          <Button text="Contact Us" type="submit" />
        </div>
      </form>
    </>
  );
};

export default ContactForm1;
