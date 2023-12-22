import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import ActiveCampaign from "./Components/ActiveCampaign";
import Working from "./Components/Working";
import Footer from "./Components/Footer";
import Pricing from "./Components/Pricing";

const LandingPage = () => {
  return (
    <div className="w-full h-full flex-row item-center relative">
      <Navbar />
      <Hero />
      <About />
      <ActiveCampaign />
      <Working />
      <Pricing />
      <Footer />
    </div>
  );
};

export default LandingPage;
