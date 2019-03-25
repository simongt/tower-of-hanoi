import React, { Component } from "react";
import Layout from "../constants/Layout";
import Disk from "./Disk";

class Tower extends Component {
  render() {
    const {
      disks,
    } = this.props;
    return (
      <div style={towerStyle}>
        {disks.map(disk => <Disk key={disk.id} rank={disk.id} />)}
      </div>
    )
  }
}

const background = `
  linear-gradient(
    to bottom,
    rgba(241, 91, 49, 0.9),
    rgba(252,40, 93, 0.75),
    rgba(0, 0, 0, 0.4)
  )
`;

const borderRadius = `calc((${Layout.TOWER_WIDTH}) / 4)`;

const towerStyle = {
  height: `calc(${Layout.TOWER_HEIGHT})`,
  borderStyle: "solid",
  borderWidth: "1px 1px 0px 1px",
  borderRadius: `${borderRadius} ${borderRadius} 0 0`,
  background: background,
  display: "grid",
  alignItems: "end",
  alignContent: "end"
};

export default Tower;
