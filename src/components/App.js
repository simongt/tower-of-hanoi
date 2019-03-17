import React, { Component } from "react";

import Header from "./Header";
import Description from "./Description";
import Game from "./Game";

import "../styles/global.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Description />
        <Game />
      </div>
    );
  }
}

export default App;
