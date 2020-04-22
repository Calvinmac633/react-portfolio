import React from "react";
import "./style.css";
import NoteTakerApp from "../../assets/NoteTakerApp.jpg"
import restaurantApp from "../../assets/restaurantApp.jpg"
import WeatherApp from "../../assets/WeatherApp.jpg"
import Modal from "../Modals"

function displayModal(id) {
  switch (id) {
    case "weather":
      return <Modal />
  }
}

function PortfolioDisplay() {

  return (
    <div className="cardContainer">


      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child box">
            <p className="subtitle">Weather App</p>
            <figure className="image is-4by3">
              <img src={WeatherApp} />
            </figure>
            <br />
            <a target="_blank" href="https://calvinmac633.github.io/weather-app/">
            <button id="weather"  className="button is-warning">More!</button>
            </a>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box">
            <p className="subtitle">Restaurant App</p>
            <figure className="image is-4by3">
              <img src={restaurantApp} />
            </figure>
            <br />
            <a target="_blank" href="https://mms211.github.io/What-Do-You-Want-To-Eat-App/">
            <button id="restaurant" className="button is-warning">More!</button>
            </a>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box">
            <p className="subtitle">Note Taking App</p>
            <figure className="image is-4by3">
              <img src={NoteTakerApp} />
            </figure>
            <br />
            <a target="_blank" href="http://sleepy-sands-76241.herokuapp.com/" >
            <button id="note" className="button is-warning">More!</button>
            </a>
          </div>
        </div>
      </div>


    </div>

  );
}

export default PortfolioDisplay;