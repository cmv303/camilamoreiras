import React from "react";
import { LinkedIn } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="socialMedia">
        <LinkedIn /> <GitHub /> <Email />
      </div>
      <p> &copy; 2023 Camila Moreiras</p>
    </footer>
  );
}
