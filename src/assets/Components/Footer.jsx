import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 flex justify-center items-center">
      <Link to="/">
        <img className="w-48" src="Logo.png" alt="Framesify" />
      </Link>
    </div>
  );
};

export default Footer;
