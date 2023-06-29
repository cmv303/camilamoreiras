import React from "react";
import {
  Grid,
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import lyrically from "../Assets/lyrically.png";
import portfolio from "../Assets/portfolio1.png";
import employeeTracker from "../Assets/employee_tracker.png";
import dailyClawsmic from "../Assets/Daily_Clawsmic.png";

export default function Projects() {
  return (
    <Container className="section" id="projectsPage">
      <h1 style={{ marginBottom: "20px", marginTop: "20px" }}>
        Selected Projects
      </h1>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderRadius: "8px", height: "100%" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                The Daily Clawsmic
              </Typography>
              <CardMedia
                component="img"
                image={dailyClawsmic}
                height="194"
                title="DailyClawsmic"
                sx={{
                  borderRadius: "3px",
                  width: "100%",
                  height: "100%",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              />

              <Typography variant="body2" color="text.secondary">
                Full-stack group project that interacts with various NASA APIs
                to showcase a picture of the day, provide many Mars Rover
                (Curiosity) photos, and supplies articles and links for
                NASA-developed technologies, available for commercial and
                non-commercial use. There, you'll find information such as
                titles, summaries, categories, and patent information.
                <br />
                <br />
                Contributed primarily to the CSS and readme.
              </Typography>
              <Button
                variant="outlined"
                href="https://github.com/cmv303/Clawesome-Crew"
                target="_blank"
                rel="noreferrer noopener"
              >
                Repository
              </Button>

              <Button
                variant="outlined"
                href="https://cosmic-gallary.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Site
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderRadius: "8px", height: "100%" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Lyrically
              </Typography>
                <CardMedia
                  component="img"
                  image={lyrically}
                  height="194"
                  title="Lyrically"
                  sx={{
                    borderRadius: "3px",
                    width: "100%",
                    height: "100%",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                />
              <Typography variant="body2" color="text.secondary">
                Full-stack group project uses two third-party APIs to access the
                track names, lyrics, and videos of your favorite songs.
                <br />
                <br />
                Contributed to the filters, readme, and html
              </Typography>
              <Button
                variant="outlined"
                href="https://github.com/cmv303/SuperGroupOne"
                target="_blank"
                rel="noreferrer noopener"
              >
                Repository
              </Button>

              <Button
                variant="outlined"
                href="https://catalystix.github.io/SuperGroupOne/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Site
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ borderRadius: "8px", height: "100%" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Employee Tracker
              </Typography>
                <CardMedia
                  component="img"
                  image={employeeTracker}
                  height="194"
                  title="Employee Tracker"
                  sx={{
                    borderRadius: "3px",
                    width: "100%",
                    height: "100%",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                />
              <Typography variant="body2" color="text.secondary">
                Command-line application that allows users to view various
                components of the employee_tracker database, such as
                departments, roles, and employees. Users can also choose to add
                a department, role, or employee, or update any existing
                information.
                <br />
                <br />
                Demo video available through link
              </Typography>
              <Button
                variant="outlined"
                href="https://github.com/cmv303/Employee_Tracker"
                target="_blank"
                rel="noreferrer noopener"
              >
                Repository
              </Button>

              <Button
                variant="outlined"
                href="https://drive.google.com/file/d/1r_5NjOQ6hT6QMHWgTK0L4u6RhNuheZws/view"
                target="_blank"
                rel="noreferrer noopener"
              >
                Site
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ borderRadius: "8px", height: "100%" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                First Portfolio Project
              </Typography>
                <CardMedia
                  component="img"
                  image={portfolio}
                  height="194"
                  title="firstPortfolio"
                  sx={{
                    borderRadius: "3px",
                    width: "100%",
                    height: "100%",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                />
              <Typography variant="body2" color="text.secondary">
                Static web application to show where I started in my coding
                journey, November 2022.
              </Typography>
              <Button
                variant="outlined"
                href="https://github.com/cmv303/Camila-is-learning-code"
                target="_blank"
                rel="noreferrer noopener"
              >
                Repository
              </Button>

              <Button
                variant="outlined"
                href="https://cmv303.github.io/Camila-is-learning-code/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Site
              </Button>


            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
