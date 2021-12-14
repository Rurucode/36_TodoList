import React, { Component } from "react";
import Lista from "./Lista/Lista";
import About from "./About";
import {Route, Routes } from 'react-router-dom';
import Home from "./Home"

class Main extends Component {
  render() {
    return ( 
    <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Lista" element={<Lista/>} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </main>
    )
  }
}

export default Main;
