import React from "react";
import Header from "./Header";
import Dropdown from "./Dropdown";
import WeatherCard from "./WeatherCard";
import Footer from "./Footer";

function Container() {
  return (
    <div className="sm:h-screen patternBg">
      <Header />
      <Dropdown />
      <WeatherCard />
      <Footer />
    </div>
  );
}

export default Container;
