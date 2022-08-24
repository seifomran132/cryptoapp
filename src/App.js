import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import "./App.css";
import Footer from "./Components/Footer";
function App(props) {
  return (
    <div className="app">
      <nav className="navbar">
        <Navbar />
      </nav>
      <main className="main">
        <Main></Main>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
