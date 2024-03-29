import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <h1>
          Results for <span className="place-name">{props.data.city}</span>{" "}
          <span className="date">
            <ul>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>
          </span>
        </h1>

        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex">
              <div>
                <WeatherIcon code={props.data.icon} size={52} />
              </div>

              <div className="float-left">
                <WeatherTemperature fahrenheit={props.data.temperature} />
              </div>
            </div>
          </div>

          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity}% </li>
              <li>Wind: {Math.round(props.data.wind)} mph </li>
            </ul>
          </div>
        </div>
      </div>
    );
} 