import React, { Component } from 'react';
import Tower from "./Tower";

export class GameGrid extends Component {
  render() {
    const { towers } = this.props;
    return (
      <div
        style={{
          display: "grid",
          justifyItems: "stretch",
          alignItems: "end",
          minWidth: "960px", // TO-DO: responsivize
          minHeight: "540px", // TO-DO: responsivize

        }}
      >
        {/* three towers with a fixed width of 3rem */}
        <div
          style={{
            zIndex: "1",
            display: "grid",
            gridTemplateColumns: "repeat(3, auto 2rem) auto",
            textAlign: "center",
            height: "33vh",
            justifyItems: "stretch"
          }}
        >
          <div style={{ borderBottom: "1px solid black" }} />
          <Tower key={towers[0].id} disks={towers[0].stack} />
          <div style={{ borderBottom: "1px solid black" }} />
          <Tower key={towers[1].id} disks={towers[1].stack} />
          <div style={{ borderBottom: "1px solid black" }} />
          <Tower key={towers[2].id} disks={towers[2].stack} />
          <div style={{ borderBottom: "1px solid black" }} />
        </div>
      </div>
    );
  }
}

export default GameGrid;
