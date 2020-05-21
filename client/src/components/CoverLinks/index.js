import React from "react";
import "./style.css";
import { Link } from "react-router-dom";



export function Links() {
    return (
        <div className="home-container fromCoverLinks">
            <h1 style={{color: "grey"}}>Calvin Macintosh</h1>
            <h5 style={{color: "grey"}}>Full Stack Web Developer</h5>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                <br></br>
            <br></br>
            <div className="background-content fromCoverLinks">
                <a href="/#About">
                    <button className="button is-warning is-outlined is-large coverButtons">About</button>
                </a>
                <a href="/#Portfolio">
                    <button className="button is-warning is-outlined is-large coverButtons">Portfolio</button>
                </a>
            </div>
        </div>

    );
}