import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import Background from "../components/Background/index"
import { AboutLink, PortfolioLink } from "../components/CoverLinks"
// import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <Background>
                <AboutLink />
                <PortfolioLink />
            </Background>
        </div>

    );
}

export default Home;
