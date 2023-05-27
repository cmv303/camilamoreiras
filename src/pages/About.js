import React from "react";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import profileImage from "../Assets/camila_moreiras.jpg";

export default function About() {
  return (
    <Card className="section" id="aboutPage">
      <CardContent>
        <Typography variant="h4" component="h1" gutterBottom>
          About Page
        </Typography>
        <Box sx={{ width: "50%", margin: "0 auto" }}>
          <Typography variant="body1" style={{ marginBottom: 20 }}>
            Full-stack software engineer with a background in documentary filmmaking and teaching
          </Typography>
        </Box>
        <CardMedia
          component="img"
          src={profileImage}
          alt="Profile"
          style={{ height: 194, width: 194, borderRadius: "40%", margin: "0 auto" }}
        />
      </CardContent>
    </Card>
  );
}