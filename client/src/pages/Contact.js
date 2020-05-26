import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
// import image from "../assets/CalvinCover.jpg"
import { AboutCard } from "../components/Card"
import PortfolioDisplay from "../components/PortfolioDisplay"
import "./style.css";
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import NoteTakerApp from "../assets/NoteTakerApp.jpg"
import restaurantApp from "../assets/restaurantApp.jpg"
import WeatherApp from "../assets/WeatherApp.jpg"
import shopalot from "../assets/shopalot.JPG"

import aboutImage from "../assets/calvinroof2.jpg"
import mobileAboutImage from "../assets/aboutmobile.jpg"


function Contact() {
    const imageUrl = window.innerWidth >= 650 ? aboutImage : mobileAboutImage


    return (
        <div id="Portfolio" className="background" style={{ backgroundImage: `url(${imageUrl})` }}>
yo
        </div>

    );
}

export default Contact;
