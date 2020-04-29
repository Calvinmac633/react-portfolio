import React from "react";
import "./style.css";
import resume from "../../assets/Calvin-Macintosh-Resume.pdf"

function Nav() {
  return (

    <nav className="navbar is-fixed-top is-transparent is-solid">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="https://freepngimg.com/download/calvin_and_hobbes/31830-8-calvin-and-hobbes-transparent-background.png" width="70" height="112" />
        </a>
        {/* <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div> */}
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            <i className="fas fa-home"></i>
      </a>
          <h1 className="navbar-item name" href="/">
            Calvin Macintosh
      </h1>
          {/* <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
              Docs
        </a>
            <div className="navbar-dropdown is-boxed">
              <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
                Overview
          </a>
              <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                Modifiers
          </a>
              <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                Columns
          </a>
              <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
                Layout
          </a>
              <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
                Form
          </a>
              <hr className="navbar-divider" />
              <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
                Elements
          </a>
              <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                Components
          </a>
            </div>
          </div> */}
        </div>

        <div className="navbar-end">
          <div className="navbar-item buttons">
            <div className="field is-grouped">
              <p className="control">
                <a className="bd-tw-button button is-link is-outlined" target="_blank" href="https://github.com/Calvinmac633">
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                  <span>
                    Github
              </span>
                </a>
              </p>
              <p className="control">
                <a className="button is-link is-outlined" target="_blank" href="https://www.linkedin.com/in/calvin-macintosh-b5025198/">
                  <span className="icon">
                    <i className="fab fa-linkedin"></i>
                  </span>
                  <span>LinkedIn</span>
                </a>
              </p>
              <p className="control">
                <a onClick={() => alert("Email Function Available Shortly")}className="button is-link is-outlined" href="">
                  <span className="icon">
                    <i className="fas fa-envelope-open-text"></i>
                  </span>
                  <span>E-Mail</span>
                </a>
              </p>
              <p className="control">
                <a href={resume} target="_blank"
                  className="button is-link is-outlined">
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
    </nav>
  );
}

export default Nav;