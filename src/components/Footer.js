import React from "react";
import "../styles/Footer.css";
import { LinkedIn, GitHub, Email, Description } from "@mui/icons-material";
import { Grid } from "@mui/material";

export default function Footer() {
  return (
    <footer className="Footer">
        <Grid
          container columns={{ xs: 12, sm: 12, md:4 }}
          justifyContent="center"
          alignItems="center"
          className="SocialMedia"
        >
          <Grid item xs={12} sm={12} md={4}>
            <a
              href="https://www.linkedin.com/in/camilamoreiras/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn sx={{ fontSize: 12 }} />
            </a>

            <a href="https://github.com/cmv303" target="_blank" rel="noreferrer">
              <GitHub sx={{ fontSize: 12 }} />
            </a>

            <a href="mailto: moreiras.camila@gmail.com">
              <Email sx={{ fontSize: 12 }} />
            </a>

            <a
              href="https://drive.google.com/file/d/1ZMQsyM34LhK9cOBds317fbK_JKvJWOco/view"
              target="_blank"
              rel="noreferrer"
            >
              <Description sx={{ fontSize: 12 }} />
            </a>
            <p>
              Site built using React with Material UI
              <br></br>
              &copy; 2023 Camila Moreiras
            </p>
          </Grid>
        </Grid>
    </footer>
  );
}
