import React from "react";
import "./style.css";
import githubIcon from "../../assets/skillIcons/github.jpeg"
import boostrapIcon from "../../assets/skillIcons/bootstrap.png"
import firebaseIcon from "../../assets/skillIcons/firebase.png"
import htmlIcon from "../../assets/skillIcons/html5.png"
import jqueryIcon from "../../assets/skillIcons/jquery.png"
import materializeIcon from "../../assets/skillIcons/materialize.png"
import mongodbIcon from "../../assets/skillIcons/mongodb.jpeg"
import mysqlIcon from "../../assets/skillIcons/mysql.png"
import nodejsIcon from "../../assets/skillIcons/nodejs.png"
import npmIcon from "../../assets/skillIcons/npm.png"
import reactIcon from "../../assets/skillIcons/react.png"
import terminalIcon from "../../assets/skillIcons/terminal.png"

export function SkillsComponent() {
    return (
        <section id="Skills" class="hero is-warning is-medium">
            <div style={{ backgroundColor: "rgba(255, 227, 143)" }} class="hero-body">
                <div class="container">
                    <h1 style={{ marginBottom: "0" }} class="title">
                        Skills
      </h1>
                    <h1 class="title">- - -</h1>
                    <div className="iconRows">
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">
                            <img className="icons" src={githubIcon} />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">
                            <img className="icons" src={boostrapIcon} />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">
                            <img className="icons" src={firebaseIcon} />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">
                            <img className="icons" src={htmlIcon} />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">
                            <img className="icons" src={jqueryIcon} />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">
                            <img className="icons" src={mysqlIcon} />
                        </div>
                    </div>
                    <div className="iconRows">
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">
                            <img className="icons" src={materializeIcon} />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">
                            <img className="icons" src={mongodbIcon} />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">
                            <img className="icons" src={nodejsIcon} />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">
                            <img className="icons" src={npmIcon} />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">
                            <img className="icons" src={reactIcon} />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">
                            <img className="icons" src={terminalIcon} />
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
}