import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import Background from "../components/Background/"
import { AboutLink, PortfolioLink } from "../components/CoverLinks"
import { Link } from "react-router-dom";
import About from "./About";
import image from "../assets/CalvinCover.jpg"
import mobileImage from "../assets/CalvinCoverMobile.jpg"
import aboutImage from "../assets/calvinroof2.jpg"
import Nav from "../components/Nav"


function Home() {
    const imageUrl = window.innerWidth >= 650 ? image : mobileImage

    return (
            <div className="background" style={{ backgroundImage: `url(${imageUrl})` }}>
                <AboutLink />
            </div>
    );


}

export default Home;
