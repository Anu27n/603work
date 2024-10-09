import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import AboutUs from './About-Us'; 
import './style.css'; // Ensure the path is correct
import './script.js'; 
import './preloader.js'
import './TopBar.js'


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  </Router>
  );
}

export default App;