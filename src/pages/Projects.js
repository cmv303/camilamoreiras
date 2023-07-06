import React from "react";
import "../styles/Projects.css";
import {
  Grid,
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

// import images
import lyrically from "../Assets/lyrically.png";
import portfolio from "../Assets/portfolio1.png";
import employeeTracker from "../Assets/employee_tracker.png";
import dailyClawsmic from "../Assets/Daily_Clawsmic.png";
import calmCalendar from "../Assets/calmCalendar.png";
import techBlog from "../Assets/techBlog.png";

export default function Projects() {
  return (
    <Container className="Section" id="projectsPage">
      <h1 style={{ marginBottom: "20px", marginTop: "20px" }}>
        Selected Projects
      </h1>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderRadius: "8px", height: "100%", width: "100%" }}>
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
            </CardContent>
            <div className="Project_button_wrapper">
              <Button
                variant="contained"
                href="https://github.com/cmv303/Clawesome-Crew"
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
                href="https://cosmic-gallary.herokuapp.com/"
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
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderRadius: "8px", height: "100%", width: "100%" }}>
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
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </Typography>
            </CardContent>
            <div className="Project_button_wrapper">
              <Button
                variant="contained"
                href="https://github.com/cmv303/SuperGroupOne"
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
                href="https://catalystix.github.io/SuperGroupOne/"
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
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderRadius: "8px", height: "100%", width: "100%" }}>
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
                <br></br>
                <br></br>
                <br></br>
              </Typography>
            </CardContent>
            <div className="Project_button_wrapper">
              <Button
                variant="contained"
                href="https://github.com/cmv303/Employee_Tracker"
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
                href="https://drive.google.com/file/d/1r_5NjOQ6hT6QMHWgTK0L4u6RhNuheZws/view"
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
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderRadius: "8px", height: "100%", width: "100%" }}>
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
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </Typography>
            </CardContent>
            <div className="Project_button_wrapper">
              <Button
                variant="contained"
                href="https://github.com/cmv303/Camila-is-learning-code"
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
                href="https://cmv303.github.io/Camila-is-learning-code/"
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
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderRadius: "8px", height: "100%", width: "100%" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Calm Calendar
              </Typography>
              <CardMedia
                component="img"
                image={calmCalendar}
                height="194"
                title="calmCalendar"
                sx={{
                  borderRadius: "3px",
                  width: "100%",
                  height: "100%",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              />
              <Typography variant="body2" color="text.secondary">
                Calendar web application built with a team of 5 that allows new
                and returning users to add and view events as a calendar layout.
                Events are stored using cookies.
                <br></br>
                <br></br>
                Contributed primarily in idea formation, team management, mvc
                architecture, documentation
                <br></br>
              </Typography>
            </CardContent>
            <div className="Project_button_wrapper">
              <Button
                variant="contained"
                href="https://github.com/cmv303/calm-calendar-app"
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
                href="https://calm-calendar-app.herokuapp.com/"
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
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderRadius: "8px", height: "100%", width: "100%" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Tech Blog
              </Typography>
              <CardMedia
                component="img"
                image={techBlog}
                height="194"
                title="techBlog"
                sx={{
                  borderRadius: "3px",
                  width: "100%",
                  height: "100%",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              />
              <Typography variant="body2" color="text.secondary">
                This is a simple blog format website that has the capacity to
                create, edit, and delete your own posts, while also allowing you
                to comment on the posts of others.
                <br></br>
                <br></br>
                <br></br>
              </Typography>
            </CardContent>
            <div className="Project_button_wrapper">
              <Button
                variant="contained"
                href="https://github.com/cmv303/TechBlog"
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
                href="https://tech-blog1.herokuapp.com/"
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
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
