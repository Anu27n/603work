<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import MakeYourSpace from "./MakeYourSpace";
import Home from './Home';
import ScrollIndicator from './ScrollIndicator';
import PreloaderContainer from './PreloaderContainer'; // For Preloader

import './style.css';
import './script.js'; 
=======
import Home from './Home';
import ScrollIndicator from './ScrollIndicator';
import PreloaderContainer from './PreloaderContainer.js'; // For Preloader
import './style.css';
import './script.js';
>>>>>>> a6950484b0bf1fde89acd194824dd4c626168aba
import './preloader.js';
import './TopBar.js';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollIndicator />
        <PreloaderContainer>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/make-your-space" element={<MakeYourSpace />} />
          </Routes>
        </PreloaderContainer>
      </div>
    </Router>
  );
}

export default App;
