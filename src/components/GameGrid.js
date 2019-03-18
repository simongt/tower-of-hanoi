import React, { Component } from 'react';
import Disk from "./Disk"

export class GameGrid extends Component {
  render() {
    const rodStyle = {
      background: `
        linear-gradient(
          to bottom,
          rgba(255, 204, 0, 1),
          rgba(241, 91, 49, 0.9),
          rgba(252,40, 93, 0.75),
          rgba(0, 0, 0, 0.4)
        )
      `,
      border: "solid black",
      borderWidth: "1px 1px 0px 1px",
      borderRadius: "1.5rem 1.5rem 0 0"
    };
    const rodGapStyle = {
      borderBottom: "1px solid black",
    };
    const { disks, rods } = this.props;
    return (
      <div style={{ 
        display: "grid",
        justifyItems: "stretch",
        alignItems: "end",
      }}>
        {/* three rods have fixed width of 3rem */}
        <div
          style={{
            zIndex: "1",
            display: "grid",
            gridTemplateColumns: "repeat(3, auto 3rem) auto",
            textAlign: "center",
            height: "30vh",
            justifyItems: "stretch"
          }}
        >
          {/* emmet shorthand: .item.item${$}*7 */}
          <div style={rodGapStyle} />
          <div style={rodStyle} />
          <div style={rodGapStyle} />
          <div style={rodStyle} />
          <div style={rodGapStyle} />
          <div style={rodStyle} />
          <div style={rodGapStyle} />
        </div>
        {/* {disks.map(disk => (
          <Disk disk={disk} />
        ))} */}
      </div>
    );
  }
}

export default GameGrid;
