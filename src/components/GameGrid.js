import React from 'react';
import Tower from "./Tower";

const GameGrid = props => {
  const { towers, dropDisk } = props;
  console.log("GameGrid --> render");
  console.log("props: ");
  console.table(props);
  return (
    <div
      style={{
        display: "grid",
        justifyItems: "stretch",
        alignItems: "end",
        minWidth: "960px",
        minHeight: "540px"
        // TO-DO: make width and height adaptive for smaller screen sizes
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
        <Tower
          key={towers[0].id}
          disks={towers[0].stack}
          dropDisk={
            (diskId, towerId) => dropDisk(diskId, towerId)
          }
        />
        <div style={{ borderBottom: "1px solid black" }} />
        <Tower
          key={towers[1].id}
          disks={towers[1].stack}
          dropDisk={
            (diskId, towerId) => dropDisk(diskId, towerId)
          }
        />
        <div style={{ borderBottom: "1px solid black" }} />
        <Tower
          key={towers[2].id}
          disks={towers[2].stack}
          dropDisk={
            (diskId, towerId) => dropDisk(diskId, towerId)
          }
        />
        <div style={{ borderBottom: "1px solid black" }} />
      </div>
    </div>
  );
}

export default GameGrid;
