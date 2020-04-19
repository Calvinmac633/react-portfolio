import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "../src/components/Nav"
import Background from "./components/Background/index.js"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import imageUrl from "./assets/CalvinCover.jpg"


function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Background />
    </BrowserRouter>

  );
}


export default App;
