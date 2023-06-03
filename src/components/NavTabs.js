import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavTabs.css";

import ReorderIcon from "@mui/icons-material/Reorder.js";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function NavTabs({ currentPage, handlePageChange }) {
  const handleChange = (event, newValue) => {
    handlePageChange(newValue);
  };

  // !start: doesn't seem to be working
  const [expandNavTabs, setExpandNavTabs] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavTabs(false);
  }, [location]);

  return (
    <header className="header-container">
      <AppBar className="nav-tabs" position="static" sx={{background: "#282c34"}}>
        <div className="toggleButton" id={expandNavTabs ? "open" : "close"}>
          <button
            onClick={() => {
              setExpandNavTabs((prev) => !prev);
            }}
          >
            <ReorderIcon sx={{ cursor: "pointer" }} />
          </button>
        </div>
        {/* //!end: part that is not working */}

        <Tabs value={currentPage} onChange={handleChange}>
          <Link to="/" className="nav-link">
            <Tab label="Home" value="Home" sx={{ "& .MuiTab-wrapper": {color: "white"} }} />
          </Link>

          <Link to="/Projects" className="nav-link">
            <Tab label="Projects" value="Projects" sx={{ "& .MuiTab-wrapper": {color: "white"} }} />
          </Link>

          <Link to="/About" className="nav-link">
            <Tab label="About" value="About" sx={{ "& .MuiTab-wrapper": {color: "white"} }} />
          </Link>

          <Link to="/Contact" className="nav-link">
            <Tab label="Contact" value="Contact" sx={{ "& .MuiTab-wrapper": {color: "white"} }} />
          </Link>
        </Tabs>
      </AppBar>
    </header>
  );
}

export default NavTabs;
