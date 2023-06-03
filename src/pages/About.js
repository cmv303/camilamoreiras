import React from "react";
import { Typography, Box, CardMedia } from "@mui/material";
import profileImage from "../Assets/camila_moreiras.jpg";
import "../styles/About.css";

export default function About() {
  return (
    <div className="About" id="aboutPage">
      <Typography variant="h4" component="h1" gutterBottom className="about-heading">
        Camila Moreiras
      </Typography>
      
      <Box className="About-content">
        <Typography variant="body1" className="body-text">
          Full-stack software engineer with a background in documentary filmmaking and teaching.
        </Typography>
      </Box>

      <CardMedia
        className="profileImage"
        component="img"
        src={profileImage}
        alt="Profile Image"
      />
    </div>
  );
}
