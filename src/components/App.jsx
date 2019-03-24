import React, { Component } from "react";

import Setting from "./setting/Setting";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

class App extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {};
  }
  
  render() {
    const height = {
      header: "calc(100vmin/8)",
      setting: "calc(100vh - 100vmin/8 - 2rem)",
      footer: "2rem",
    };
    return (
      <div
        style={{
          display: "grid",
          gridTemplateRows: // responsive solution to fit window view
            `${height.header} ${height.setting} ${height.footer}`,
          overflow: "hidden"
        }}
      >
        <Header />
        <Setting /> {/* game board */}
        <Footer />
      </div>
    );
  }
}

export default App;
