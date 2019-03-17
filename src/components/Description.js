import React from "react";

const Description = props => (
  <div
    style={{
      display: "flex",
      flexFlow: "column nowrap",
      margin: "1em",
      padding: "1em 1em",
      background: "rgba(241, 91, 49, 0.8)",
      borderRadius: "0.25em",
      boxShadow: "0.75em 0.75em 0.5em 0.25em rgba(0, 0, 0, 0.4)"
    }}
  >
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h2 style={{ fontSize: "2em", marginBottom: "0.25em" }}>{"Objective"}</h2>
      <button 
        onClick={event => props.toggleModal(event)} 
        style={{ 
          background: "none", 
          outline: "none",
          padding: "0 2em",
          margin: "-2.25em -2.25em 0 0",
          fontWeight: "900"
        }}>
        {"X"}
      </button>
    </div>
    <p style={{ fontSize: "1em", textAlign: "justify" }}>
      {
        "Drag-and-drop the disks from the first rod onto the second and third rods, in such a way that the disks are eventually stacked in ascending order (on either the second or third rod), resembling a conical shape. Only the upper-most disk from any rod can be moved at a time to another rod. No larger disk may be placed on top of a smaller disk."
      }
    </p>
  </div>
);

export default Description;
