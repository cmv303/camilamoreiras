import React from "react";
import "../styles/Newsletter.css";
import { Typography, Box, CardContent } from "@mui/material";

export default function Newsletter() {
  return (
    <div className="Newsletter" id="NewsletterPage" elevation={3}>
      <CardContent>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          className="Newsletter_heading"
        >
          Camila Moreiras
        </Typography>
      </CardContent>

      <Box className="Newsletter_content">
        <Typography variant="body1" className="Body_text">
          Currently in the process of building out a dynamic newsletter. Please
          check back shortly!
        </Typography>
      </Box>

      <Typography>
        <br></br>
        If you'd like to check out my linkedin, github, or resume, make sure to
        click on the icons in the footer
      </Typography>
    </div>
  );
}
