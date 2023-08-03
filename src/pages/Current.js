import React from "react";
import "../styles/Current.css";
import { Typography, Box, CardContent, Card, CardMedia } from "@mui/material";
import RecetasSiteMap from "../Assets/Recetas_siteMap.png";

export default function Current() {
  return (
    <div className="Current" id="CurrentProjPage" elevation={3}>
      <CardContent>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          className="Current_heading"
        >
          Camila Moreiras
        </Typography>
      </CardContent>

      <Box className="Current_content">
        <Typography variant="body1" className="BodyText">
          If you're interested in knowing what project I'm currently tackling
          (other than refactoring this portfolio site), you've come to the right
          place!
        </Typography>
      </Box>

      <Typography component="h2" variant="h5">
        Family Cookbook
      </Typography>
      <Typography component="h3" variant="h6">
        <br></br>
        July 19, 2023 - Very preliminary site map
      </Typography>

      <Card sx={{ borderRadius: "8px", height: "25%", width: "25%" }}>
        <CardMedia
          component="img"
          image={RecetasSiteMap}
          height="194"
          sx={{
            borderRadius: "3px",
            width: "100%",
            height: "100%",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        />
      </Card>
    </div>
  );
}
