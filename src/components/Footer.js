import React from 'react';

const Footer = props => (
  <footer
    style={{
      paddingTop: "0.5em",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      background: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8))"
    }}
  >
    <p style={{ fontSize: "1em", textTransform: "uppercase" }}>
      {"Developed by "}
      <a
        href="https://github.com/simongt/towers-of-hanoi"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "rgba(241, 91, 49, 1)",
          textDecoration: "none",
          fontWeight: "700",
          textShadow: "1.5px 1.5px 0px black"
        }}
      >
        {"Simon G. Tsegay"}
      </a>
    </p>
  </footer>
);

export default Footer;
