import { useEffect } from "react";
import { useWeather } from "../context/WeatherContext";
import { BsFillGeoAltFill } from "react-icons/bs";
import axios from "axios";
function Dropdown() {
  const selectDOM = document.querySelector(".citiesInTurkeyList");
  const citiesInTurkey = [
    "Adana",
    "Adıyaman",
    "Afyon",
    "Ağrı",
    "Amasya",
    "Ankara",
    "Antalya",
    "Artvin",
    "Aydın",
    "Balıkesir",
    "Bilecik",
    "Bingöl",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
    "Çanakkale",
    "Çankırı",
    "Çorum",
    "Denizli",
    "Diyarbakır",
    "Edirne",
    "Elazığ",
    "Erzincan",
    "Erzurum",
    "Eskişehir",
    "Gaziantep",
    "Giresun",
    "Gümüşhane",
    "Hakkari",
    "Hatay",
    "Isparta",
    "Mersin",
    "İstanbul",
    "İzmir",
    "Kars",
    "Kastamonu",
    "Kayseri",
    "Kırklareli",
    "Kırşehir",
    "Kocaeli",
    "Konya",
    "Kütahya",
    "Malatya",
    "Manisa",
    "Kahramanmaraş",
    "Mardin",
    "Muğla",
    "Muş",
    "Nevşehir",
    "Niğde",
    "Ordu",
    "Rize",
    "Sakarya",
    "Samsun",
    "Siirt",
    "Sinop",
    "Sivas",
    "Tekirdağ",
    "Tokat",
    "Trabzon",
    "Tunceli",
    "Şanlıurfa",
    "Uşak",
    "Van",
    "Yozgat",
    "Zonguldak",
    "Aksaray",
    "Bayburt",
    "Karaman",
    "Kırıkkale",
    "Batman",
    "Şırnak",
    "Bartın",
    "Ardahan",
    "Iğdır",
    "Yalova",
    "Karabük",
    "Kilis",
    "Osmaniye",
    "Düzce",
  ];
  const providedData = useWeather();
  useEffect(() => {
    const id = citiesInTurkey.findIndex(
      (element) => element === providedData.defaultCity
    );
    document
      .querySelector(".citiesInTurkeyList")
      .options[id].setAttribute("selected", "");
  });

  const geoLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      axios(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=5&appid=66f077be60e3ba7f90d651bb008aaba8`
      ).then((response) => {
        providedData.setSelectedCity(response.data[0].name);
        if (selectDOM) {
          selectDOM.value = response.data[0].name;
        }
      });
    });
  };

  return (
    <div className="flex justify-center items-center p-5">
      <select
        className="citiesInTurkeyList font-medium text-black bg-white bg-opacity-80 rounded-lg hover:bg-white focus:outline-none focus:shadow-outline"
        onChange={(e) => providedData.setSelectedCity(e.target.value)}
      >
        {citiesInTurkey.map((city, i) => (
          <option key={(i += 1)} value={city}>
            {city}
          </option>
        ))}
      </select>
      <BsFillGeoAltFill
        className="text-white text-opacity-80 text-xl ml-2 hover:text-opacity-100"
        onClick={geoLocation}
      />
    </div>
  );
}

export default Dropdown;
