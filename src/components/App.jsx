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
          tower.disks.unshift({ id: diskId }); // insert to top of disk stack
        }
        return tower;
      }), // end map towers
    })); // end setState
  } // end insertDisk

  isValidMove = (diskId, towerId) => {
    if (this.state.towers[towerId - 1].disks.length === 0) {
      console.log("Valid move. Disk may be dropped into an empty tower.");
      return true;
    } else if (diskId < this.state.towers[towerId - 1].disks[0].id) {
      console.log("Valid move. Disk may be dropped onto smaller disk.");
      return true;
    } else if (diskId > this.state.towers[towerId - 1].disks[0].id) {
      console.log(
        "Invalid move. Disk may only be dropped on larger disk or empty tower."
      );
      return false;
    } else if (diskId === this.state.towers[towerId - 1].disks[0].id) {
      console.log(
        "Invalid move. Disk may not be dropped on same tower that it came from."
      );
      return false;
    }
    console.log("Invalid move."); // shouldn't be possible
    return false;
  } // end isValidMove

  render() {
    return (
      <div style={layoutStyle}>
        <Header />
        <Setting
          towers={this.state.towers}
          removeDisk={this.removeDisk}
          insertDisk={this.insertDisk}
          isValidMove={this.isValidMove}
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
