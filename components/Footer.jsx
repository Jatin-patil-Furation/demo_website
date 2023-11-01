import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import { images } from "@/public/assets";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const footerLinks = [
    { icon: images.linkedin, link: "linkedIn" },
    { icon: images.studios, link: "studios" },
    { icon: images.behance, link: "behance" },
    { icon: images.instagram, link: "linkedIn" },
  ];

  return (
    <>
      <div className="footerclass w-[90%]">
        <ContactForm />
        <div className="my-28">
          <Image
            src={images.logo}
            className="w-60 h-auto text-center mb-3"
            alt=""
          />
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <p className="text-white">a product development studio</p>
            </div>
            <div className="flex justify-between ">
              {footerLinks.map((link, index) => {
                if (link.icon) {
                  return (
                    <Link
                      key={index}
                      href={link.link}
                      className="block px-3 py-3 rounded-full text-center text-white"
                    >
                      <Image
                        width={20}
                        height={20}
                        className="w-[20px]"
                        src={link.icon}
                        alt="icon"
                      />
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
