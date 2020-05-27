import React from "react";
import "./style.css";
import resume from "../../assets/Calvin-Macintosh-Resume.pdf"

function BootstrapNav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div className="nav-container">
                <a className="navbar-brand js-scroll-trigger" href="#Home">Calvin Macintosh</a>
                <div className="navbar-collapse collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto my-2 my-lg-0">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#About">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#Portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#Skills">Skills</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#Contact">Contact</a></li>
                    </ul>
                </div>
                <button className="navbar-toggler navbar-toggler-right collapsed" type="button" 
                data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" 
                aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );
}

export default BootstrapNav;