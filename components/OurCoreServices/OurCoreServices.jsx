"use client";

import React, { useEffect, useRef, useState } from "react";
import { CoreServicesCard } from "..";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const OurCoreServicesSection = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [cardState, setCardState] = useState(true);

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const cards1 = [
    {
      heading: `Product Strategy & Consulting`,
      description: `Scope & technical feasibility, time & budget estimate, functional &
        technical specifications`,
    },
    {
      heading: `Product Design`,
      description: `prototyping/wireframes, user experience design (UX/UI)`,
    },
    {
      heading: `Product MVP Development`,
      description: `roadmap, release planning, UAT, documentation`,
    },
    {
      heading: "Complete Product Development",
      description: "Roadmap, Release Planning, UAT, Documentation",
    },
    {
      heading: "Product Support & Maintenance",
      description: "Bug Fixing, Enhancements / New Features, Optimisation",
    },
  ];

  const cards2 = [
    {
      heading: "Strategy & Consulting",
      description:
        "Scope & Technical Feasibility, Time & Budget Estimate, Functional & Technical Specifications",
    },
    {
      heading: "Customer Experience Design",
      description: "Prototyping / Wireframes, User Experience Design (UX / UI)",
    },
    {
      heading: "Mobile Apps Development",
      description: "iOS, Android & Hybrid App Development",
    },
    {
      heading: "Backend Development",
      description:
        "Framework based development, API, Microservices, Integration, Database, Cloud Native",
    },
    {
      heading: "Website Development",
      description:
        "Web Portal, eCommerce, CMS, eLearning, SaaS, PWA, Enterprise Web, Cross-Browser / Responsive Frontend",
    },
    {
      heading: "DevSecOps",
      description:
        "CI / CD Pipeline, Containerization, Infrastructure as a Code, Monitoring & Logging",
    },
    {
      heading: "QA & Testing",
      description: "Functional, Regression, Automation, Performance, Security",
    },
    {
      heading: "Migration & Modernization",
      description: "Legacy system migration, Upgrades",
    },
    {
      heading: "Emerging Technologies",
      description: "Blockchain, AI / ML, IoT, NLP, Bots",
    },
    {
      heading: "Data & AI",
      description: "ETL, BI / Analytics, Data Lakes / Warehouses",
    },
    {
      heading: "Generative AI",
      description: "ChatGPT / LLaMA / LLMs Integration, Plugins, Bots",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(ref1.current, {
      scrollTrigger: {
        trigger: ref1.current,
        start: "top center",
        end: "bottom center",
        // markers: true,
        onEnter: () => {
          setActive1(true);
        },
        onLeave: () => {
          setActive1(false);
        },
        onEnterBack: () => {
          setActive1(true);
        },
        onLeaveBack: () => {
          setActive1(false);
        },
      },
    });

    gsap.to(ref2.current, {
      scrollTrigger: {
        trigger: ref2.current,
        start: "top center",
        end: "bottom center",
        // markers: true,
        onEnter: () => {
          setActive2(true);
        },
        onLeave: () => {
          setActive2(false);
        },
        onEnterBack: () => {
          setActive2(true);
        },
        onLeaveBack: () => {
          setActive2(false);
        },
      },
    });
  }, []);

  return (
    <div className="w-[90%] my-[5.25rem] relative">
      <div className="w-full mb-7">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:mt-28 lg:mt-5 font-bold mb-4">
          Our Core Services
        </h1>
        <p className="text-center text-lg font-extralight opacity-80 mb-3">
          We believe in perfection by design and performance by default.
        </p>
      </div>

      <div className=" relative flex flex-wrap md:flex-nowrap  w-full my-14  gap-3">
        <div className="self-start md:sticky top-20 left-0 flex  flex-col gap-5 w-full md:w-[50%] ">
          <button onClick={() => setCardState(true)}>
            <div className="flex items-center  gap-5 ">
              <div
                className="text-6xl font-bold "
                style={{
                  "-webkit-text-stroke": "1px #FEFEFF",
                  "-webkit-text-fill-color": "transparent",
                }}
              >
                1
              </div>

              <div
                className={`${
                  cardState ? "themeColor" : "text-[gray]"
                }  text-2xl md:text-3xl lg:text-[2.8rem] font-bold text-[gray] text-left`}
              >
                <p className="leading-[60px]">End-to-End</p>
                <p>Product Engineering</p>
              </div>
            </div>
          </button>

          <hr className=" bg-gray-400 w-[85%] mx-auto h-[0.001px]" />
          <button onClick={() => setCardState(false)}>
            <div className="flex  items-center gap-5">
              <div
                className={`${
                  !cardState ? "themeColor" : "text-[gray]"
                } text-6xl font-bold`}
                style={{
                  "-webkit-text-stroke": "1px #FEFEFF",
                  "-webkit-text-fill-color": "transparent",
                }}
              >
                2
              </div>

              <div
                className={`${
                  !cardState ? "themeColor" : "text-[gray]"
                }  text-2xl md:text-3xl lg:text-[2.8rem] font-bold text-[gray] text-left`}
              >
                <p>Digital Transformation</p>
              </div>
            </div>
          </button>
        </div>
        <div className="relative w-full md:w-[49%]">
          <div className="relative flex flex-col gap-4 w-full  h-[90vh] overflow-y-scroll scrollbar-none ">
            {cardState ? (
              <div
                ref={ref1}
                className="w-full flex items-center  flex-col gap-4 "
              >
                {cards1.map((card, index) => {
                  return <CoreServicesCard key={index} {...card} />;
                })}
              </div>
            ) : (
              <div
                ref={ref2}
                className="w-full flex items-center  flex-col gap-4  "
              >
                {cards2.map((card, index) => {
                  return <CoreServicesCard key={index} {...card} />;
                })}
              </div>
            )}
          </div>
          <div className="absolute w-full h-[10%] text-white bottom-0 shadow-inner  z-[100]  bg-gradient-to-t from-black"></div>
        </div>
      </div>
    </div>
  );
};

export default OurCoreServicesSection;
