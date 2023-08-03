import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "../styles/NavTabs.css";

function NavTabs() {
  return (
    <header className="HeaderContainer">
      <AppBar
        className="Nav_tabs"
        position="static"
        sx={{ background: "#282c34" }}
      >
        <Tabs>
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

          <Link to="/current" className="Nav_link">
            <Tab
              label="Current"
              value="Current"
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
