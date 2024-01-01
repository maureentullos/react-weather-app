import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  
  const [weatherData, setWeatherData] = useState({ready:false});
  function handleResponse(response) {
  console.log(response.data);
  
  setWeatherData({
    ready: true,
    temperature:response.data.main.temp,
    wind:response.data.wind.speed,
    date: new Date(response.data.dt*1000),
    city: response.data.name,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",

  });

  }

  if(weatherData.ready){
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              ></input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              ></input>
            </div>
          </div>
        </form>

        <h1>
          Results for <span className="place-name">{weatherData.city}</span>{" "}
          <span className="date">
            <ul>
              <li><FormattedDate date={weatherData.date}/></li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </span>
        </h1>

        <div className="row mt-3">
          <div className="col-4">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="units">°F</span>
              </div>
            </div>
          </div>

          <div className="col-4">
            <ul>
              <li>Precipitation: </li>
              <li>Humidity: {weatherData.humidity}% </li>
              <li>Wind: {Math.round(weatherData.wind)} mph </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ed53d80a50f0ade46ca93a05ecdad3fc";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";

  }
    
}
