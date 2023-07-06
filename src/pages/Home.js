import React, { useState } from "react";
import Intro from "./Intro";
import {
  Grid,
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";

// import images
import profileImage from "../Assets/camila_moreiras.jpg";
import employeeTracker from "../Assets/employee_tracker.png";
import dailyClawsmic from "../Assets/Daily_Clawsmic.png";
import calmCalendar from "../Assets/calmCalendar.png";
import reactPortfolio from "../Assets/reactPortfolio.png";

export default function Home() {
  const featuredItems = [
    {
      title: "The Daily Clawsmic",
      description:
        "Full-stack group project that interacts with various NASA APIs...",
      image: dailyClawsmic,
      link: "https://cosmic-gallary.herokuapp.com/",
    },
    {
      title: "Employee Tracker",
      description:
        "Command-line application that allows users to view various components...",
      image: employeeTracker,
      link: "https://drive.google.com/file/d/1r_5NjOQ6hT6QMHWgTK0L4u6RhNuheZws/view",
    },

    {
      title: "Portfolio",
      description:
        "This portfolio you're seeing here! Built with React alongside Material UI to showcase my ongoing web dev projects",
      image: reactPortfolio,
      link: "https://cmv303.github.io/React-Portfolio2/",
    },

    {
      title: "Calm Calendar",
      description:
        "Calendar web application that allows new and returning users to add and view events as a calendar layout. Events are stored using cookies.",
      image: calmCalendar,
      link: "https://calm-calendar-app.herokuapp.com/",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? featuredItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === featuredItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentItem = featuredItems[activeIndex];

  return (
    <Container className="section" id="homePage" sx={{ marginTop: "20px" }}>
      {/* profile pic */}
      <CardMedia
        className="profileImage"
        component="img"
        src={profileImage}
        alt="Profile Image"
        sx={{
          height: "194px",
          width: "194px",
          borderRadius: "40%",
          margin: "0 auto",
        }}
      />
      {/* intro component added here */}
      <section style={{ marginTop: "20px", position: "relative" }}>
        <Grid container spacing={4} textAlign="center" justifyContent="center">
          <Intro />
        </Grid>
      </section>

      {/* featured project contents */}
      <h3 style={{ marginBottom: "20px" }} className="featured">
        Featured Projects
      </h3>
      <div style={{ position: "static", marginBottom: "20px" }}>
        {/* carousel */}
        <Grid container spacing={4} textAlign="center" justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: "8px", height: "100%", width: "100%" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {currentItem.title}
                </Typography>
                <a
                  href={currentItem.link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <CardMedia
                    component="img"
                    image={currentItem.image}
                    height="194"
                    width="194"
                    title={currentItem.title}
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
                  {currentItem.description}
                </Typography>
              </CardContent>
              {/* carousel buttons and their styling */}
              <CardActions
                style={{
                  justifyContent: "space-evenly",
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  onClick={handlePrev}
                  sx={{
                    backgroundColor: "#282c34",
                    color: "#f5f5f5",
                    marginRight: "5%",
                  }}
                >
                  Previous
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  onClick={handleNext}
                  sx={{
                    backgroundColor: "#282c34",
                    color: "#f5f5f5",
                    marginLeft: "5%",
                  }}
                >
                  Next
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
