import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import ActiveCampaign from "./Components/ActiveCampaign";
import Working from "./Components/Working";
import Footer from "./Components/Footer";
import Pricing from "./Components/Pricing";
import { useRef } from "react";

const LandingPage = () => {
  const pricingRef = useRef(null);
  return (
    <div className="w-full h-full flex-row item-center relative">
      <Navbar pricingRef={pricingRef} />
      <div className="">
        <Hero />
        <About />
        <div className="p-10 md:p-32">
          <ActiveCampaign />
          <Working />
          <Pricing pricingRef={pricingRef} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
