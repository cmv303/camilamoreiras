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
      <div className="toggleButton">
        <button>
          <ReorderIcon />
        </button>
      </div>
      <Tabs value={currentPage} onChange={handleChange}>
        <Link to="/">
          <Tab label="Home" value="Home" />
        </Link>

        <Link to="/About">
          <Tab label="About" value="About" />
        </Link>

        <Link to="/Projects">
          <Tab label="Projects" value="Projects" />
        </Link>

        <Link to="/Contact">
          <Tab label="Contact" value="Contact" />
        </Link>
      </Tabs>
    </AppBar>
  );
}

export default NavTabs;
