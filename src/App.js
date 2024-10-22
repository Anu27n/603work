import { BrowserRouter as Router } from "react-router-dom";
import PreloaderContainer from "./Components/PreloaderContainer.js";
import ScrollIndicator from "./Components/ScrollIndicator.js";
import AppRoutes from "./Routes/AppRoutes.js";
import "./styles/style.css";
import "./Components/preloader.js";
import "./Script/script.js";
import "./Components/TopBar.js";

function App() {
  return (
    <div className="App">
      <ScrollIndicator />
      <PreloaderContainer>
        <Router>
          <AppRoutes />
        </Router>
      </PreloaderContainer>
    </div>
  );
}

export default App;
