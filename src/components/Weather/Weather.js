import React, { useState } from "react";
import "./weather.css";
import searchIcon from "./assets/search.png";
import rain from "./assets/rain.png";
import Wind from "./assets/wind.png";
import clear from "./assets/clear.png";
import cloud from "./assets/cloud.png";
import drizzle from "./assets/drizzle.png";
import humidityIcon from "./assets/humidity.png";
import snow from './assets/snow.png'

function Weather() {
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [temperature, setTemperature] = useState("");
  const [location, setLocation] = useState("");
  const [WIcon, setWIcon] = useState(cloud);

  const api_key = 'dd94f859a0e52d6e4767fddf735f04a7';

  const search = async () => {
    const element = document.getElementsByClassName('cityInput');
    if (element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;

    let response = await fetch(url);

    let data = await response.json();

    setHumidity(data.main.humidity + "%");
    setWindSpeed(data.wind.speed + " km/h");
    setTemperature(data.main.temp);

    setLocation(data.name);

    if (data.main.temp < 10) {
      setWIcon(snow);
    } else if (data.main.temp >= 10 && data.main.temp < 20) {
      setWIcon(drizzle);
    } else if (data.main.temp >= 20 && data.main.temp < 30) {
      setWIcon(cloud);
    }
    else if(data.main.temp === 10){
      setWIcon(rain)
    }
    else {
      setWIcon(clear);
    }
  };

  return (
    <>
      <div className="container-1" style={{ marginTop: "100px" }}>
        <div className="top-bar">
          <input type="text" className="cityInput" placeholder="Enter City!" />
          <div onClick={() => { search() }} className="search-icon">
            <button className="btn" style={{ border: 'none' }}>
              <img src={searchIcon} alt="search-icon" />
            </button>
          </div>
        </div>
        <div className="weather-img">
          <img src={WIcon} alt="weather-icon" />
        </div>
        <div className="weather-temp">{temperature} °C</div>
        <div className="weather-location">{location}</div>
        <div className="data-container">
          <div className="element">
            <img src={humidityIcon} className="icon" alt="" />
            <div className="data">
              <div className="humidity-precentage">{humidity}</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={Wind} className="icon" alt="" />
            <div className="data">
              <div className="wind-rate">{windSpeed}</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;

