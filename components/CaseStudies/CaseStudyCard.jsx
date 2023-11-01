import Link from "next/link";
import "./styles.css";
import Image from "next/image";

const CaseStudyCard = ({ image, logo, desc1, desc2, desc3, path }) => {
  return (
    <div
      className="border border-white rounded-md mx-2 mb-5 relative h-[450px] caseStudyCard"
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="cardDescription absolute bottom-[38px] left-[7%]">
        <Image className="w-[110px] h-auto" src={logo} alt="" />
        <p className="mt-8 text-2xl font-black">{desc1}</p>
        <p className="text-2xl font-black">{desc2}</p>
        <p className="mt-5 uppercase font-black text-base">{desc3}</p>
        <p className="mt-5">
          <Link className="underline" href={path}>
            view case study
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CaseStudyCard;
