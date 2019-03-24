import React, { Component } from "react";

class Setting extends Component {
  render() {
    return (
      <div style={settingStyle}>
        <h2 style={{ fontSize: "10vmin" }}>{"Game goes here."}</h2>
      </div>
    );
  }
}

const settingStyle = {
  display: "grid",
  justifyContent: "center",
  alignContent: "center",
  justifyItems: "center",
  alignItems: "center",
  color: "white"
};

export default Setting;
