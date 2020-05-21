import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import Background from "../components/Background/"
import { Links } from "../components/CoverLinks"
import { Link } from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import image from "../assets/CalvinCover.jpg"
import mobileImage from "../assets/homemobile.jpg"
import aboutImage from "../assets/calvinroof2.jpg"
import Nav from "../components/Nav"
import "./style.css";


function Home() {
    // const imageUrl = window.innerWidth >= 650 ? image : mobileImage

    return (
            <div id="Home" className="background" style={{ backgroundImage: `url(${image})`, height: "100vh" }}>
                {/* <h1>Calvin Macintosh</h1> */}
                <Links />
            </div>
    );


}

export default Home;
