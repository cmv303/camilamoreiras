import React from "react";
import { LinkedIn } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="socialMedia">
      <a href="https://www.linkedin.com/in/camila-moreiras-phd-14baa526b/" target="_blank">
          <LinkedIn />
        </a>
        <a href="https://github.com/cmv303" target="_blank">
          <GitHub />
        </a>
        <a href="mailto: moreiras.camila@gmail.com">
          <Email />
        </a>
      </div>
      <p> &copy; 2023 Camila Moreiras</p>
    </footer>
  );
}
