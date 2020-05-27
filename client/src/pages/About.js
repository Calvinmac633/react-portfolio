import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import aboutImage from "../assets/calvinroof2.jpg"
import mobileAboutImage from "../assets/aboutmobile.jpg"
// import image from "../assets/CalvinCover.jpg"

import "./style.css"
import {AboutComponent} from "../components/AboutComponent"



function About() {
    const imageUrl = window.innerWidth >= 650 ? aboutImage : mobileAboutImage

    return (

       <AboutComponent />

    );
}

export default About;
