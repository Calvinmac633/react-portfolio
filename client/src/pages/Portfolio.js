import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import portImage from "../assets/calvinport.jpg"
// import image from "../assets/CalvinCover.jpg"
import { AboutCard } from "../components/Card"
import PortfolioDisplay from "../components/PortfolioDisplay"




function Portfolio() {
    return (

        <div className="background" style={{ backgroundImage: `url(${portImage})` }}>
            <PortfolioDisplay />
        </div>
    );
}

export default Portfolio;
