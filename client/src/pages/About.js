import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import aboutImage from "../assets/calvinroof2.jpg"
// import image from "../assets/CalvinCover.jpg"
import {AboutCard} from "../components/Card"




function About() {
    return (

        <div className="background" style={{ backgroundImage: `url(${aboutImage})` }}>
            <AboutCard />

        </div>
    );
}

export default About;
