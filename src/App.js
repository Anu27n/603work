import React from 'react';
import Home from './Home';
import './style.css';
import './script.js'; 
import './preloader.js'
import './TopBar.js'
import ScrollIndicator from './ScrollIndicator';
import PreloaderContainer from './PreloaderContainer.js'; // For Preloader
import './style.css'; 
import './script.js'; 
import './TopBar.js';


function App() {
  return (
    <div className="App">
      <ScrollIndicator />
      <Home />
      <PreloaderContainer>
        <Home />
      </PreloaderContainer>
    </div>
  );
}

export default App;