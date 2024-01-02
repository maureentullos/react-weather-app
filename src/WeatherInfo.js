import React from "react";
import FormattedDate from "./FormattedDate";

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
          <div className="col-4">
            <div className="clearfix">
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(props.data.temperature)}
                </span>
                <span className="units">°F</span>
              </div>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-4">
            <ul>
              <li>Precipitation: </li>
              <li>Humidity: {props.data.humidity}% </li>
              <li>Wind: {Math.round(props.data.wind)} mph </li>
            </ul>
          </div>
        </div>
      </div>
    );
} 