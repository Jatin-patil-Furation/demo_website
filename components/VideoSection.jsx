import { BsFillPlayFill } from "react-icons/bs";
const VideoSection = () => (
  <div className="relative z-[20]" style={{ width: "100%" }}>
    <div className="h-full">
      <video
        className="top-0 left-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/assets/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[20]"></div>
    <div className=" w-[90%] md:max-w-[600px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-20">
      <h4 className="  font-bold text-white text-center text-5xl md:text-5xl lg:text-6xl">
        Meet our{" "}
      </h4>
      <h4 className=" text-white text-center mb-3 font-bold  text-5xl md:text-5xl lg:text-6xl">
        digital pirates
      </h4>
      <p className="text-lg md:text-[19px] text-white font-extralight">
        We're like a cool gang of idea creators, design wizards, and tech-loving
        superheroes. We love to team up, have a blast during our happy hours,
        and throw parties to cheer our amazing team wins, which happen all the
        time! 🎉😄 <br /> <br />
        Our office and culture? It's Awesome! 🙌
      </p>
      <button className=" bg-white mt-5  text-black pl-5 pr-3 pt-2 pb-2  rounded-full">
        <div className="flex justify-center items-center ">
          <BsFillPlayFill size={25} />
          <p className="text-[18px] font-semibold"> WATCH OUR VIDEO</p>
        </div>
      </button>
    </div>
  </div>
);

export default VideoSection;
