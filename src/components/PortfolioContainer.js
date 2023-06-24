import React, { useState } from "react";
import NavTabs from "./NavTabs.js";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Projects from "../pages/Projects.js";
import ContactPage from "../pages/ContactForm.js";
import Footer from "./Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");
  const renderPage = () => {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    );
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <React.Fragment>
      <main className="bodyContainer">
        <nav>
          <NavTabs
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </nav>
        <div className="bodyText">{renderPage()}</div>
      </main>
      <Footer />
    </React.Fragment>
  );
}
