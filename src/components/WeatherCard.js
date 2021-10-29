import React, { useEffect, useState } from "react";
import axios from "axios";
import { useWeather } from "../context/WeatherContext";
function WeatherCard() {
  const providedData = useWeather();
  const [coordinates, setCoordinates] = useState([]);
  const [weather, setWeather] = useState([]);
  const apiKey = "66f077be60e3ba7f90d651bb008aaba8";
  const cityName = `${providedData.selectedCity}`;
  const cityAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  const dailyAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=current,minutely,hourly&units=metric&appid=${apiKey}`;
  useEffect(() => {
    axios(cityAPI)
      .then((response) => {
        setCoordinates(response.data.coord);
      })
      .catch((err) => {});
    axios(dailyAPI)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((err) => {});
  }, [cityAPI, dailyAPI]);
  useEffect(() => {
    document.querySelector("#card1") &&
      document.querySelector("#card1").classList.remove("bg-opacity-80");
    document.querySelector("#card1") &&
      document
        .querySelector("#card1")
        .classList.add("border-4", "border-yellow-200");
  });

  function dtConverter(UNIX_TIMESTAMP) {
    var date = new Date(UNIX_TIMESTAMP * 1000).toString().split(" ")[0];
    return date;
  }
  return (
    <ul className="grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 justify-items-stretch text-center">
      {weather.daily &&
        weather.daily.map((s, i) => (
          <li
            id={`card${i + 1}`}
            key={i + 1}
            className="bg-opacity-80 bg-white rounded-xl shadow-md m-2"
          >
            <div className="text-xl font-medium text-black">
              {dtConverter(s.dt)}
            </div>
            <div className="flex items-center justify-center filter drop-shadow-lg">
              <img
                src={`https://openweathermap.org/img/wn/${s.weather[0].icon}@2x.png`}
                alt="weatherImg"
              />
            </div>
            <div className="text-gray-700 font-medium">
              {s.weather[0].description.toUpperCase()}
            </div>
            <div className="font-bold">
              <span className="text-gray-900 inline-block mr-2">
                {Math.floor(s.temp.min)}º
              </span>
              <span className="text-gray-900 inline-block mr-2">/</span>
              <span className="text-gray-500 inline-block">
                {Math.floor(s.temp.max)}º
              </span>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default WeatherCard;
