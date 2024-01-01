/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
const Working = () => {
  return (
    <div className="mt-20 ">
      <h1 className=" text-3xl font-medium">How Does it Work ?</h1>
      <div className=" flex-column mt-10 justify-center space-y-10">
        <div className="flex-column mt-10 space-y-2 justify-center space-y-10 md:flex md:justify-start">
          <div className="">
            <h1 className="text-xl font-medium">
              Step 1: Choose Your Plan & Design
            </h1>
            <p className="max-w-3xl md:pt-10 md:pr-24">
              Select the pricing plan that suits your needs and contact us.
              We'll communicate via WhatsApp to finalize your unique template
              design.
            </p>
          </div>
          <img className=" lg:w-1/3 border-2" src="Step1.png" alt="" />
        </div>

        <div className="flex-column space-y-2 justify-center space-y-10 md:flex md:justify-start ">
          <div className="">
            <h1 className="text-xl font-medium">
              Step 2: Share Your Custom Link
            </h1>
            <p className="max-w-3xl md:pt-10 md:pr-24">
              We'll provide you with a special link. Share this link on social
              media and via WhatsApp to spread the word about your event.
            </p>
          </div>
          <img className="lg:w-1/3 border-2" src="Step2.jpg" alt="" />
        </div>

        <div className="flex-column space-y-2 justify-center space-y-10 md:flex md:justify-start ">
          <div className="">
            <h1 className="text-xl font-medium">
              Step 3: Personalized Poster Creation
            </h1>
            <p className="max-w-3xl md:pt-10 md:pr-24">
              Attendees can use the link to create their own personalized
              posters by adding their photo and name. It's simple and fun!
            </p>
          </div>
          <img className="lg:w-1/3 border-2" src="Step3.jpg" alt="" />
        </div>

        <div className="flex-column space-y-2 justify-center space-y-10 md:flex md:justify-start ">
          <div className="">
            <h1 className="text-xl font-medium">Step 4: Share and Celebrate</h1>
            <p className="max-w-3xl md:pt-10 md:pr-24">
              Once their poster is ready, attendees can download it and share it
              as a WhatsApp status or on other social platforms.
            </p>
          </div>
          <img className="lg:w-1/3 border-2" src="Step4.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Working;
