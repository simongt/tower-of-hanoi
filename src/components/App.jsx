import React, { Component } from "react";

import Setting from "./game/Setting";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Layout from "./constants/Layout";

class App extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      numDisks: 3,
    };
  }
  
  render() {
    return (
      <div style={layoutStyle}>
        <Header />
        <Setting numDisks={this.state.numDisks} /> {/* game board */}
        <Footer />
      </div>
    );
  }
}

// responsive grid layout fits entire app into window view
const layoutStyle = {
  display: "grid",
  gridTemplateRows: `
    calc(${Layout.HEADER_HEIGHT})
    calc(${Layout.SETTING_HEIGHT})
    ${Layout.FOOTER_HEIGHT}
  `,
  overflow: "hidden"
};

export default App;
