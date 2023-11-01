import { Layout1, Layout2, Layout3, Layout4 } from "../index";
import Layout5 from "./Layout5";

const OurWorkSection = () => {
  return (
    <>
      <div className="min-h-[100vh] w-[90%] flex flex-col gap-10">
        <Layout1 />
        <Layout2 />
        <Layout3 />
        <Layout4 />
        <Layout5 />
      </div>
    </>
  );
};

export default OurWorkSection;
