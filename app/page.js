import {
  CareersSection,
  CaseStudiesMobile,
  CultureCodeSection,
  Footer,
  Hero,
  Navbar,
  OurWorkSection,
  ResponsiveLayout,
  VideoSection,
  KnowMoreCard,
  TechnologiesSection,
  SolutionsSection,
  OurDnaSections,
  OurCoreServicesSection,
  FooterNew,
} from "@/components";
import ContactUsSection from "@/components/ContactUsSection/ContactUsSection";
import CookiePopup from "@/components/CookiePopup";
import Newpage from "@/components/NewPage/Newpage";

export default function Home() {
  return (
    <>
      <div className="mainbody relative">
        <div className="overflowdiv fixed top-0 left-0 h-full w-full bg-black -z-[99999] "></div>
        <header className="w-full flex justify-center items-center sticky top-0 z-[9999] bg-black">
          <Navbar />
        </header>

        <main className="sm:mt-3 md:mt-4 lg:mt-5 xl:mt-6">
          <section className="   flex justify-center" id="hero">
            <Hero />
          </section>

          <section
            id="ourCoreServicesSection"
            className="min-h-[100vh] whatWeDo first-line:py-10 text-white flex justify-center items-center"
          >
            <OurCoreServicesSection />
          </section>

          <section
            id="techStack"
            className="min-h-[90vh] flex justify-center items-center py-0 md:py-10 w-full text-white "
          >
            <TechnologiesSection />
          </section>

          <section
            id="solutions"
            className="min-h-[100vh] pt-20 md:py-10 w-full text-white lg:mt-[100px] "
          >
            <SolutionsSection />
          </section>

          <section
            id="dna"
            className="min-h-[100vh] pb-20 md:py-10 w-full text-white "
          >
            <OurDnaSections />
          </section>

          <section className=" brandsSection text-white flex justify-center">
            <ResponsiveLayout />
          </section>

          {/* <section className="min-h-[100vh] md:flex md:justify-center md:items-center md:flex-col hidden">
            <h4 className="text-4xl text-white pb-9 text-center font-bold">
              What we've been upto
            </h4>
            <OurWorkSection />
          </section> */}

          {/* <section className="caseStudiesSection">
            <div className="md:hidden text-white">
              <h4 className="text-4xl pb-9 text-center font-bold">
                What we've been upto
              </h4>
              {/* <CaseStudiesMobile /> */}
          {/* </div> */}
          {/* </section>  */}

          <section className="h-[100vh] flex justify-center mt-0 md:mt-24 md:mb-[200px]">
            <VideoSection />
          </section>

          {/* <section className="cultureCode flex justify-center min-h-[100vh] py-20">
            <CultureCodeSection />
          </section> */}

          <section className="relative md:mb-[100px]">
            <CareersSection />
          </section>

          <section className="w-full flex justify-center py-10">
            <ContactUsSection />
          </section>
        </main>

        <footer className="bg-[#2D2D2D] flex justify-center">
          <FooterNew />
        </footer>

        <CookiePopup />
      </div>

      <div className="">
        <KnowMoreCard />
      </div>
    </>
  );
}
