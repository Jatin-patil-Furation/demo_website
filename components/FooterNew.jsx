import Image from "next/image";
import React from "react";
import { images } from "@/public/assets";
import Link from "next/link";
import BarkWidget from "./Bark";

const logo = [
  { icon: images.facebook, text: "Facebook" },
  { icon: images.twitter, text: "Twitter" },

  { icon: images.instagram, text: "Instagram" },
  { icon: images.linkedin, text: "Linkedin" },
  { icon: images.dribbble, text: "dribbble" },
  { icon: images.behance, text: "behance" },
];

const FooterNew = () => {
  return (
    <>
      <div className="w-full m-auto flex flex-col justify-center items-center mt-[50px]">
        <div className="w-[100%] flex flex-wrap justify-center px-2 sm:px-5">
          <div className="w-full lg:w-3/5 lg:pr-0 lg:pt-[4.5rem] lg:pb-10">
            <p className="font-medium text-2xl sm:text-3xl  lg:text-5xl text-white">
              Let's explore how we can create
              <span className="text-red-500"> WOW</span> for you!
            </p>

            <div className=" w-[60%]">
              <div className="flex gap-4 mt-4 sm:mt-8 justify-between items-center w-[80%]">
                <Link
                  href="https://www.goodfirms.co/company/furation-tech-solutions"
                  target="_blank"
                >
                  <Image src={images.group} width={80} />
                </Link>
                <Link
                  href="https://www.appfutura.com/companies/furation-tech-solutions"
                  target="_blank"
                >
                  {" "}
                  <Image src={images.image} width={80} height={80} />
                </Link>
                <Link
                  href="https://clutch.co/profile/furation-tech-solutions?utm_source=clutch_top_company_badge&utm_medium=image_embed#highlights"
                  target="_blank"
                >
                  {" "}
                  <Image src={images.batch} width={80} />
                </Link>

                <Link
                  target="_blank"
                  href="https://www.bark.com/en/in/company/furation-tech-solutions-pvt-ltd/9wbbJ/"
                >
                  <Image
                    src={images.goldBarkBadge}
                    height={100}
                    width={100}
                    alt="gold bark"
                  />
                </Link>
                {/* todo: check bark */}
                {/* <BarkWidget /> */}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/4 ml-0  pt-5 sm:pt-10 pb-5 sm:pb-10 lg:pt-20 lg:pb-16 ">
            <p className="text-white">Connect with us:</p>
            <div className="flex gap-4 mt-2 sm:mt-3">
              <Link
                href={"https://www.facebook.com/furation.tech/"}
                target="_blank"
              >
                <Image
                  alt={logo?.[0]?.text}
                  className="w-7 h-7 lg:w-5 lg:h-5"
                  src={logo?.[0]?.icon}
                />
              </Link>
              <Link href={"https://twitter.com/furation"} target="_blank">
                <Image
                  alt={logo?.[1]?.text}
                  className="w-7 h-7 lg:w-5 lg:h-5"
                  src={logo?.[1]?.icon}
                />
              </Link>
              <Link
                href={
                  "https://www.instagram.com/furation.tech/?igshid=YmMyMTA2M2Y%3D"
                }
                target="_blank"
              >
                <Image
                  alt={logo?.[2]?.text}
                  className="w-7 h-7 lg:w-5 lg:h-5"
                  src={logo?.[2]?.icon}
                />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/company/furation-tech-solutions/"
                }
                target="_blank"
              >
                <Image
                  alt={logo?.[3]?.text}
                  className="w-7 h-7 lg:w-5 lg:h-5"
                  src={logo?.[3]?.icon}
                />
              </Link>
              <Link href={"https://dribbble.com/furation-tech"} target="_blank">
                <Image
                  alt={logo?.[4]?.text}
                  className="w-7 h-7 lg:w-5 lg:h-5"
                  src={logo?.[4]?.icon}
                />
              </Link>
              <Link href={"https://www.behance.net/furation"} target="_blank">
                <Image
                  alt={logo?.[5]?.text}
                  className="w-7 h-7 lg:w-5 lg:h-5"
                  src={logo?.[5]?.icon}
                />
              </Link>
            </div>
            <div className="mt-5 sm:mt-10 ">
              <p className="flex text-white font-semibold text-2xl sm:text-3xl mt-10 sm:mt-5 tracking-wide">
                <Link href={`/`}>furation.tech</Link>
              </p>
              <p className="text-white font-semibold text-sm sm:text-base">
                Made With Love, from India ❤️
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#222121] pt-2 sm:pt-5 pb-2 sm:pb-5">
          <div className="flex justify-center text-white">
            <p className="px-2 sm:px-3">Disclaimer</p>
            <p className="px-2 sm:px-3">Privacy Policy</p>
            <p className="px-2 sm:px-3">@Copyright 2023</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterNew;
