import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import aboutImage from "../assets/calvinroof2.jpg"
import mobileAboutImage from "../assets/aboutmobile.jpg"
// import image from "../assets/CalvinCover.jpg"
import { AboutCard } from "../components/Card"
import resume from "../assets/Calvin-Macintosh-Resume.pdf"
import "./style.css"




function About() {
    const imageUrl = window.innerWidth >= 650 ? aboutImage : mobileAboutImage

    return (

        <div>

            <section id="About" class="hero is-info is-medium">
                <nav style={{ backgroundColor: "rgba(255, 149, 149, 0)" }} className="navbar navbar-expand-lg navbar-light py-3" id="mainNav">
                    <div className="nav-container">
                    </div>
                </nav>
                <div class="hero-body">
                    <div class="container">
                        <h1 style={{color: "white"}}>About Me</h1>
                        <h3 style={{color: "white"}}>______</h3>
                        <br></br>
                        <h4 style={{color: "white"}}>A Full-Stack Developer, recently graduated from University of Pennsylvania's Coding Bootcamp. 
                        Experienced in working with others to produce dynamic, user-friendly web applications.
                        Continue below to see what technologies and projects I have experience in.</h4>
                        <br></br>
                        <div className="field is-grouped">
                            <p className="control">
                                <a className="bd-tw-button is-large button is-light is-outlined" target="_blank" href="https://github.com/Calvinmac633">
                                    <span className="icon">
                                        <i className="fab fa-github"></i>
                                    </span>
                                    <span>
                                        Github Repo
              </span>
                                </a>
                            </p>
                            {/* <p className="control">
                                <a className="button is-large is-link is-outlined" target="_blank" href="https://www.linkedin.com/in/calvin-macintosh-b5025198/">
                                    <span className="icon">
                                        <i className="fab fa-linkedin"></i>
                                    </span>
                                    <span>LinkedIn</span>
                                </a>
                            </p>
                            <p className="control">
                                <a onClick={() => alert("Email Function Available Shortly")} className="button is-large is-link is-outlined" href="">
                                    <span className="icon">
                                        <i className="fas fa-envelope-open-text"></i>
                                    </span>
                                    <span>E-Mail</span>
                                </a>
                            </p> */}
                            <p className="control">
                                <a href={resume} target="_blank"
                                    className="button is-large is-light is-outlined">
                                    <span className="icon">
                                        <i className="fas fa-check-square"></i>
                                    </span>
                                    <span>Resume</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>

    );
}

export default About;
