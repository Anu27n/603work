import Home from './Home';
import ScrollIndicator from './ScrollIndicator';
import PreloaderContainer from './PreloaderContainer.js'; // For Preloader
import './style.css';
import './script.js';
import './preloader.js';
import './TopBar.js';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Modal from './Modal';
import Services from "./Pages/Services/Services";
import Blogs from "./Pages/Blogs/Blogs";
import BlogPost from "./Pages/Blogs/BlogPost";
import Contact from './Pages/Contact/Contact';



function App() {
  return (
    <div className="App">
      <ScrollIndicator />
      <PreloaderContainer>
          <Router>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/blogs" element={<Blogs />} />
                  <Route path="/blogs/:id" element={<BlogPost />} />
                  <Route path="/contact" element={<Contact />} />

              </Routes>
          </Router>
      </PreloaderContainer>
    </div>
  );
}

export default App;