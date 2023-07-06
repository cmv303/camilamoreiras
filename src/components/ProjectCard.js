import React from "react";
import ProjectCardButtons from "./ProjectCardButtons";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function ProjectCard(props) {
  const { title, image, description, repoLink, webLink } = props;

  return (
    <Card sx={{ borderRadius: "8px", height: "100%", width: "100%" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <CardMedia
          component="img"
          image={image}
          height="194"
          title={title}
          sx={{
            borderRadius: "3px",
            width: "100%",
            height: "100%",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        />

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      <ProjectCardButtons repoLink={repoLink} webLink={webLink} />
    </Card>
  );
}
