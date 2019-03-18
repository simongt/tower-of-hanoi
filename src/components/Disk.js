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
          height: "1rem",
          boxShadow: "inset 0 0 0.5rem 1px black"
        }}
      >
        {label}
      </div>
    )
  }
}

export default Disk;
