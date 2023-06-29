import React from "react";
import { Typography, Box, CardContent, CardMedia } from "@mui/material";
import profileImage from "../Assets/camila_moreiras.jpg";
import "../styles/About.css";

export default function About() {
  return (
    <div className="About" id="aboutPage" elevation={3}>
      <CardContent>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          className="about-heading"
        >
          Camila Moreiras
        </Typography>
      </CardContent>
      

      <Box className="About-content">
        <Typography variant="body1" className="body-text">
          Full stack software engineer with a background in documentary filmmaking and teaching.
        </Typography>
      </Box>

      <CardMedia
        className="profileImage"
        component="img"
        src={profileImage}
        alt="Profile Image"
      />

      <Typography>
        <br></br>
      If you'd like to check out my linkedin, github, or resume, make sure to click on the icons in the footer
      </Typography>
    </div>
  );
}
