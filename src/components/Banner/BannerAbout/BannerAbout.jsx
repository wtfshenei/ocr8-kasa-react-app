import React from "react";
import BannerAboutpage from "./bannerabout.svg";

const BannerAbout = () => {
  return (
    <div className="banner-about">
      <img src={BannerAboutpage} alt="Bannière Kasa A Propos" />
      <div className="filter"></div>
    </div>
  );
};

export default BannerAbout;
