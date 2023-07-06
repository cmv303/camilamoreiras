import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder.js";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "../styles/NavTabs.css";

function NavTabs({ currentPage, handlePageChange }) {
  const handleChange = (event, newValue) => {
    handlePageChange(newValue);
  };

  // !start: toggle button doesn't seem to be working. I've commented it out for now
  const [expandNavTabs, setExpandNavTabs] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavTabs(false);
  }, [location]);

  return (
    <header className="HeaderContainer">
      <AppBar
        className="Nav_tabs"
        position="static"
        sx={{ background: "#282c34" }}
      >
        {/* <div className="ToggleButton" id={expandNavTabs ? "open" : "close"}>
          <button
            onClick={() => {
              setExpandNavTabs((prev) => !prev);
            }}
          >
            <ReorderIcon sx={{ cursor: "pointer" }} />
          </button>
        </div> */}
        {/* //!end: part that is not working */}

        <Tabs value={currentPage} onChange={handleChange}>
          <Link to="/" className="Nav_link">
            <Tab
              label="Home"
              value="Home"
              sx={{ "& .MuiTab-wrapper": { color: "white" } }}
            />
          </Link>

          <Link to="/projects" className="Nav_link">
            <Tab
              label="Projects"
              value="Projects"
              sx={{ "& .MuiTab-wrapper": { color: "white" } }}
            />
          </Link>

          <Link to="/newsletter" className="Nav_link">
            <Tab
              label="Newsletter"
              value="Newsletter"
              sx={{ "& .MuiTab-wrapper": { color: "white" } }}
            />
          </Link>

          <Link to="/contact" className="Nav_link">
            <Tab
              label="Contact"
              value="Contact"
              sx={{ "& .MuiTab-wrapper": { color: "white" } }}
            />
          </Link>
        </Tabs>
      </AppBar>
    </header>
  );
}

export default NavTabs;
