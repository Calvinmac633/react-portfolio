import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-item has-dropdown is-hoverable is-fixed-top">
      <a className="navbar-link is-arrowless">
        Link without arrow
  </a>
      <div className="navbar-dropdown">
        <a className="navbar-item">
          Overview
    </a>
        <a className="navbar-item">
          Elements
    </a>
        <a className="navbar-item">
          Components
    </a>
        <hr className="navbar-divider" />
        <div className="navbar-item">
          Version 0.8.2
    </div>
      </div>
    </nav>
  );
}

export default Nav;