import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "../Helper/Modal"; // Import the modal component

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isHidden = prevScrollPos < currentScrollPos;
      setHidden(isHidden);
      setPrevScrollPos(currentScrollPos);
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // for scrolling smoothly to each relevant section in home page
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to toggle the modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const isHomeOpen = location.pathname === "/";
  const isServicesOpen = location.pathname === "/services";
  const isBlogsOpen = location.pathname === "/blogs";
  const isImgsOpen = location.pathname === "/photos";

  return (
    <>
      <header className={`header ${hidden ? "hide" : ""} ${isScrolled ? "navbar-scrolled" : "navbar-transparent"}`} data-header>
        <div className="top_navbar_style container">
          <p>Makhija Arcade, 35th Rd, Khar, Khar West, Mumbai, Maharashtra 400052</p>
          <p>Daily: 8.00 am to 10.00 pm</p>
          <p>+91 9136036603</p>
          <a href="mailto:sales@603thecoworkingspace.com" className="topbar-item link">
            <div className="icon">
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
            </div>
            <span className="span">sales@603thecoworkingspace.com</span>
          </a>
        </div>
        <div className="container">
          <a href="/" className="logo">
            <img src="./images/603logo (1).avif" width="160" height="50" alt="Grilli - Home" className="logohover" />
          </a>

          <nav className={`navbar ${isMenuOpen ? "active" : ""}`} data-navbar>
            <button className="close-btn" aria-label="close menu" onClick={toggleMenu}>
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
            <a href="#" className="logo">
              <img src="./images/603logo (1).avif" width="160" height="50" alt="Grilli - Home" />
            </a>
            <ul className="navbar-list ">
              <li className="navbar-item">
                <a href="/" className={`navbar-link hover-underline ${isHomeOpen ? "active" : ""}`}>
                  <div className="separator"></div>
                  <span className="span">Home</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="/#spaces" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">Spaces</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="/#about" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">About Us</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="/services" className={`navbar-link hover-underline ${isServicesOpen ? "active" : ""}`}>
                  <div className="separator "></div>
                  <span className="span">Our Services</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="/blogs" className={`navbar-link hover-underline ${isBlogsOpen ? "active" : ""}`}>
                  <div className="separator"></div>
                  <span className="span">Our Blogs</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="/photos" className={`navbar-link hover-underline ${isImgsOpen ? "active" : ""}`}>
                  <div className="separator"></div>
                  <span className="span">Images</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="/Contact" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">Contact</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="/#" className="navbar-link hover-underline" onClick={toggleModal}>
                  <div className="separator"></div>
                  <span className="span">Login</span>
                </a>
              </li>
            </ul>
            <div className="text-center">
              <p className="headline-1 navbar-title">Visit Us</p>
              <address className="body-4">
                Restaurant St, Delicious City, <br />
                London 9578, UK
              </address>
              <p className="body-4 navbar-text">Open: 9.30 am - 2.30 pm</p>
              <a href="mailto:booking@grilli.com" className="body-4 sidebar-link">
                booking@grilli.com
              </a>
              <div className="separator"></div>
              <p className="contact-label">Booking Request</p>
              <a href="tel:+88123123456" className="body-1 contact-number hover-underline">
                +88-123-123456
              </a>
            </div>
          </nav>
          <a href="https://603-layout.vercel.app/" className="btn btn-secondary">
            <span className="text text-1">Make Your Space</span>
            <span className="text text-2" aria-hidden="true">
              Make Your Space
            </span>
          </a>
          <button className="nav-open-btn" aria-label="open menu" onClick={toggleMenu}>
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>
          <div className={`overlay ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu} data-nav-toggler data-overlay></div>
        </div>
      </header>

      {/* Modal Component */}
      <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  );
}

export default Navbar;
