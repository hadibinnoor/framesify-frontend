/* eslint-disable no-irregular-whitespace */
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const PricingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="mt-10 flex-grow p-5 md:p-20 lg:px-40">
        <h1 className="text-xl font-medium">Pricing</h1>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar  space-x-10">
          <div className=" w-full max-w-sm p-4 border rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700">
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Standard plan
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold">₹</span>
              <span className="text-5xl font-extrabold tracking-tight">
                499
              </span>
            </div>
            <ul role="list" className="space-y-5 my-7">
              <li className="flex items-center">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <h2 className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Unlimited Posters
                </h2>
              </li>
              <li className="flex">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <h2 className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Single Link
                </h2>
              </li>
{/*               <li className="flex">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <h2 className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Frame Design
                </h2>
              </li> */}
              <li className="flex">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <h2 className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  High Quality
                </h2>
              </li>
              <li className="flex">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                
                <h2 className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Customer Support
                </h2>
              </li>
            </ul>
            <a href="https://wa.me/message/MCLGP4BB4PSHC1">
              <button
                type="button"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              >
                Choose plan
              </button>
            </a>
          </div>
        </div>
        <p className="font-l">
          <span className="font-semibold">Note:</span> You will be redirected to
          Whatsapp when you click on "Choose Plan". Additional charges will be applied for frame designing.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
