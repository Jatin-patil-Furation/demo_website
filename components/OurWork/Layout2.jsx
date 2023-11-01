import { images } from "@/public/assets";

const Layout2 = () => {
  return (
    <div className="w-full flex gap-3 h-[90vh]">
      <div
        className="w-1/3 rounded-lg"
        style={{
          backgroundImage: `url(${images.card3.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="w-1/3 flex flex-col gap-3">
        <div
          className="h-3/5 rounded-lg"
          style={{
            backgroundImage: `url(${images.card4.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="h-2/5 rounded-lg"
          style={{
            backgroundImage: `url(${images.card1.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="w-1/3 flex flex-col gap-3">
        <div
          className="h-1/2 rounded-lg"
          style={{
            backgroundImage: `url(${images.card5.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="h-1/2 rounded-lg"
          style={{
            backgroundImage: `url(${images.card6.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Layout2;
