"use client";

import React from "react";
import { TechnologyCard } from "..";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { images } from "@/public/assets";
import "./styles.css";
import {
  FaPhp,
  FaApple,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaWordpress,
  FaHtml5,
  FaAws,
  FaDocker,
  FaJenkins,
  FaJira,
} from "react-icons/fa";
import { BsAndroid2, BsGithub } from "react-icons/bs";
import { BiLogoFlutter } from "react-icons/bi";
import { PiGoogleChromeLogoLight } from "react-icons/pi";
import {
  SiIonic,
  SiPwa,
  SiShopify,
  SiMicrosoftazure,
  SiGooglecloud,
  SiTerraform,
  SiNewrelic,
  SiSelenium,
  SiApache,
  SiKubernetes,
} from "react-icons/si";

const TechnologiesSection = () => {
  const techData = [
    {
      heading: "Mobile",
      tech: [
        { icon: FaApple, tech: "Native iOS" },
        { icon: BsAndroid2, tech: "Native Android" },
        { icon: BiLogoFlutter, tech: "Flutter" },
        { icon: FaReact, tech: "React Native" },
        { icon: SiIonic, tech: "Ionic" },
        { icon: SiPwa, tech: "PWA (Progressive Web Apps)" },
      ],
    },
    {
      heading: "Web",
      tech: [
        { icon: FaPhp, tech: "PHP" },
        { icon: FaNodeJs, tech: "Node.js" },
        { icon: FaReact, tech: "React" },
        { icon: FaAngular, tech: "Angular" },
        { icon: FaWordpress, tech: "Wordpress" },
        { icon: SiShopify, tech: "Shopify" },
        { icon: FaHtml5, tech: "HTML5/CSS3" },
      ],
    },
    {
      heading: "Cloud",
      tech: [
        { icon: FaAws, tech: "AWS" },
        { icon: SiMicrosoftazure, tech: "Azure" },
        { icon: SiGooglecloud, tech: "Google Cloud" },
      ],
    },
    {
      heading: "DevOps",
      tech: [
        { icon: FaDocker, tech: "Docker" },
        { icon: SiKubernetes, tech: "K8" },
        { icon: FaJenkins, tech: "Jenkins" },
        { icon: BsGithub, tech: "Git" },
        { icon: SiTerraform, tech: "Terraform" },
        { icon: FaJira, tech: "Jira" },
        { icon: SiNewrelic, tech: "New Relic" },
      ],
    },
    {
      heading: "QA",
      tech: [
        { icon: SiSelenium, tech: "Selenium" },
        { icon: SiApache, tech: "Apache JMeter" },
        { icon: PiGoogleChromeLogoLight, tech: "Appium" },
      ],
    },
  ];

  return (
    <>
      <div className="w-full flex justify-center relative">
        <div className="w-[90%] mx-auto">
          <h4 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl ">
            Technologies
          </h4>
          <p className="capitalize text-sm mb-10">
            End to End Service Capabilities
          </p>

          <div
            aria-hidden="true"
            className="  pointer-events-none absolute inset-x-0 -top[6rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-[4rem] sm:-left-[-3rem]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(80%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[red] to-[red] opacity-30 sm:left-[calc(80%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <Swiper
            navigation={true}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Navigation]}
          >
            {techData.map((item, index) => {
              return (
                <SwiperSlide className="h-full" key={index}>
                  <TechnologyCard
                    heading={item.heading}
                    technologies={item.tech}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="absolute  right-48 bottom-[-1.3rem] z-10">
            <div className="">
              <h1 className="text-[#EF3239] text-4xl font-extrabold">
                FULLSTACK
              </h1>
              <p className="text-lg leading-snug font-medium">
                Development Capabilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologiesSection;
