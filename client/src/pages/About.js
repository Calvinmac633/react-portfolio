import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import aboutImage from "../assets/calvinroof2.jpg"
import mobileAboutImage from "../assets/aboutmobile.jpg"
// import image from "../assets/CalvinCover.jpg"
import {AboutCard} from "../components/Card"
import "./style.css"




function About() {
    const imageUrl = window.innerWidth >= 650 ? aboutImage : mobileAboutImage

    return (

        <div className="background" style={{ backgroundImage: `url(${imageUrl})` }}>
            <AboutCard />

        </div>
    );
}

export default About;
