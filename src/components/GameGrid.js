import React, { Component } from 'react'

export class GameGrid extends Component {
  render() {
    const rodStyle = {
      background: `
        linear-gradient(
          to top,
          rgba(0, 0, 0, 0.4),
          rgba(252,40, 93, 0.75),
          rgba(241, 91, 49, 0.9),
          rgba(255, 204, 0, 1)
        )
      `,
      border: "1px solid rgba(0, 0, 0, 0.9)",
      borderBottom: "transparent",
      borderRadius: "1.5rem 1.5rem 0 0",
    };
    const rodGapStyle = {
      borderBottom: "1px solid black",
    };
    return (
      <div style={{ 
        display: "grid",
        justifyItems: "stretch",
        alignItems: "end",
      }}>
        {/* three rods have fixed width of 3rem */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, auto 3rem) auto",
            textAlign: "center",
            height: "25vh",
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
      </div>
    );
  }
}

export default GameGrid;
