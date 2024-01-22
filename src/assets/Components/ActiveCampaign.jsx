/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const ActiveCampaign = ({ campaignRef }) => {
  return (
    <div className="" ref={campaignRef}>
      <h1 className="text-3xl font-medium">Running Campaigns</h1>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar mt-10">
        <div className="flex flex-nowrap ">
          <Link to="/campaign/Kha2Ji">
            <div className="inline-block px-3">
              <img
                src="Campaign7.jpg"
                alt=""
                className="object-cover object-bottom w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
              />
            </div>
          </Link>
          <Link to="/campaign/Concipt">
            <div className="inline-block px-3">
              <img
                src="Campaign6.jpg"
                alt=""
                className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
              />
            </div>
          </Link>
          <Link to="/campaign/SlG9WM">
            <div className="inline-block px-3">
              <img
                src="Campaign4.png"
                alt="SOHSS Food Fest"
                className="object-cover w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
              />
            </div>
          </Link>
          <Link to="/campaign/U4Aes">
            <div className="inline-block px-3">
              <img
                src="Campaign3.jpg"
                alt=""
                className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
              />
            </div>
          </Link>
          <Link to="/campaign/QXyOx7">
            <div className="inline-block px-3">
              <img
                src="Campaign2.jpg"
                alt=""
                className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActiveCampaign;
