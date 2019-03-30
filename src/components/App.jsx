import React, { Component } from "react";
import Setting from "./game/Setting";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Layout from "./constants/Layout";

class App extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      numMovesPlayed: 0,
      towers: [
        { id: 1, disks: [] },
        { id: 2, disks: [] },
        { id: 3, disks: [] }
      ],
    };
  } // end constructor

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
  } // end componentDidMount

  componentDidUpdate = () => {
    const { numMovesPlayed } = this.state;
    if (this.gameIsWon()) {
      console.log(`Game has been won in ${numMovesPlayed} moves.`);
    }
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
      numMovesPlayed: prevState.numMovesPlayed + 1,
    })); // end setState
  } // end insertDisk

  isValidMove = (diskId, towerId) => {
    const { towers } = this.state;
    // consider all disk move circumstances
    if (towers[towerId - 1].disks.length === 0) {
      // Valid move: disk may be dropped into an empty tower.
      return true;
    } else if (diskId < towers[towerId - 1].disks[0].id) {
      // Valid move: disk may be dropped onto smaller disk.
      return true;
    } else if (diskId > towers[towerId - 1].disks[0].id) {
      // Invalid move: disk may only be dropped on larger disk or empty tower.
      return false;
    } else if (diskId === towers[towerId - 1].disks[0].id) {
      // Invalid move: disk may not be dropped on same tower that it came from.
      return false;
    }
  } // end isValidMove

  gameIsWon = () => {
    // check for winning stack sequence on either tower 2 or 3
    const { towers } = this.state;
    return (
      Layout.NUM_DISKS >= 3 && (
        towers[1].disks.length === Layout.NUM_DISKS ||
        towers[2].disks.length === Layout.NUM_DISKS
      )
    );
  } // end gameIsWon

  render() {
    return (
      <div style={layoutStyle}>
        <Header />
        <Setting
          towers={this.state.towers}
          numMovesPlayed={this.state.numMovesPlayed}
          removeDisk={this.removeDisk}
          insertDisk={this.insertDisk}
          isValidMove={this.isValidMove}
          gameIsWon={this.gameIsWon}
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
