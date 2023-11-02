"use client";
import { images } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from ".";

const Navbar = () => {
  const navLinks = [
    { name: "What we do", link: "#ourCoreServicesSection" },
    { name: "Tech stack", link: "#techStack" },
    { name: "Solutions", link: "#solutions" },
    { name: "How we work", link: "#dna" },
    { name: "Our team", link: "/ourTeam" },
    { name: "Startup Lab", link: "/ourWork" },
  ];

  console.log(navLinks.length, "length");

  function scrollToContactSection() {
    const contactSection = document.getElementById("contactSection");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      <div className=" z-[100] w-full sticky bg-black top-0 flex justify-center">
        <div className="relative bg-black w-[90%]">
          <div className="lg:container lg:mx-auto lg:py-4 bg-black">
            <div className="flex items-center justify-between">
              <div className="relative z-20">
                <Link href={`/`}>
                  <Image
                    width={140}
                    height={140}
                    src={images.logo}
                    alt="logo-tailus"
                  />
                </Link>
              </div>

              <div className="flex items-center justify-end ">
                <input
                  type="checkbox"
                  name="hamburger"
                  id="hamburger"
                  className="peer"
                  hidden
                />
                <label
                  htmlFor="hamburger"
                  className="peer-checked:hamburger block relative z-20 p-6 -mr-0  md:-mr-6 cursor-pointer lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    className="m-auto h-0.5 w-6 rounded bg-white transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-white transition duration-300"
                  ></div>
                </label>

                <div className="h-full bg-black peer-checked:translate-x-0 fixed inset-0 w-full translate-x-[-100%] shadow-xl transition duration-300  lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                  <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row bg-black">
                    <ul className="ps-12 md:ps-12 lg:ps-0 pt-32 text-gray-700 space-y-8 bg-black lg:border lg:rounded-full lg:space-y-0 lg:flex lg:pt-0">
                      {navLinks.map((navlink, index) => {
                        if (navlink.name) {
                          return (
                            <li
                              className={`md:flex ${
                                index === navLinks.length - 1
                                  ? "border-0"
                                  : "lg:border-r"
                              } lg:justify-center lg:items-center py-1`}
                              key={index}
                            >
                              <Link
                                href={navlink.link}
                                className="group px-2.5 relative "
                              >
                                <span className="relative text-white lg:text-[11px] xl:text-[15px] text-[20px] uppercase font-semibold ">
                                  {navlink.name}
                                </span>
                              </Link>
                            </li>
                          );
                        }
                      })}
                    </ul>

                    <div className="flex justify-center items-center py-8 ps-12 md:ps-0  md:py-16 lg:py-0 lg:pr-0">
                      <Link
                        target="_blank"
                        href="https://wa.me/917208328994"
                        className="flex items-center ps-3  rounded-full text-center text-white"
                      >
                        <WhatsAppButton />
                      </Link>

                      <div
                        className="flex items-center px-3 rounded-full text-center text-white"
                        onClick={() => scrollToContactSection()}
                      >
                        <button
                          type="button"
                          className="focus:outline-none text-white bg-[#EF3239] 
                          hover:bg-red-800 focus:ring-4 focus:ring-red-300 
                          font-medium rounded-full text-sm px-5 py-2
                          dark:hover:bg-red-700 dark:focus:ring-red-900 "
                        >
                          Get In Touch
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
