import { images } from "@/public/assets";

const Layout1 = () => {
  return (
    <>
      <div className="flex gap-3">
        <div className="w-[70%] h-[90vh] flex flex-col gap-3 ">
          <div className="flex gap-3 w-full h-1/2">
            <div
              className="w-[40%] rounded-lg"
              style={{
                backgroundImage: `url(${images.card4.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="w-[60%] rounded-lg "
              style={{
                backgroundImage: `url(${images.card5.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </div>

          <div className="flex gap-3 w-full h-1/2">
            <div
              className="w-[60%] rounded-lg "
              style={{
                backgroundImage: `url(${images.card1.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="w-[40%] rounded-lg "
              style={{
                backgroundImage: `url(${images.card3.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
        <div
          className="w-[30%] h-[90vh] rounded-lg "
          style={{
            backgroundImage: `url(${images.card7.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </>
  );
};

export default Layout1;
