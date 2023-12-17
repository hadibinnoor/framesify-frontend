/* eslint-disable react/prop-types */
import Footer from "./assets/Components/Footer";
import Navigation from "./assets/Components/Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
