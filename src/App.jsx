/* eslint-disable react/display-name */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./assets/LandingPage";
import CampaignPage from "./assets/CampaignPage";
import AboutPage from "./assets/AboutPage";
import ContactPage from "./assets/ContactPage";
import ErrorPage from "./assets/ErrorPage";
import TestimonialPage from "./assets/TestimonialPage";
import PricingPage from "./assets/PricingPage";
import DailyRate from "./assets/DailyRate";
import CertificatePage from "./assets/CertificatePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/campaign/:user_id" element={<CampaignPage />} />
        <Route path="/testimonial/:user_id" element={<TestimonialPage />} />
        <Route path="/rates/:user_id" element={<DailyRate />} />
        <Route path="/certificate/:user_id" element={<CertificatePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
