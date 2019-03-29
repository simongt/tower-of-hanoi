import React, { Component } from "react";
import Setting from "./game/Setting";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Layout from "./constants/Layout";

class App extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      towers: [
        { id: 1, disks: [] },
        { id: 2, disks: [] },
        { id: 3, disks: [] }
      ],
    };
  }

  componentDidMount = () => {
    const disks = [];
    for(let id = 1; id <= Layout.NUM_DISKS; id++) {
      disks.push({id: id});
    }
    this.setState({
      towers: [
        { id: 1, disks: disks },
        { id: 2, disks: [] },
        { id: 3, disks: [] }
      ]
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("App → componentDidUpdate → state");
    // console.table(this.state);
  }

  removeDisk = (diskId) => {
    this.setState(prevState => {
      // traverse towers to filter out the moved disk
      prevState.towers.forEach(tower => {
        tower.disks = tower.disks.filter(disk => {
          return disk.id !== diskId; // filter out moved disk
        }); // end filter disks
      }); // end forEach towers
      return ({
        towers: prevState.towers,
      });
    }); // end setState
  }; // end removeDisk

  insertDisk = (diskId, towerId) => {
    this.setState(prevState => ({
      // add disk to target tower
      towers: prevState.towers.map(tower => {
        if (tower.id === towerId) {
          tower.disks.push({ id: diskId });
        }
        return tower;
      }), // end map towers
    })); // end setState
  } // end insertDisk

  render() {
    return (
      <div style={layoutStyle}>
        <Header />
        <Setting
          towers={this.state.towers}
          removeDisk={this.removeDisk}
          insertDisk={this.insertDisk}
        />
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
