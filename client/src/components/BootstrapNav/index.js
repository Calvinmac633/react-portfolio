import React from "react";
import "./style.css";
import resume from "../../assets/Calvin-Macintosh-Resume.pdf"

function BootstrapNav() {
    return (
        <div className="pos-f-t">
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="p-4 collapsedContent">
                    {/* <h5 className="text-white h4">Collapsed content</h5>
                    <span className="text-muted">Toggleable via the navbar brand.</span> */}
                        <div className="navbar-item buttons">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a className="bd-tw-button is-small button is-link is-outlined" target="_blank" href="https://github.com/Calvinmac633">
                                        <span className="icon">
                                            <i className="fab fa-github"></i>
                                        </span>
                                        <span>
                                            Github
              </span>
                                    </a>
                                </p>
                                <p className="control">
                                    <a className="button is-small is-link is-outlined" target="_blank" href="https://www.linkedin.com/in/calvin-macintosh-b5025198/">
                                        <span className="icon">
                                            <i className="fab fa-linkedin"></i>
                                        </span>
                                        <span>LinkedIn</span>
                                    </a>
                                </p>
                                <p className="control">
                                    <a onClick={() => alert("Email Function Available Shortly")} className="button is-small is-link is-outlined" href="">
                                        <span className="icon">
                                            <i className="fas fa-envelope-open-text"></i>
                                        </span>
                                        <span>E-Mail</span>
                                    </a>
                                </p>
                                <p className="control">
                                    <a href={resume} target="_blank"
                                        className="button is-small is-link is-outlined">
                                        <span className="icon">
                                            <i className="fas fa-check-square"></i>
                                        </span>
                                        <span>Resume</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                </div>
            </div>
            <nav className="navbar fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        =
                        </span>
                </button>
                <div className="navbar-item">
                    <a href="/#Home">
                        <img src="https://freepngimg.com/download/calvin_and_hobbes/31830-8-calvin-and-hobbes-transparent-background.png" width="70" height="112" />
                    </a>
                </div>


            </nav>
        </div>
    );
}

export default BootstrapNav;