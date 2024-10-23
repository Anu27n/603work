import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home.js";
import BlogPost from "../Pages/Blogs/BlogPost";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import Image from "../Pages/Photos/Photos.js";
import Services from "../Pages/Services/Services";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogPost />} />
      <Route path="/photos" element={<Image />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/book-a-space" element={"This Page is under construction"} />
    </Routes>
  );
};

export default AppRoutes;