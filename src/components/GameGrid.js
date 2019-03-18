import React, { Component } from 'react';
import Tower from "./Tower";

export class GameGrid extends Component {
  render() {
    const { rods } = this.props;
    console.log(rods);
    
    return (
      <div
        style={{
          display: "grid",
          justifyItems: "stretch",
          alignItems: "end"
        }}
      >
        {/* three rods have fixed width of 3rem */}
        <div
          style={{
            zIndex: "1",
            display: "grid",
            gridTemplateColumns: "repeat(3, auto 3rem) auto",
            textAlign: "center",
            height: "33vh",
            justifyItems: "stretch",
          }}
        >
          {/* {rods.map(rod => (
            <Tower key={rod.id} disks={rod.stack} />
          ))} */}
          {/* emmet shorthand: .item.item${$}*7 */}
          <div style={{ borderBottom: "1px solid black" }} />
          <Tower key={rods[0].id} disks={rods[0].stack} />
          <div style={{ borderBottom: "1px solid black" }} />
          <Tower key={rods[1].id} disks={rods[1].stack} />
          <div style={{ borderBottom: "1px solid black" }} />
          <Tower key={rods[2].id} disks={rods[2].stack} />
          <div style={{ borderBottom: "1px solid black" }} />
        </div>
      </div>
    );
  }
}

export default GameGrid;
