import React from "react";
import { Typography, Box } from "@mui/material";
import "../styles/Intro.css";

export default function Intro() {
  return (
    <div className="Intro" id="IntroPage">
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        className="Current_heading"
      >
        Camila Moreiras
      </Typography>

      <div className="Intro" id="introOnHomePage">
        <Box className="Intro_content">
          <h4 className="Tldr">
            Filmmaker, recovering academic, and full stack web developer.
          </h4>
          <Typography variant="body1" className="BodyText_intro">
            Since writing my first lines of code in November 2022, I've been
            constantly in awe as to how similar the process is to both
            filmmaking and teaching in a university setting. Filmmaking,
            researching, and educating are nothing if not continual reworkings.
            They naturally follow agile methodologies: all require feedback,
            problem-solving, individual and team-oriented focus, and making sure
            the big picture doesn't get lost in the details.
            <br></br>
            <br></br>
            Pivoting and finding new ways to explain abstract ideas are my
            strong suits, and I'm thrilled to explore how best to expand this
            skill set within the tech sector.
          </Typography>
        </Box>
      </div>
    </div>
  );
}
