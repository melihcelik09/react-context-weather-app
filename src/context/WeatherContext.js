import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();
const defaultCity = "Aydın";

export const WeatherProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState(defaultCity);
  const values = { selectedCity, setSelectedCity, defaultCity };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};
export const useWeather = () => useContext(WeatherContext);
