const Hero = () => {
  return (
    <div className="md:flex mt-10 justify-center items-center p-4">
      <div className=" flex-column p-5 gap-4 justify-center">
        <div className="">
          <h1 className="mb-4 text-4xl tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl font-semibold">
            Make Your Offline Events Viral Online
          </h1>
          <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48">
            Framesify makes it simple: Personalize your campaign posters with
            your own photos and names in just a few clicks!
          </p>
        </div>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <button
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg bg-blue-500 border-white-500 "
            // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-2 border-blue-500 border-none"
          >
            Explore Campaigns
          </button>
          <button
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border-2 border-gray-500"
            // className="border-2 border-blue-500 text-blue-500 font-semibold py-2 px-4 rounded hover:bg-blue-100 "
          >
            Create Campaigns
          </button>
        </div>
      </div>
      <img src="Group 77.png" alt="photo grid" className="" />
    </div>
  );
};

export default Hero;
