/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <div
      className="bg-[#edf8f8]"
      // className="flex-1 overflow-y-auto p-20 h-auto flex gap-20 bg-[#edf8f8]"
    >
      <div className="flex-colummn p-10 gap-x-5 space-y-5">
        <h1 className="text-3xl font-medium mt-10">What Does Framesify Do ?</h1>
        <h1 className="text-xl mt-5">Hosting an offline event?</h1>
        <p className="">
          Whether it's a fundraiser, political gathering, or social affair,
          success lies in effective promotion. Enter Framesify.
        </p>
        <p>
          Our tool lets attendees create personalized photos with their own
          images and names – just by clicking a link.
        </p>
        <p>
          They can then download and share these on social media, spreading the
          word about your event even further. Make your event the talk of the
          town with Framesify!
        </p>
      </div>
      <div className="">
        <iframe src="https://giphy.com/embed/3oz8xAcGUfJvLiHG92"></iframe>
      </div>
    </div>
  );
};

export default About;
