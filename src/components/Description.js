import React from "react";

const Description = props => (
  <div
    style={{
      display: "",
      fontSize: "1.25em",
      textAlign: "justify",
      margin: "0.5em 0.5em",
      padding: "1em 1em",
      background: "rgba(0, 0, 0, 0.1)",
      borderRadius: "0.25em",
      boxShadow: "1px 1px 1px rgba(0, 0, 0, 1)"
    }}
  >
    <p style={{ marginBottom: "0.5em" }}>
      {
        "Objective: Move (drag and drop) the disks onto either the second or third rod, such that all the disks are stacked in ascending order, thus making a conical shape." 
      }
    </p>
    <div>
      <p style={{ marginBottom: "0.25em" }}>
        {
          "The objective of the puzzle is to move the stack to another rod following these simple rules:"
        }
      </p>
      <ul style={{ marginLeft: "1.5em", paddingLeft: "0" }}>
        <li>{"Only one disk can be moved at a time."}</li>
        <li>
          {
            "Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod."
          }
        </li>
        <li>{"No larger disk may be placed on top of a smaller disk."}</li>
      </ul>
    </div>
  </div>
);

export default Description;
