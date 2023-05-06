import React, { useState } from "react";
import NavTabs from "./NavTabs.js";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Projects from "../pages/Projects.js";
import Contact from "../pages/Contact.js";
import Footer from "./Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");
  const renderPage = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    );
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <section>
      <nav>
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        <div className="bodyText">{renderPage()}</div>
      </nav>
      <Footer />
    </section>
  );
}
