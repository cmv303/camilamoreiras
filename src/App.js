import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home.js";
import Current from "./pages/Current.js";
import Projects from "./pages/Projects.js";
import ContactPage from "./pages/ContactForm.js";
import NavTabs from "./components/NavTabs.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <NavTabs />
        <Routes>
          <Route path="/camilamoreiras" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/current" element={<Current />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
