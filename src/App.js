import Home from './Home';
import ScrollIndicator from './ScrollIndicator';
import PreloaderContainer from './PreloaderContainer.js'; // For Preloader
import './style.css';
import './script.js';
import './preloader.js';
import './TopBar.js';


function App() {
  return (
    <div className="App">
      <ScrollIndicator />
      <PreloaderContainer>
        <Home />
      </PreloaderContainer>
    </div>
  );
}

export default App;