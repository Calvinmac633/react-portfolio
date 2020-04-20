import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import Nav from "./components/Nav"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="About">
          <About />
        </Route>
        <Route exact path="Portfolio">
          <Portfolio />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
