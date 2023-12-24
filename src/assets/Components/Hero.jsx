/* eslint-disable react/prop-types */
const Hero = ({ pricingRef, campaignRef }) => {
  const scrollToPricing = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="lg:flex mt-5 lg:mt-0 justify-center items-center p-4 lg:h-screen">
      <div className=" flex-column p-5 gap-4 justify-center">
        <div className="md:pl-20">
          <h1 className="mb-4 text-4xl tracking-tight leading-none text-gray-900 md:text-5xl font-semibold">
            Make Your Offline Events Viral Online
          </h1>
          <p className="mb-8 text-lg font-normal lg:text-xl">
            Framesify makes it simple: Personalize your campaign posters with
            your own photos and names in just a few clicks!
          </p>
        </div>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => scrollToPricing(campaignRef)}
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg bg-blue-500 border-white-500 "
          >
            Explore Campaigns
          </button>
          <button
            onClick={() => scrollToPricing(pricingRef)}
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border-2 border-gray-500"
          >
            Create Campaigns
          </button>
        </div>
      </div>
      <img src="Group 77.png" alt="photo grid" className="lg:w-1/2" />
    </div>
  );
};

export default Hero;
