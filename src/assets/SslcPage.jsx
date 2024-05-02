import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const SslcPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="container flex justify-center bg-[#edf8f8] ">
        <div className="my-10 w-full md:w-2/3  bg-white rounded-md shadow-xl p-8 md:p-16 flex flex-col space-y-10">
          <h1 className="font-sans text-3xl font-bold ">
            Create poster for SSLC Winners
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold">
            Create congratulation posters for SSLC winners with just two clicks.
          </h2>
          <div className="space-y-5 md">
            <p>
              Using Framesify, you can create posters congratulating the SSLC
              winners with their photo and name just with two clicks.
            </p>
            <p>Here is what to do:-</p>
            <div className="md:px-10 px-5">
              <ol className="list-decimal mt-4 space-y-2">
                <li>Click on the link below</li>
                <li>Add name and number of A+ in the text fields </li>
                <li>Click “Submit”</li>
                <li>
                  Here we go! , download the poster and share it on social
                  media.
                </li>
              </ol>
            </div>
          </div>
          <img
            src="./sslcPoster.jpg"
            alt="poster"
            className="w-[250px] mx-auto"
          />
          <Link to="/campaign/sw7LB4 " className="mx-auto">
            <button className="w-fit  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Click Here
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SslcPage;
