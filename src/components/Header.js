import React from "react";
import { useWeather } from "../context/WeatherContext";
function Header() {
  const providedData = useWeather();
  return (
    <div>
      <h1 className="flex items-center justify-center text-center font-bold text-4xl p-5 text-white">
        7-Day Weather Forecast for {providedData.selectedCity}
      </h1>
    </div>
  );
}

export default Header;
