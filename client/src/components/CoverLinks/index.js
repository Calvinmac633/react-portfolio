import React from "react";
import "./style.css";
import { Link } from "react-router-dom";



export function AboutLink() {
    return (
        <div className="background-content fromCoverLinks">
            <Link to="/About">
                <button className="button is-warning is-outlined is-large coverButtons">About</button>
            </Link>
            <Link to="/Portfolio">
                <button className="button is-warning is-outlined is-large coverButtons">Portfolio</button>
            </Link>
        </div>
    );
}

export function PortfolioLink() {
    return (
        <>
            <button className="button is-warning is-outlined is-large coverButtons">Portfolio</button>
        </>
    );
}