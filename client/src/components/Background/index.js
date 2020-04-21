import React from "react";
import "./style.css";
import image from "../../assets/CalvinCover.jpg"
import mobileImage from "../../assets/CalvinCoverMobile.jpg"
import {AboutLink} from "../CoverLinks"





function Background() {
  const imageUrl = window.innerWidth >= 650 ? image : mobileImage
  return (
    <div className="background" style={{ backgroundImage: `url(${imageUrl})` }}>
<AboutLink />
    </div>


  );
}

export default Background;