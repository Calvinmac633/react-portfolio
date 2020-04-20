import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-item has-dropdown is-hoverable is-fixed-top">
      <a className="navbar-link is-arrowless"></a>
      <div className="navbar-dropdown">
        <a className="navbar-item">
          About
    </a>
        <a className="navbar-item">
          Portfolio
    </a>
        <a className="navbar-item">
          Contact
    </a>
      </div>
    </nav>
  );
}

export default Nav;