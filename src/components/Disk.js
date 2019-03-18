import React, { Component } from 'react';

class Disk extends Component {
  render() {
    const { id } = this.props.disk;
    // widths are in rem: rod is 3, add 1rem to each side per disk id
    const width = id + 3; // disk widths: 5rem, 7, 9... 21rem
    return (
      <div
        style={{
          zIndex: "2",
          width: `${width}rem`,
          marginLeft: `-${id/2}rem`,
          height: "3vh",
          borderRadius: "1em",
          border: "1px solid black",
          boxShadow: "inset 0 0 2px 0 black",
          // green range: 200 (yellow-er) to 36 (red-er), increment for 9 disks
          background: `rgba(244, ${200 - id * ((200 - 36) / 9)}, 36, 1)`,
        }}
      />
    );
  }
}

export default Disk;
