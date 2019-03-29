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

  getTowerId = (diskId) => {}

  removeDisk = (diskId) => {
    console.log(diskId);
    const { towers } = this.state;
    let towerId;
    towers.forEach(tower => {
      tower.disks.forEach(disk => {
        if (disk.id === diskId) {
          towerId = tower.id;
          console.log(`Remove DISK ${diskId} from TOWER ${towerId}.`);
        }
      })
    });
    // this.setState(prevState => {
    //   prevState.towers = prevState.towers.map(tower => {
    //     console.log(`Searching TOWER ${tower.id}...`);
    //     return tower.disks.filter(disk => {
    //       console.log(`Checking DISK ${disk.id}`);
    //       if (disk.id === diskId) {
    //         console.log(`DISK found!`);
    //       }
    //       return disk.id !== diskId;
    //     });
    //   })
    //   return {
    //     towers: prevState.towers,
    //   }
    // })
  };
  
  render() {
    return (
      <div style={layoutStyle}>
        <Header />
        <Setting towers={this.state.towers} removeDisk={this.removeDisk} />
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
