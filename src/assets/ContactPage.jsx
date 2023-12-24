/* eslint-disable no-irregular-whitespace */
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="mt-10 flex-grow p-5 md:p-20 lg:px-40">
        <h1 className="text-xl font-medium">Contact US</h1>
        <div className="mt-10 space-y-5">
          <h2 className="text-lg">Have any queries regarding the product?</h2>
          <div className="space-y-2">
            <h3 className="text-lg">Reach out to us:</h3>
            <div className="">
              <p>
                Email:{" "}
                <a href="mailto:fash.products@gmail.com">
                  fash.products@gmail.com
                </a>
              </p>
              <p>
                Phone: <span>+917592084303</span>
              </p>
              <p>5VW6+2PX, Farook College, Kozhikode, Kerala 673632</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
