import React from "react";
import { Button } from "@mui/material";

export default function ProjectCardButtons({ repoLink, webLink }) {
  return (
    <div className="Project_button_wrapper">
      <Button
        variant="contained"
        href={repoLink}
        target="_blank"
        rel="noreferrer noopener"
        sx={{
          backgroundColor: "#282c34",
          color: "#f5f5f5",
        }}
      >
        Repository
      </Button>

      <Button
        variant="contained"
        href={webLink}
        target="_blank"
        rel="noreferrer noopener"
        sx={{
          backgroundColor: "#282c34",
          color: "#f5f5f5",
        }}
      >
        Site
      </Button>
    </div>
  );
}
