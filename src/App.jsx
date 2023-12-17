/* eslint-disable react/display-name */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./assets/LandingPage";
import CampaignPage from "./assets/CampaignPage";
import Camp from "./assets/Camp";
// import Layout from "./Layout";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/campaign/:user_id" element={<CampaignPage />} />
        <Route path="/camp" element={<Camp />} />

        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

// const withLayout = (Component) => {
//   return () => (
//     <Layout>
//       <Component />
//     </Layout>
//   );
// };

export default App;
