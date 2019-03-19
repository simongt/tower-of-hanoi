import React, { Component } from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

import Header from "./Header";
import Game from "./Game";
import Footer from "./Footer";

import "../stylesheets/global.css";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          width: "100vw",
          height: "100vh",
          display: "grid",
          gridTemplateRows: "12rem 1fr 2rem",
          overflow: "hidden",
        }}
      >
        <Header />
        <Game />
        <Footer />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
