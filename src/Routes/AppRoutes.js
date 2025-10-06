import { Route, Routes } from "react-router-dom";
import BlogPost from "../Pages/Blogs/BlogPost.js";
import Blogs from "../Pages/Blogs/Blogs.js";
import Book from "../Pages/Book/book.js";
import Contact from "../Pages/Contact/Contact.js";
import Home from "../Pages/Home/Home.js";
import Image from "../Pages/Photos/Photos.js";
import Services from "../Pages/Services/Services.js";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogPost />} />
      <Route path="/photos" element={<Image />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/book-a-space" element={<Book />} />
    </Routes>
  );
};

export default AppRoutes;
