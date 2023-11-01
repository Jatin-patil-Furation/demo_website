import React from "react";
import Input from "./Input";
import Button from "../Button";

const ContactForm = () => {
  const formInputs = [
    { name: "First Name", type: "text", placeholder: "Name" },
    { name: "Last Name", type: "email", placeholder: "Email ID" },
    { name: "phone", type: "tel", placeholder: "Phone Number" },
  ];

  return (
    <div className="bg-[#101010] text-white py-11 px-4 md:py-32 md:px-24">
      <h4 className="text-2xl font-semibold tracking-[0] my-5 leading-[1.4]">
        Why head into the battlefield unprepared?
      </h4>
      <p className="font-light text-base leading-[22px] opacity-[0.8]">
        We work with ideas that inspire, engage and excite. Ideas that challenge
        convention and shape the trends. Through our awe-inspiring personal
        touch, we aim to make users fall in love with your brand.
      </p>

      <div className="mt-4">
        <form>
          <div className="md:flex md:gap-4">
            <div className="md:w-1/2">
              {formInputs.map((input, index) => (
                <Input key={index} {...input} />
              ))}
            </div>
            <div className="md:w-1/2">
              <textarea
                name="message"
                id="message"
                className="rounded-[27px] w-full text-base font-normal color-white mb-8 bg-[#1e1e1e] px-[25px] py-[15px]"
                rows="8"
              ></textarea>
            </div>
          </div>

          <div className="md:flex md:justify-end">
            {/* <button className="w-full md:w-[200px] px-5 h-[54px] text-black rounded-full font-bold text-base flex justify-center items-center bg-white">
              Submit Application
            </button> */}
            <Button text="Submit Application" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
