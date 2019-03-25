import React, { Component } from "react";
import Tower from "./Tower";
import Layout from "../constants/Layout";
import withDragDropContext from "../../lib/withDragDropContext";

const FloorSpace = () => (
  <div style={{ borderBottom: "1px solid black" }} />
);

class Setting extends Component {
  render() {
    const {
      towers,
    } = this.props;
    let i = 0; // tower index
    return (
      <div style={settingStyle}>
        <FloorSpace />
        <Tower key={towers[i].id} disks={towers[i++].disks} />
        <FloorSpace />
        <Tower key={towers[i].id} disks={towers[i++].disks} />
        <FloorSpace />
        <Tower key={towers[i].id} disks={towers[i++].disks} />
        <FloorSpace />
      </div>
    );
  }
}

// render style for three towers
const settingStyle = {
  height: `calc(${Layout.SETTING_HEIGHT})`,
  display: "grid",
  gridTemplateColumns: `
    1fr 
    ${Layout.TOWER_WIDTH}
    1.75fr
    ${Layout.TOWER_WIDTH}
    1.75fr
    ${Layout.TOWER_WIDTH}
    1fr
  `,
  justifyContent: "stretch",
  alignItems: "end",
  overflow: "hidden",
};

export default withDragDropContext(Setting);
