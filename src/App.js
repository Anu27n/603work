import React from 'react';
import Home from './Home';
import './style.css';
import './script.js'; 
import './preloader.js'
import './TopBar.js'
import ScrollIndicator from './ScrollIndicator';

function App() {
  return (
    <div className="App">
      <ScrollIndicator />
      <Home />
    </div>
  );
}

export default App;