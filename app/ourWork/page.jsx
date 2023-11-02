"use client";
import "../globals.css";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import ContactUsSection from "@/components/ContactUsSection/ContactUsSection";
import { FooterNew } from "@/components";
import Aos from "aos";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { images } from "@/public/assets";

const Page = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // gsap.to();

    Aos.init({
      anchorPlacement: "bottom-bottom",
    });
    Aos.refresh();
  }, []);

  const startupData = [
    {
      id: "1",
      head: "Seed",
      marginTop: "0px",
      delay: 300,
      descripation:
        "Have a brilliant idea? As a startup product development company, we assist you in formulating and executing a strategy to launch your MVP in the market within 6-12 weeks.",
      points: [
        "Idea Validation, POCs & Technical Feasibility",
        "Brainstorming Workshops",
        "Product Discovery (Blueprint)",
        "MVP Design & Development Service for Startup",
        "Go to market (GTM) Strategy",
        "Fundraising Support",
      ],
    },
    {
      id: "2",
      head: "Expansion",
      marginTop: 16,
      delay: 500,
      descripation:
        "Our emphasis goes beyond MVP – we're dedicated to uncovering pathways to achieve scalability, all while framing every aspect within a long term context.",
      points: [
        "Quick Team Augment/Ramp Up",
        "Performance Optimization",
        "Analytics & Improved Engagement",
        "Usability Assessment & Improvement",
        "Architectural improvement For Scalability",
        "DevOps Support",
        "Technology Audit",
        "Security Improvement",
      ],
    },
    {
      id: "3",
      head: "Scale/Hyper Growth Stage",
      marginTop: 32,
      delay: 700,
      descripation:
        "We drive growth by hacking customer satisfaction, enhancing retention, improving conversion, and fostering innovation through data-driven execution.",
      points: [
        "Team ramp up",
        "Re-engineering",
        "Personalization & Intelligence",
        "Improved UX through Micro-interactions",
        "DevOps Support",
        "Test Automation",
        "Compliances",
        "Big Data & Machine Learning",
      ],
    },
  ];
  const startUp_Services = [
    {
      id: 1,
      head: "Minimal Viable Product (MVP)",
      description:
        "The ultimate objective is to construct the right solution that addresses the core problem and promptly pinpoint the product-market fit, all while making judicious investments of time and resources.",
    },
    {
      id: 2,
      head: "End-to-End Product Engineering",
      description:
        "Our all-encompassing product engineering services are geared toward constructing, enhancing, and scaling products that effectively span the entire product life cycle.",
    },
    {
      id: 3,
      head: "Technology Migration/Re-engineering",
      description:
        "We aid startups in re-engineering and optimizing their products by evaluating current applications, addressing pain points, and aligning with future business objectives.",
    },
    {
      id: 4,
      head: "Startup/Product  Advisory",
      description:
        "Delivering technology and business consultation with added value to startups, minimizing risks and enhancing the likelihood of success.",
    },
  ];
  const costData = [
    {
      id: 1,
      head: "“I NEED FUNDING”",
      list: [
        {
          text: "Entire Wireframes & UI Designs",
        },
        {
          text: " Basic UX",
        },
        {
          text: "Clickable Prototype",
        },
        {
          text: " Functional & Technical Specifications",
        },
      ],
      color: "#e42e35",
      startAmount: 1500,
      endAmount: 5000,
    },
    {
      id: 2,
      head: "“MVP Development”",
      list: [
        {
          text: "MVP Roadmap",
        },
        {
          text: "MVP Design & Development",
        },
        {
          text: "Development ",
        },
        {
          text: "UAT ",
        },
        {
          text: "Documentation",
        },
      ],
      color: "#a0141a",
      startAmount: 5000,
      endAmount: 15000,
    },
    {
      id: 3,
      head: "“Complete Product Development”",
      list: [
        {
          text: "Product Roadmap",
        },
        {
          text: "Product Design & Development",
        },
        {
          text: "Development ",
        },
        {
          text: "UAT ",
        },
        {
          text: "Documentation",
        },
      ],
      color: "#e95056",
      startAmount: 15000,
      endAmount: null,
    },
  ];
  // console.log(startupData);
  return (
    <section className="text-white  ">
      <section className="sub-section w-[85%] my-2 max-w-7xl mx-auto space-y-14">
        <div className="navbar-container flex justify-between">
          <div className="left-container flex flex-col rounded-md">
            <div className="relative bg-white px-2 py-1v rounded-lg">
              <div className=" relative py-2 border-white text-sm  uppercase border-2 text-black font-extrabold">
                Startup <br /> lab
                <div className="absolute left-0 bottom-[0.3rem] leading-3 bg-[#FC3D45] w-[95%] mx-auto h-[1px]"></div>
              </div>
            </div>
            <p className="text-xs">
              by <span className="text-[#DE0000] text-base font-bold" >Furation</span>
            </p>
          </div>
          <Link className="flex" href={"/"}>
            {"< Back to  "} &nbsp;
            <span className="text-[#DE0000] text-base"> Furation</span>
          </Link>
        </div>
        <div className=" relative hero-container w-full  bg-no-repeat ">
          <div className="relative w-full">
            <Image
              src={"/assets/Bulb-Idea.svg"}
              className="w-full "
              width={500}
              height={50}
              alt="idea"
            />
          </div>
          <div className="absolute w-[45%] left-1/2 top-10 space-y-5">
            <p>
              At Furation, we understand that every entrepreneur experiences
              that 'Eureka' moment. Much like Archimedes' legendary run through
              the streets, these innovators have their sleepless nights and
              restless days when their ideas consume them.
              <br /> However, the true journey for entrepreneurs begins after
              this Eureka moment. <br />
              We're here to support startups in navigating that journey and
              turning their visionary concepts into reality.
            </p>
            <p className="font-semibold">
              This is where Furation’s Startup Lab comes in.
            </p>
          </div>
        </div>
        <div className="w-full pt-6 pb-1  ">
          <h3 className="text-3xl font-bold  uppercase">
            Product Design & Development Partner{" "}
            <span className="text-primary uppercase">for Entrepreneurs</span>
          </h3>
          <div className="my-10 font-light text-base leading-5 space-y-4">
            <p>
              Startup Lab, an integral part of Furation, is a dedicated Product
              Development Studio designed to cater to the unique needs of
              startups. It is specifically structured to oversee the entire
              product development journey, from the initial 'Eureka' moment to
              the creation of a Minimum Viable Product (MVP), all the way to a
              fully realized product and a thriving business.
            </p>

            <p>
              As Furation has successfully guided numerous entrepreneurs in
              their product development endeavors, we recognized the need for a
              more comprehensive support system tailored for startups. Moreover,
              as Furation expanded its services to accommodate larger enterprise
              projects, we remained committed to preserving our core values,
              which include an unwavering focus on entrepreneurs and a steadfast
              commitment to strong product development principles.
            </p>
          </div>
        </div>

        <div className="lg:w-[100%]  flex justify-center items-center h-[1px] mt-32">
          <div className="inner w-[80%] h-[1px] "></div>
        </div>

        <div className="w-full pb-20">
          <h3 className="text-5xl font-bold  text-center">
            Tailor made approach{" "}
            <span className="text-primary ">for startups</span>
          </h3>
          <p className="text-base  font-normal text-center my-4 mb-14">
            Our exclusive Startup IT Services throughout the product life cycle.
          </p>
          <div className="startup-container flex w-full justify-between my-5 ">
            {startupData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.delay}
                data-aos-duration="800"
                key={data?.id}
                className={`mt-${data.marginTop} basis-[32%] bg-[#111111] rounded-lg p-8 space-y-7 self-start`}
              >
                <div className="text-gray-400 text-2xl relative mb-16 ">
                  <span className="text-[#fc3d45] text-2xl font-bold   leading-5  py-1">
                    {data?.head}{" "}
                  </span>
                  Stage
                  <div className="w-[30%] bg-[#fc3d45] h-[1px] absolute left-0 -bottom-6"></div>
                </div>
                <p className="text-base font-light leading-6">
                  {data?.descripation}
                </p>
                <ul className="my-5">
                  {data?.points.map((point, index) => (
                    <li className="flex gap-5 items-center " key={index}>
                      <div className=" flex items-center  justify-center">
                        <div className="bg-[#fc3d45]  w-2 h-2 inline-block  rounded-full"></div>
                      </div>
                      <p className="inline-block ext-base font-light leading-6">
                        {point.trim()}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-[100%]  flex justify-center items-center h-[1px] ">
          <div className="inner w-[80%] h-[1px] "></div>
        </div>

        <div className="w-full flex pt-16 pb-8">
          <div className="left-container basis-[48%]">
            <div className="text-3xl w-[70%]  font-extrabold p-6 px-8  border border-[#fc3d45] rounded-[4rem] text-left">
              <p className="w-[90%] mx-auto text-left font-bold text-5xl leading-10 whitespace-nowrap">
                Our Startup <br />{" "}
                <span className="text-[#fc3d45]">Services</span>{" "}
              </p>
            </div>
          </div>
          <div className="right-container space-y-16 basis-[48%]">
            {startUp_Services.map((data) => (
              <div className="w-full flex justify-between gap-4" key={data?.id}>
                <div className=" w-[50px]">
                  <Image
                    className="object-cover"
                    src={images.redArrow}
                    height={80}
                    width={80}
                  />
                </div>
                <div className="space-y-5">
                  <h3 className="text-2xl font-semibold">{data?.head}</h3>
                  <p className="text-base leading-5 font-extralight text-white ">
                    {data?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-[100%]  flex justify-center items-center h-[1px] mt-32">
          <div className="inner w-[80%] h-[1px] "></div>
        </div>
        <div className="w-full space-y-7 pb-8">
          <h3 className="text-center text-5xl font-bold">
            How much does it <span className="text-primary">cost?</span>
          </h3>
          <p className="w-[90%] text-center mx-auto text-base leading-5 text-gray-400 font-light">
            In the world of startups, managing initial funds is crucial. We
            understand that when resources are limited, every investment counts.
            Our diverse range of packages is designed to cater to the unique
            needs of startups at various stages. Whether you're just getting
            started or looking to scale up, we offer cost-effective solutions to
            help you achieve your goals without breaking the bank. Choose the
            package that suits your needs and budget, and let's embark on your
            entrepreneurial journey together.
          </p>
          <div className="flex w-full text-white justify-around ">
            {costData.map((data) => (
              <div
                key={data?.id}
                className={`relative basis-[32%] transition   rounded-xl px-5 py-10 my-10 ${
                  data?.id === 1
                    ? " bg-[#e42e35]"
                    : data?.id === 2
                    ? " bg-[#a0141a]"
                    : " bg-[#e95056]"
                }`}
              >
                <div className="absolute -top-6 left-6 rounded-full flex items-center border border-primary justify-center bg-black text-white text-lg w-14 h-14">
                  <p className="font-bold text-4xl">{data?.id}</p>
                </div>
                <h4 className="font-extrabold text-2xl w-full">
                  {data?.head} <br />{" "}
                  <span className="text-2xl font-bold inline-block">
                    Package
                  </span>
                </h4>

                <ul className="py-6 pb-20">
                  <p className="fon-bold text-base">Which Includes -</p>
                  {data?.list.map((data, index) => (
                    <div key={index}>
                      <li
                        className="flex gap-3 items-center text-sm "
                        key={index}
                      >
                        <div className="bg-white  w-2 h-2 inline-block  rounded-full"></div>
                        <p className="inline-block font-normal">
                          {data?.text.trim()}
                        </p>
                      </li>
                    </div>
                  ))}
                </ul>
                <div className="absolute bottom-[.1rem] w-[85%] text-3xl font-bold left-[9%] bg-black rounded-t-xl  py-3 px-1 text-center">
                  {`$${data?.startAmount}  ${
                    data?.endAmount === null ? "+" : "- $" + data?.endAmount
                  }`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="w-[100vw] relative my-10">
        <Image
          src={"/assets/standup_lab_bg.svg"}
          width={500}
          height={500}
          className="w-full "
        />
        <div className="absolute left-20 top-20 font-bold text-5xl leading-[56px]">
          Startup <span className="text-[#fc3d45] block">Partnership</span>{" "}
        </div>
        <div className="absolute right-44 top-20 w-[56%] text-2xl font-extralight space-y-6">
          <p>
            As startup product development studio, we have a deep passion for
            embarking on the entrepreneurial journey, having participated in
            over 5+ startups alongside our clients.
          </p>
          <p>
            We're ready to invest a portion of the service fees as a
            demonstration of our dedication, sharing ownership throughout the
            entire startup josurney.
          </p>
        </div>
      </div>
      <section id="contactSection" className="w-full flex justify-center py-10">
        <ContactUsSection />
      </section>
      <footer className="bg-[#2D2D2D] flex justify-center">
        <FooterNew />
      </footer>
    </section>
  );
};

export default Page;
