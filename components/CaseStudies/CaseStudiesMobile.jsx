import React from "react";
import CaseStudyCard from "./CaseStudyCard";
import { images } from "@/public/assets";

const CaseStudiesMobile = () => {
  const cards = [
    {
      desc1: "Everything you can",
      desc2: "imagine is real",
      desc3: "entertainment",
      image: images.card1,
      logo: images.logo,
      path: "/",
    },
    {
      desc1: "Uber driving",
      desc2: "training institute",
      desc3: "Driving Training insitute",
      image: images.card2,
      logo: images.uber,
      path: "/",
    },
    {
      desc1: "Raising a nation",
      desc2: "of readers",
      // desc3: "Driving Training insitute",
      image: images.card3,
      logo: images.uber,
      path: "/",
    },
    {
      desc1: "Can your home get",
      desc2: "smarter than you?",
      desc3: "home automation",
      image: images.card4,
      logo: images.uber,
      path: "/",
    },
    {
      desc1: "Raina is all the music",
      desc2: "you need for your venue",
      desc3: "music",
      image: images.card5,
      logo: images.uber,
      path: "/",
    },
    {
      desc1: "Insurance platform",
      // desc2: "you need for your venue",
      // desc3: "music",
      image: images.card1,
      logo: images.uber,
      path: "/",
    },
  ];

  return (
    <div>
      {cards.map((card, index) => (
        <CaseStudyCard key={index} {...card} />
      ))}
    </div>
  );
};

export default CaseStudiesMobile;
