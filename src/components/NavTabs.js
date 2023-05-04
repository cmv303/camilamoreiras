import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

  // !start: doesn't seem to be working
  const [expandNavTabs, setExpandNavTabs] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavTabs(false);
  }, [location]);

  return (
    <AppBar className="nav-tabs" position="static" color="secondary">
      <div className="toggleButton" id={expandNavTabs ? "open" : "close"}>
        <button onClick={() => {setExpandNavTabs((prev) => !prev)}}>
          <ReorderIcon sx={{ cursor: "pointer" }} />
        </button>
      </div>
  {/* //!end: part that is not working */}

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
