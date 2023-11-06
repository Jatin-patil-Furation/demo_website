import { images } from "@/public/assets";
import Image from "next/image";
import React from "react";
import { ContactForm1 } from "..";
import "./contactus.css";

const ContactUsSection = () => {
  const contactUs = [
    {
      icon: images.suitcase,
      name: "7+",
      description: "Years of Experience",
    },
    {
      icon: images.user,
      name: "100+",
      description: "In-House Talent",
    },
    {
      icon: images.project,
      name: "150+",
      description: "Projects Delivered",
    },
    {
      icon: images.thumbsup,
      name: "92%",
      description: "Client Satisfaction Rate",
    },
    {
      icon: images.scrum,
      name: "7+",
      description: "Certified Scrum Masters ",
    },
    {
      icon: images.globe,
      name: "10+",
      description: "Countries where we have happy customers ",
    },
  ];

  return (
    <div
      id="contactSection"
      className="w-[90%] text-white py-10 flex flex-wrap  "
    >
      <div className="w-full lg:w-3/5 ">
        <h4 className="text-center  lg:text-left  md:4xl  mb-7 lg:leading-[3.8rem] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Contact Us <br />
          <span className="themeColor">for project discussion</span>
        </h4>

        <p className="text-center text-sm md:text-base lg:text-left">
          Once you fill out this form, our sales representatives will contact
          you within 24 hours.
        </p>
        <div className=" flex justify-center md:justify-start  pt-4">
          <div className=" w-full md:w[50%] grid grid-cols-2 gap-6 ">
            {contactUs.map((item, index) => {
              return (
                <div
                  className="flex  justify-between   w-full h-full "
                  key={index}
                >
                  <div>
                    <div className="outer  col-span-1 p-1 md:pt-5 " key={index}>
                      <Image
                        src={item.icon}
                        height={40}
                        width={40}
                        alt="image"
                      />
                      <h5 className="font-bold text-[30px]  mt-2">
                        {item.name}
                      </h5>
                      <p className=" md:text-base text-gray-300 mt-2">
                        {item.description}
                      </p>
                    </div>

                    {index < contactUs.length - 2 && (
                      <div className="lg:w-[300px]  flex justify-center   items-center h-[1px] mt-6">
                        <div className="inner w-[180px] h-[1px]"></div>
                      </div>
                    )}
                  </div>
                  {index % 2 == 0 && (
                    <div className="    flex justify-center  items-center h-[70%] w-[1px]">
                      <div className="sider h-full w-[1px] "></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/5 px-10 py-8 text-black bg-white rounded-lg self-start mt-8">
        <ContactForm1 />
      </div>
      <div className="flex">
        <div className="mt-10">
          <p className="text-sm md:text-lg font-medium text-gray-300 mt-2">
            Rich Experienced Team | Time Zone Aligned
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
