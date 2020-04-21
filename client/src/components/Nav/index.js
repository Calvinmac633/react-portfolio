import React from "react";
import "./style.css";

function Nav() {
  return (

<nav class="navbar is-fixed-top is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/">
        Home
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
          Docs
        </a>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
            Overview
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
            Modifiers
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
            Columns
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
            Layout
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
            Form
          </a>
          <hr class="navbar-divider" />
          <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
            Elements
          </a>
          <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
            Components
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="bd-tw-button button is-link is-outlined" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
              <span class="icon">
                <i class="fab fa-github"></i>
              </span>
              <span>
                Github
              </span>
            </a>
          </p>
          <p class="control">
            <a class="button is-link is-outlined" target="_blank" href="https://www.linkedin.com/in/calvin-macintosh-b5025198/">
              <span class="icon">
                <i class="fab fa-linkedin"></i>
              </span>
              <span>LinkedIn</span>
            </a>
          </p>
          <p class="control">
            <a class="button is-link is-outlined" href="https://github.com/jgthms/bulma/releases/download/0.8.2/bulma-0.8.2.zip">
              <span class="icon">
                <i class="fas fa-envelope-open-text"></i>
              </span>
              <span>E-Mail</span>
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