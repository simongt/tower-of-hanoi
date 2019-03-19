import React from "react";

const Header = props => (
  <header
    style={{
      paddingBottom: "0.5em",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      background: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))",
      borderBottom: "1px solid black"
    }}
  >
    <h1
      style={{
        color: "rgba(229, 172, 0, 1)",
        fontSize: "5rem", // TO-DO: responsivize
        textTransform: "uppercase",
        fontWeight: "100",
        textShadow: "4px 4px 2px rgba(0, 0, 0, 1)"
      }}
    >
      Towers of Hanoi
    </h1>
  </header>
);

export default Header;
