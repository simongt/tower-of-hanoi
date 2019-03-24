import React, { Component } from "react";
import Tower from "./Tower";
import Layout from "../constants/Layout";

class Setting extends Component {
  render() {
    const {
      towers
    } = this.props;
    let i = 0;
    return (
      <div style={settingStyle}>
        <div style={{ borderBottom: "1px solid black" }} />
        <Tower key={towers[i].id} disks={towers[i++].disks} />
        <div style={{ borderBottom: "1px solid black" }} />
        <Tower key={towers[i].id} disks={towers[i++].disks} />
        <div style={{ borderBottom: "1px solid black" }} />
        <Tower key={towers[i].id} disks={towers[i++].disks} />
        <div style={{ borderBottom: "1px solid black" }} />
      </div>
    );
  }
}

// three towers
const settingStyle = {
  height: `calc(${Layout.SETTING_HEIGHT})`,
  display: "grid",
  gridTemplateColumns: `
    1fr 
    ${Layout.TOWER_WIDTH}
    1.5fr
    ${Layout.TOWER_WIDTH}
    1.5fr
    ${Layout.TOWER_WIDTH}
    1fr
  `,
  justifyContent: "stretch",
  alignItems: "end",
};

export default Setting;
