import React, { useState } from 'react';
import NavTabs from './NavTabs.js';
import Home from '../pages/Home.js';
import About from '../pages/About.js';
import Projects from '../pages/Projects.js';
import Contact from '../pages/Contact.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    // if (currentPage === 'Home') {
    //   return <Home />;
    // }
    // if (currentPage === 'About') {
    //   return <About />;
    // }
    // if (currentPage === 'Projects') {
    //   return <Projects />;
    // }
    // return <Contact />;

    return (
      
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/About" element={<About /> } />
            <Route path="/Projects" element={ <Projects /> }/>
            <Route path="/Contact" element={ <Contact /> }/>
        </Routes>
      
      )


  };


  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
