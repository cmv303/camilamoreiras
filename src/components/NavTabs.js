import React from "react";
import { Link } from "react-router-dom";
import "../NavTabs.css";

import ReorderIcon from "@mui/icons-material/Reorder.js";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function NavTabs({ currentPage, handlePageChange }) {
  console.log("Nav tabs here?");
  const handleChange = (event, newValue) => {
    handlePageChange(newValue);
  };

  return (
    <AppBar position="static" color="secondary">
      <ReorderIcon sx={{ cursor: "pointer" }} />
      <Tabs value={currentPage} onChange={handleChange}>
        <Link to="/">
          
          <Tab label="Home" value="Home" />
        </Link>

        <Link to="/About">
          
          <Tab label="About" value="About" />
        </Link>

        <Tab label="Projects" value="Projects" />
        <Tab label="Contact" value="Contact" />
      </Tabs>
    </AppBar>
  );
}

export default NavTabs;
