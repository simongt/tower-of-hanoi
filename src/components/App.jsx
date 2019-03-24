import React, { Component } from "react";
import Setting from "./game/Setting";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Layout from "./constants/Layout";

class App extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      numDisks: 9,
      towers: [{
        id: 1,
        disks: [],
      }, {
        id: 2,
        disks: [],
      }, {
        id: 3,
        disks: [],
      }],
    };
  }

  componentDidMount = () => {
    this.setState(prevState => {
      const disks = [];
      for(let id = 1; id <= prevState.numDisks; id++) {
        disks.push({id: id});
      }
      return {
        towers: [{
          id: 1,
          disks: disks,
        }, {
          id: 2,
          disks: [],
        }, {
          id: 3,
          disks: [],
        }]
      }
    });
  }
  
  
  render() {
    return (
      <div style={layoutStyle}>
        <Header />
        <Setting towers={this.state.towers} /> {/* game board */}
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
