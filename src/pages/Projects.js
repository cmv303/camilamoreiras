import React from "react";
import { Grid, Container, CardMedia } from "@mui/material";

export default function Projects() {
  return (
    <Container className="section" id="projectsPage">
      <h1>Projects Page</h1>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <div className="project1">
            Lyrically
            <a
              href="https://catalystix.github.io/SuperGroupOne/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <CardMedia
                component="img"
                className="project1"
                image="./Assets/lyrically.png"
                height="194"
                title="Lyrically"
              ></CardMedia>
            </a>
            This group project uses two third-party APIs to access the track
            names, lyrics, and videos of your favorite songs.
            <br></br>
            <br></br>
            Contributed to the filters, readme, and html
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <div className="project2">
            Calm Calendar
            <a href="#" target="_blank" rel="noreferrer noopener">
              <CardMedia
                component="img"
                className="project2"
                image="./Assets/calm_calendar.png"
                height="194"
                title="Calm Calendar"
              ></CardMedia>
            </a>
            No need for anxiety, just organization
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <div className="project3">
            <CardMedia
              component="img"
              className="project3"
              image="./Assets/favicon.ico"
              height="194"
              title="Employee Tracker"
            ></CardMedia>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <div className="project4">
            First Portfolio Project
            <a
              href="https://cmv303.github.io/Camila-is-learning-code/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <CardMedia
                component="img"
                className="project1"
                image="./Assets/portfolio1.png"
                height="194"
                title="firstPortfolio"
              ></CardMedia>
            </a>
            Where I started, 6 months ago, in my coding journey
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
