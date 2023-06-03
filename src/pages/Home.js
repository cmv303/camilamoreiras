import React, { useState } from "react";
import {
  Grid,
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button
} from "@mui/material";
import employeeTracker from "../Assets/employee_tracker.png";
import dailyClawsmic from "../Assets/Daily_Clawsmic.png";

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
      link:
        "https://drive.google.com/file/d/1r_5NjOQ6hT6QMHWgTK0L4u6RhNuheZws/view",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? featuredItems.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === featuredItems.length - 1 ? 0 : prevIndex + 1));
  };

  const currentItem = featuredItems[activeIndex];

  return (
    <Container className="section" id="homePage">
      <h1 style={{ marginBottom: "20px",  marginTop: "20px"  }} >Featured</h1>
      <div style={{ position: "relative" }}>
        <Grid container spacing={4} textAlign="center" justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: "8px", height: "100%" }}>
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
            </Card>
          </Grid>
        </Grid>
        <div 
          style={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            bottom: "10px",
            left: 0,
            right: 0,
            padding: "0 20px",
            boxSizing: "border-box"
          }}
        >
          <Button variant="contained" onClick={handlePrev} sx={{ backgroundColor: "#282c34", color: "#f5f5f5", marginRight: "25%" }}
>Previous</Button>
          <Button variant="contained" onClick={handleNext} sx={{ backgroundColor: "#282c34", color: "#f5f5f5", marginLeft: "25%" }}>Next</Button>
        </div>
      </div>
    </Container>
  );
}
