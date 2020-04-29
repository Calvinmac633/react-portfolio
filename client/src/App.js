import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Nav from "./components/Nav"
import BootstrapNav from "./components/BootstrapNav"


function App() {

  return (
    <BrowserRouter>
      <BootstrapNav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Portfolio">
          <Portfolio />
        </Route>
      </Switch>


    </BrowserRouter>

  );
}

export default App;
