import React, { Component } from "react";
import Layout from "../constants/Layout";
import Disk from "./Disk";
import Overlay from "../util/Overlay";
// import { isValidDiskMove, moveDisk } from "../util/GamePlay";
import { DropTarget } from "react-dnd";
import ItemTypes from "../constants/ItemTypes";

// drop target spec that only handles the drop event
const towerTarget = {
  canDrop({ disks }, monitor) {
    // console.log("Detect if DISK can be validly dropped to TOWER.");
    // const rank = monitor.getItem().rank;
    // return isValidDiskMove(rank, disks);
    return true; // assumes true for now
  },
  drop({ disks, removeDisk }, monitor) {
    console.log("Drop DISK");
    const rank = monitor.getItem().rank;
    removeDisk(rank);
    disks.push({ id: rank });
    // moveDisk(rank, disks);
  },
  // hover(props, monitor) {
  //   console.log("DISK is hovering TOWER.");
  // }
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  canDrop: monitor.canDrop(),
  isOver: monitor.isOver(),
  diskDragged: monitor.getItem(),
  monitor: monitor,
});

class Tower extends Component {
  render() {
    const { disks, connectDropTarget, isOver, canDrop, diskDragged } = this.props;
    const background = isOver
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
    const borderRadius = `calc((${Layout.TOWER_WIDTH}) / 4)`;
    const towerStyle = {
      position: "relative",
      width: "100%",
      height: `calc(${Layout.TOWER_HEIGHT})`,
      borderStyle: "solid",
      borderWidth: "1px 1px 0px 1px",
      borderRadius: `${borderRadius} ${borderRadius} 0 0`,
      display: "grid",
      alignItems: "end",
      alignContent: "end",
      background: background,
    };
    
    return connectDropTarget(
      <div style={towerStyle}>
        {/* while dragging disk over tower, render overlay */}
        {isOver && canDrop && <Overlay rank={diskDragged.rank} />}
        {disks.map(disk => <Disk key={disk.id} rank={disk.id} />)}
        {/* {diskDragged && console.log(monitor)} */}
      </div>
    );
  }
}

export default DropTarget(ItemTypes.DISK, towerTarget, collect)(Tower);
