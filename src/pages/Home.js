import React from "react";
import { Grid, Container, Card, CardContent, CardMedia, Typography } from "@mui/material";
import lyrically from "../Assets/lyrically.png"
import portfolio from "../Assets/portfolio1.png"
import employeeTracker from "../Assets/employee_tracker.png";
import dailyClawsmic from "../Assets/Daily_Clawsmic.png"

export default function Home() {
  return (
    <Container className="section" id="homePage">
      <h1>Home Page</h1>
      <Grid container spacing={4} textAlign="center" justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderRadius: "8px", height: "100%" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                The Daily Clawsmic
              </Typography>
              <a
                href="https://cosmic-gallary.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
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
              </a>
              <Typography variant="body2" color="text.secondary">
              Full-stack group project that interacts with various NASA APIs to showcase a picture of the day, provide many Mars Rover (Curiosity) photos, and supplies articles and links for NASA-developed technologies, available for commercial and non-commercial use. There, you'll find information such as titles, summaries, categories, and patent information.
                <br />
                <br />
                Contributed primarily to the CSS and readme.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ borderRadius: "8px", height: "100%" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Employee Tracker
              </Typography>
              <a
                href="https://drive.google.com/file/d/1r_5NjOQ6hT6QMHWgTK0L4u6RhNuheZws/view"
                target="_blank"
                rel="noreferrer noopener"
              >
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
              </a>
              <Typography variant="body2" color="text.secondary">
              Command-line application that allows users to view various components of the employee_tracker database, such as departments, roles, and employees. Users can also choose to add a department, role, or employee, or update any existing information.
                <br />
                <br />
              Demo video available through link
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
      </Grid>
    </Container>
  );
}