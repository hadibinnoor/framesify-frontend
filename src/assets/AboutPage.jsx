/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="p-5 flex-grow flex-column space-y-5 mt-10 md:p-20 lg:px-40">
        <h1 className="text-xl font-medium">About Us</h1>
        <p>
          We're not here to boast about our mission or vision. Framesify was a
          project created by four final-year computer science students from
          Farook College, Kozhikode.
        </p>
        <h4>How did we end up here?</h4>
        <p>
          We observed the shift in event promotion within our college and
          outside. With everything transitioning to social media, we embraced
          this concept.
        </p>
        <p>
          Framesify simplifies event promotion by creating personalized posters
          with photos and names. Afterwards, you can easily share or download
          these posters on social media.
        </p>
        <h4> That's it.</h4>
        <h4> Thank You :)</h4>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
