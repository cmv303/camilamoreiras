import React from "react";
import { LinkedIn } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <LinkedIn /> <GitHub />
      </div>
      <p> &copy; 2023 Camila Moreiras</p>
    </footer>
  );
}
