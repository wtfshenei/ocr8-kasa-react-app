import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Properties from "../../components/Properties/Properties";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Banner />
      <Properties />
      <Footer />
    </div>
  );
};

export default Home;
