import React, { Component } from 'react'
import { DropTarget } from "react-dnd";
import Disk from "./Disk";

// collecting method (to track the item being dragged)
const collect = (connect, monitor) => {
  console.log("DropTarget(Tower) --> collect");
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    diskDragged: monitor.getItem(),
  };
};

class Tower extends Component {
  render() {
    console.log("Tower -->  render");
    console.log("props: ");
    console.table(this.props);
    const {
      disks,
      dropDisk,
      connectDropTarget,
      hovered,
    } = this.props;
    const background = hovered
      ? `linear-gradient(
          to bottom,
          rgba(255, 204, 0, 1),
          rgba(241, 91, 49, 0.9),
          rgba(252,40, 93, 0.75),
          rgba(0, 0, 0, 0.4)
        )`
      : `linear-gradient(
          to bottom,
          rgba(241, 91, 49, 0.9),
          rgba(252,40, 93, 0.75),
          rgba(0, 0, 0, 0.4)
        )`;
    const towerStyle = {
      background: `${background}`,
      border: "solid black",
      borderWidth: "1px 1px 0px 1px",
      borderRadius: "0.75rem 0.75rem 0 0",
      display: "grid",
      alignItems: "end",
      alignContent: "end"
    };
    return connectDropTarget(
      <div style={towerStyle}>
        {disks.map(disk => (
          <Disk
            key={disk.id}
            disk={disk}
            dropDisk={(diskId, towerId) => dropDisk(diskId, towerId)}
          />
        ))}
      </div>
    );
  }
}

export default DropTarget("disk", {}, collect)(Tower);
