import React from "react";
import BannerHomepage from "./banner.svg";

const Banner = () => {
  return (
    <div className="banner">
      <img src={BannerHomepage} alt="Bannière Kasa" />
      <div className="background">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
};

export default Banner;
