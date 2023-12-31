import React, {useState} from "react";


import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }


    
    if(loaded){
      
      return (
        <div className="WeatherForecast">
          <div className="row">
            <div className="col">
              <WeatherForecastDay data={forecast[0]} />
              
            </div>
          </div>
        </div>
      );

     
    }else{
       let apiKey = "43af6e809029fdc7ab07329d8588c9cd";
       let longitude = props.coordinates.lon;
       let latitude = props.coordinates.lat;
       let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

       axios.get(apiUrl).then(handleResponse);

      return null;
    }
    
    
}

