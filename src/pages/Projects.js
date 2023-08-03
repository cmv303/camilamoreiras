import React from "react";
import "../styles/Projects.css";
import ProjectCard from "../components/ProjectCard.js";
import { Grid, Container, Typography } from "@mui/material";

// import images
import lyrically from "../Assets/lyrically.png";
import portfolio from "../Assets/portfolio1.png";
import employeeTracker from "../Assets/employee_tracker.png";
import dailyClawsmic from "../Assets/Daily_Clawsmic.png";
import calmCalendar from "../Assets/calmCalendar.png";
import techBlog from "../Assets/techBlog.png";

export default function Projects() {
  // project object array
  const projectData = [
    {
      title: `The Daily Clawsmic`,
      image: dailyClawsmic,
      description: `Full-stack group project that interacts with various NASA APIs to showcase a picture of the day, provide many Mars Rover (Curiosity) photos, and supplies articles and links for NASA-developed technologies, available for commercial and non-commercial use. There, you'll find information such as titles, summaries, categories, and patent information.
      Contributed primarily to the CSS and readme.`,
      repoLink: `https://github.com/cmv303/Clawesome-Crew`,
      webLink: `https://cosmic-gallary.herokuapp.com/`,
    },
    {
      title: `Lyrically`,
      image: lyrically,
      description: `Full-stack group project uses two third-party APIs to access the track names, lyrics, and videos of your favorite songs.
    Contributed to the filters, readme, and html
    \n\n
    `,
      repoLink: `https://github.com/cmv303/SuperGroupOne`,
      webLink: `https://catalystix.github.io/SuperGroupOne/`,
    },
    {
      title: `Employee Tracker`,
      image: employeeTracker,
      description: `Command-line application that allows users to view various components of the employee_tracker database, such as departments, roles, and employees. Users can also choose to add a department, role, or employee, or update any existing information.
  Demo video available through link
  \n`,
      repoLink: `https://github.com/cmv303/Employee_Tracker`,
      webLink: `https://drive.google.com/file/d/1r_5NjOQ6hT6QMHWgTK0L4u6RhNuheZws/view`,
    },
    {
      title: `First Portfolio Project`,
      image: portfolio,
      description: `Static web application to show where I started in my coding journey, November 2022.
      \n\n\n\n
      \n`,
      repoLink: `https://github.com/cmv303/Camila-is-learning-code`,
      webLink: `https://cmv303.github.io/Camila-is-learning-code/`,
    },
    {
      title: `Calm Calendar`,
      image: calmCalendar,
      description: `Calendar web application built with a team of 5 that allows new and returning users to add and view events as a calendar layout. Events are stored using cookies.
  
  Contributed primarily in idea formation, team management, mvc architecture, documentation\n`,
      repoLink: `https://github.com/cmv303/calm-calendar-app`,
      webLink: `https://calm-calendar-app.herokuapp.com/`,
    },
    {
      title: `Tech Blog`,
      image: techBlog,
      description: `This is a simple blog format website that has the capacity to create, edit, and delete your own posts, while also allowing you to comment on the posts of others.\n
      \n\n`,
      repoLink: `https://github.com/cmv303/TechBlog`,
      webLink: `https://tech-blog1.herokuapp.com/`,
    },
  ];

  const renderDescription = (description) => {
    return description.split("\n").map((lineBreak, index) => (
      // Map each paragraph to a Typography component
      <Typography key={index} variant="body2" color="text.secondary" lineBreak>
        <br></br>
        {lineBreak}
      </Typography>
    ));
  };

  return (
    <Container id="projectsPage">
      <h1 style={{ marginBottom: "20px", marginTop: "20px" }}>
        Selected Projects
      </h1>
      <Grid container spacing={4}>
        {/* map through each project so they can all be displayed in a grid */}
        {projectData.map((singleProject) => (
          <Grid item xs={12} sm={6} md={4} key={singleProject.title}>
            <ProjectCard
              title={singleProject.title}
              image={singleProject.image}
              description={renderDescription(singleProject.description)}
              repoLink={singleProject.repoLink}
              webLink={singleProject.webLink}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
