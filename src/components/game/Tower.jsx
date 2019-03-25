import React, { Component } from "react";
import Layout from "../constants/Layout";
import Disk from "./Disk";
import { isValidDiskMove, moveDisk } from "../util/GamePlay";
import { DropTarget } from "react-dnd";
import ItemTypes from "../constants/ItemTypes";

// drop target spec that only handles the drop event
const towerTarget = {
  canDrop(props, monitor) {
    console.log("Detecting if DISK can be dropped to currently hovered TOWER.");
    return isValidDiskMove();
  },
  drop(props, monitor) {
    console.log("DISK is dropped.");
    moveDisk();
  },
  hover(props, monitor) {
    console.log("DropTarget(Tower) --> towerTarget --> hover");
  },
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  highlighted: !!monitor.canDrop(),
  hovered: !!monitor.isOver(),
  diskDragged: monitor.getItem(),
});

class Tower extends Component {
  render() {
    const { disks, connectDropTarget, hovered } = this.props;
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

    return connectDropTarget(
      <div style={towerStyle}>
        {disks.map(disk => <Disk key={disk.id} rank={disk.id} />)}
      </div>
    );
  }
}

export default DropTarget(ItemTypes.DISK, towerTarget, collect)(Tower);
