import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from './Home';
import ScrollIndicator from './ScrollIndicator';
import PreloaderContainer from './PreloaderContainer'; // For Preloader
import './style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollIndicator />
        <PreloaderContainer>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </PreloaderContainer>
      </div>
    </Router>
  );
}

export default App;