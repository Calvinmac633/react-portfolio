import React from "react";
import "./style.css";
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import NoteTakerApp from "../../assets/NoteTakerApp.jpg"
import restaurantApp from "../../assets/restaurantApp.jpg"
import WeatherApp from "../../assets/WeatherApp.jpg"
import shopalot from "../../assets/shopalot.JPG"
import aboutImage from "../../assets/calvinroof2.jpg"
import mobileAboutImage from "../../assets/aboutmobile.jpg"


const imageUrl = window.innerWidth >= 650 ? aboutImage : mobileAboutImage
export function PortfolioComponent() {

    return (
        <div>
            
            <div id="Portfolio" className="background" style={{ backgroundImage: `url(${imageUrl})` }}>
                <nav style={{ backgroundColor: "rgba(0, 0, 0, 0)" }} className="navbar navbar-expand-lg navbar-light py-3" id="mainNav">
                    <div className="nav-container">
                    </div>
                    
                </nav>
                <section>
                    <div className="container-fluid p-0">
                        <div className="row no-gutters">
                            <div className="col-lg-4 col-sm-6">
                                <div className="card">
                                    <div className="card-block"></div>
                                    <img className="card-img-top" src={shopalot}></img>
                                    <div className="cardHeader">
                                        <h5 className="card-title">Shopalot</h5>
                                        <a target="_blank" href="https://shopalot-checkitout.herokuapp.com/">View Deployment</a>
                                    </div>
                                    <p className="card-text">A grocery list app that  allows users to create new, or join existing shopping
                                    lists that can be viewed and updated by other members who are given access.
                                    </p>
                                    <small className="card-text-muted">React.js, Node.js, Express, MongoDB</small>

                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="card">
                                    <div className="card-block"></div>
                                    <img className="card-img-top" src={WeatherApp}></img>
                                    <div className="cardHeader">
                                        <h5 className="card-title">Weather App</h5>
                                        <a target="_blank" href="https://calvinmac633.github.io/weather-app/">View Deployment</a>
                                    </div>
                                    <p className="card-text">A weather forecasting application! Search by city to receive real time weather updates, as well as the future 5-day forecast.
                                </p>
                                    <small className="card-text-muted">Node.js, Express</small>

                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="card">
                                    <div className="card-block"></div>
                                    <img className="card-img-top" src={NoteTakerApp}></img>
                                    <div className="cardHeader">
                                        <h5 className="card-title">Note Taker App</h5>
                                        <a target="_blank" href="http://sleepy-sands-76241.herokuapp.com/">View Deployment</a>
                                    </div>
                                    <p className="card-text">A note taker application! Create, delete, and update notes!</p>
                                    <small className="card-text-muted">Node.js, Express</small>

                                </div>
                            </div>
                        </div>
                    </div>


                </section>
            </div>
        </div>
    )
}