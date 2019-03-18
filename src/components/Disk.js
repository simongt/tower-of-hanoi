import React, { Component } from 'react';

class Disk extends Component {
  render() {
    const { id, label } = this.props.disk;
    // widths are in rem: rod is 3, add 1rem to each side per disk id
    const width = (2 * id) + 3; // disk widths: 5rem, 7, 9... 21rem
    return (
      <div
        style={{
          zIndex: "2",
          width: `${width}rem`,
          marginLeft: `-${id}rem`,
          height: "3vh",
          borderRadius: "1em",
          boxShadow: "inset 0 0 1rem 0.1rem black",
          // green range: 209 (yellow-er) to 66 (red-er), increment for 9 disks
          background: `rgba(244, ${209 - id * ((209 - 66) / 9)}, 66, 1)`,
        }}
      >
        {label}
      </div>
    );
  }
}

export default Disk;
