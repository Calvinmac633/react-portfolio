import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import CalvinMug from "../../assets/CalvinMug.jpg"




export function AboutCard() {
    return (
        <div className="cardContainer">
            <div className="card is-fluid">

                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img className="is-rounded" src={CalvinMug} alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <br />
                            <p className="title is-4">Calvin Macintosh</p>
                            <p className="subtitle is-6">Full-Stack Developer</p>
                        </div>
                    </div>
                    <br />
                    <div className="content">
                        <p>Hi! I'm Calvin, a South Philly-based graduate of La Salle University. In late 2019,
                        I launched my career in computer programming through <a target="_blank" href="https://bootcamp.sas.upenn.edu/coding/">University of Pennsylvania's LPS Coding
                        Bootcamp</a>. Thanks to this program, I've become widely proficient in both front-end and back-end
                        development.
                            </p>

                        <p>My first exposure to programming happened as a Actuarial Analyst for Willis Towers Watson
                        US LLC. This sparked my desire to learn more about advanced computer languages and technologies.
                        As the rise of automation in the workplace continues, especially in the finance industry, I hope to
                        stay ahead of the curve by incorporating the skills I've learned for a more efficient future.</p>

                        <p>Proficient in full-stack web development (HTML, CSS, javascript, SQL, MongoDB, React). Familiarity with: AJAX, DOM, JSON, Node.js, REST, Postman, Bootstrap, Express.js, and Handlebars. 
                            {/* <a>@bulmaio</a>.
<a href="#">#css</a> <a href="#">#responsive</a> */}
                        </p>
                        {/* <br />
                        <time datetime="2016-1-1">21 April 2020</time> */}
                    </div>
                </div>
            </div>

        </div>

    );
}

