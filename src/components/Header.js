import React from "react";

const Header = props => (
  <header
    style={{
      padding: "2em 0 0.5em 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      background: "rgba(0, 0, 0, 0.2)"
    }}
  >
    <h1 style={{ fontSize: "5em" }}>Towers of Hanoi</h1>
  </header>
);

export default Header;
