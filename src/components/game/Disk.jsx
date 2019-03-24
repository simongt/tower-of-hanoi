import React, { Component } from 'react'
import Layout from "../constants/Layout";

class Disk extends Component {
  render() {
    const {
      rank
    } = this.props;
    // hue level: divide spectrum from yellow (200) to red (36)
    const green = 200 - rank * ((200 - 36) / 9);
    const diskStyle = {
      height: `calc(${Layout.DISK_HEIGHT})`,
      width: `calc((${Layout.TOWER_WIDTH} + ${rank}vw) * 2)`,
      transform: `translateX(calc((-${Layout.TOWER_WIDTH}) / 2 - ${rank}vw))`,
      borderRadius: `calc((${Layout.DISK_HEIGHT}) / 6)`,
      border: "1px solid black",
      boxShadow: "inset 0 0 2px 0 black",
      background: `rgba(244, ${green}, 36, 1)`
    };
    return (
      <div style={diskStyle} />
    )
  }
}

export default Disk;
