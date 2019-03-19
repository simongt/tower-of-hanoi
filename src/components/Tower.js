import React, { Component } from 'react'
import Disk from "./Disk";

class Tower extends Component {
  handleDroppedDisk = (id) => {
    console.log("Tower --> handleDroppedDisk(" + id + ")");
  }
  render() {
    const towerStyle = {
      background: `
        linear-gradient(
          to bottom,
          rgba(255, 204, 0, 1),
          rgba(241, 91, 49, 0.9),
          rgba(252,40, 93, 0.75),
          rgba(0, 0, 0, 0.4)
        )
      `,
      border: "solid black",
      borderWidth: "1px 1px 0px 1px",
      borderRadius: "0.75rem 0.75rem 0 0",
      display: "grid",
      alignItems: "end",
      alignContent: "end",
    };
    const { disks } = this.props;
    return (
      <div style={towerStyle}>
        {disks.map(disk => (
          <Disk 
            key={disk.id} 
            disk={disk} 
            handleDrop={(id) => this.handleDroppedDisk(id)}
          />
        ))}
      </div>
    )
  }
}

export default Tower;
