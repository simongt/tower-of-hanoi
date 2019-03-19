import React from 'react';
import { DragSource } from "react-dnd";

const diskSource = {
  beginDrag(props) {
    console.log("Disk --> beginDrag(props)");
    console.log(props);
    return props.disk;
  },
  endDrag(props, monitor, component) { 
    console.log("Disk --> endDrag(props)");
    console.log(props);
    console.log(monitor);
    console.log(component);
    return props.handleDrop(props.disk.id); 
  },
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
});

const Disk = props => {
  const {
    // isDragging, 
    connectDragSource, 
    // disk 
    } = props;
  const { id } = props.disk;
  // widths are in rem: tower is 2, add 1rem to each side per disk id
  const width = id + 2; // disk widths: 5rem, 7, 9... 21rem
  const green = 200 - id * ((200 - 36) / 9);
  return connectDragSource(
    <div
      style={{
        zIndex: "2",
        width: `${width}rem`,
        marginLeft: `calc(-${id/2}rem - 1px)`,
        height: "3vh",
        borderRadius: "1em",
        border: "1px solid black",
        boxShadow: "inset 0 0 2px 0 black",
        // green range: 200 (yellow-er) to 36 (red-er), increment for 9 disks
        background: `rgba(244, ${green}, 36, 1)`,
      }}
    />
  );
}

// Required Parameters
// type: A string, or an ES6 symbol, or a function (that returns either a string or ES6 symbol given the component's props). Only the drop targets registered for the same type will react to the items produced by this drag source.
// spec: A plain object with a few allowed methods on it, describes how the drag source reacts to the drag-and-drop events
// collect: The collecting function. It should return a plain object of the props to inject into your component. It receives two parameters: connect and monitor.

// Optional Parameters
// options

export default DragSource("this.props.disk.label", diskSource, collect)(Disk);
