import React, { Component } from "react";

import Header from "./Header";
import Game from "./Game";
import Footer from "./Footer";

import "../styles/global.css";

class App extends Component {
  render() {
    return (
      <div className="app" style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "space-between",
        overflow: "hidden",
      }}>
        <Header />
        <Game />
        <Footer />
      </div>
    );
  }
}

export default App;
