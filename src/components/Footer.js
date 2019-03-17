import React from 'react';

const Footer = props => (
  <footer style={{ 
    background: "rgba(0, 0, 0, 0.2)",
    padding: "0.5em 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  }}>
    <p style={{ fontSize: "1em" }}>
      {"Developed by "}
      <a
        href="https://github.com/simongt/towers-of-hanoi"
        target="_blank"
        rel="noopener noreferrer"
      >
        {"Simon G. Tsegay"}
      </a>
    </p>
  </footer>
);

export default Footer;
