import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control">
                </input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn-btn-primary"
              ></input>
            </div>
          </div>
        </form>

        <h1>Boston</h1>
        <ul>
          <li>Saturday 14:06</li>
          <li>Light Rain</li>
        </ul>
        
        <div className="row">
          
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
              alt=""
            />
            44°F
          </div>
          
          <div className="col-6">
            <ul>
              <li>Precipitation: 60% </li>
              <li>Humidity: 82% </li>
              <li>Wind: 8 mph </li>
            </ul>
          </div>

        </div>
        
      </div>
    );
}
