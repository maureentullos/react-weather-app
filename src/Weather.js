import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";



export default function Weather(props) {
  const [city, setCity]=useState(props.defaultCity);
  
  const [weatherData, setWeatherData] = useState({ready:false});
  
  function handleResponse(response) {
  
  
  setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    date: new Date(response.data.dt * 1000),
    city: response.data.name,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    iconUrl: response.data.weather[0].icon,

  });
  }
  function search() {
    const apiKey = "ed53d80a50f0ade46ca93a05ecdad3fc";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  
  }

  if(weatherData.ready){
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
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

        <WeatherInfo data={weatherData}/>

        
      </div>
    );
  } else {
    search();
  return "Loading...";
  }
    
}
