import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import portImage from "../assets/calvinport.jpg"
import portMobile from "../assets/portmobile.jpg"
// import image from "../assets/CalvinCover.jpg"
import { AboutCard } from "../components/Card"
import PortfolioDisplay from "../components/PortfolioDisplay"
import "./style.css";




function Portfolio() {
    const imageUrl = window.innerWidth >= 650 ? portImage : portMobile

    
    return (

        <div className="background" style={{ backgroundImage: `url(${imageUrl})` }}>
            <PortfolioDisplay />
        </div>
    );
}

export default Portfolio;
