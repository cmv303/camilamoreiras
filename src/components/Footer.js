import React from "react";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";
import { Grid } from "@mui/material";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        className="socialMedia"
      >
        <Grid item xs={12} sm={6} md={4}>
          <a href="https://www.linkedin.com/in/camilamoreiras/" target="_blank">
            <LinkedIn />
          </a>
          <a href="https://github.com/cmv303" target="_blank">
            <GitHub />
          </a>
          <a href="mailto: moreiras.camila@gmail.com">
            <Email />
          </a>
          <p> &copy; 2023 Camila Moreiras</p>
        </Grid>
      </Grid>
    </footer>
  );
}
