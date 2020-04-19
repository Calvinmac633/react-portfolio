import React from "react";
import "./style.css";
import image from "../../assets/CalvinCover.jpg"
import mobileImage from "../../assets/CalvinCoverMobile.jpg"


function Background() {
  const imageUrl = window.innerWidth >= 650 ? image : mobileImage
  return (
      <div className="background" style={{backgroundImage: `url(${imageUrl})` }}>
        <div className="background-content">
                <h1>Calvin Macintosh</h1>
                <p>Full Stack Web Developer</p>
            </div>
      </div>
        
    
  );
}

export default Background;