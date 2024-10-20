import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import BlogPost from "./Pages/Blogs/BlogPost";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Image from "./Pages/Photos/Photos.js";
import Services from "./Pages/Services/Services";
import "./preloader.js";
import PreloaderContainer from "./PreloaderContainer.js"; // For Preloader
import "./script.js";
import ScrollIndicator from "./ScrollIndicator";
import "./style.css";
import "./TopBar.js";

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
            <Route path="/photos" element={<Image />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/book-a-space"
              element={"This Page is under construction"}
            />
          </Routes>
        </Router>
      </PreloaderContainer>
    </div>
  );
}

export default App;
