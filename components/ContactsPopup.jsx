import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactsPopup = ({ setIsPopupOpen }) => {
  return (
    <div
      className="absolute top-10 right-20 w-[50%] "
      onMouseLeave={() => console.log("leave")}

      // onMouseLeave={setIsPopupOpen(() => false)}
    >
      <div className=" flex gap-2   px-3 py-2 shadow rounded  bg-white">
        <div className="basis-[23%] ">
          <Image
            className=" rounded-md"
            height={80}
            width={80}
            src="/assets/sale.jpg"
            alt=""
          />
        </div>
        <div className=" basis-[72%]   text-left font-Lato text-black">
          <div className="w-[90%] mx-auto">
            <p className="font-semibold font-Lato mt-2 text-gray-600 text-xl">
              Write Us
            </p>
            <Link
              href={"mailto:hello@furation.tech"}
              className="font-bold text-[20px] hover:text-blue-600 hover:underline"
              target="_blank"
            >
              hello@furation.tech
            </Link>
            <p className="font-semibold font-Lato mt-2 text-gray-600 text-xl">
              We are just to call wait
            </p>
            <p className="font-semibold mt-2">+91 8169091599</p>
            <p className="font-semibold mt-2">+91 7208328994</p>
            <p className="font-semibold mt-2">+91 8879906881</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPopup;
