import React from "react";
import "./style.css";
import image from "../../assets/CalvinCover.jpg"
import mobileImage from "../../assets/CalvinCoverMobile.jpg"
import { AboutLink, PortfolioLink } from "../CoverLinks"
import { Link } from "react-router-dom";



function Background() {
  const imageUrl = window.innerWidth >= 650 ? image : mobileImage
  return (
    <div className="background" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="background-content">
        <Link to="/About">
          <AboutLink />
        </Link>
        <PortfolioLink />
      </div>
    </div>


  );
}

export default Background;