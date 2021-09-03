import React from "react";
import "./landingPage.scss";

import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import ProductType from "../../components/ProductType/ProductType";
import DailyEssential from "../../components/DailyEssential/DailyEssential";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import LastSection from "../../components/lastSection/LastSection";
function LandingPage() {
  return (
    <div className="app">
      <div className="strip"></div>
      <Header />
      <Banner />
      <ProductType />
      <DailyEssential />

      <WhoWeAre />
      <LastSection />
    </div>
  );
}

export default LandingPage;
