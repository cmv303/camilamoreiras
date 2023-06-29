import React from "react";
import { LinkedIn, GitHub, Email, Description } from "@mui/icons-material";
import { Grid } from "@mui/material";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer" >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        className="socialMedia"
      >
        <Grid item xs={4} sm={6} md={12}>

          <a href="https://www.linkedin.com/in/camilamoreiras/" target="_blank" rel="noreferrer">
            <LinkedIn sx={{ fontSize: 18 }}/>
          </a>

          <a href="https://github.com/cmv303" target="_blank" rel="noreferrer">
            <GitHub sx={{ fontSize: 18 }}/>
          </a>

          <a href="mailto: moreiras.camila@gmail.com">
            <Email sx={{ fontSize: 18 }}/>
          </a>

          <a href="https://drive.google.com/file/d/1ZMQsyM34LhK9cOBds317fbK_JKvJWOco/view" target="_blank" rel="noreferrer">
            <Description sx={{ fontSize: 18 }}/>
          </a>
          <p> Site built using React with Material UI 
            <br></br>
            &copy; 2023 Camila Moreiras
            </p>
        </Grid>
      </Grid>
    </footer>
  );
}
