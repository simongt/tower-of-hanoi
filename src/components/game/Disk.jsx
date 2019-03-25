import React, { Component } from 'react'
import Layout from "../constants/Layout";

class Disk extends Component {
  render() {
    const {
      rank
    } = this.props;
    // hue of green: divide spectrum from yellow (200) to red (36)
    const green = 200 - rank * ((200 - 36) / Layout.NUM_DISKS);
    const diskStyle = {
      height: `calc(
        ${Layout.DISK_HEIGHT} * ${Layout.MAX_TOTAL_DISKS} / ${Layout.NUM_DISKS}
      )`,
      width: `calc((${Layout.TOWER_WIDTH} + ${rank}vw ) * 2)`,
      transform: `translateX(calc(
        (-${Layout.TOWER_WIDTH}) / 2 - ${rank}vw))`,
      borderRadius: `calc((${Layout.DISK_HEIGHT}) / 1.5)`,
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
