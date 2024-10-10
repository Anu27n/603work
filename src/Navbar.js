import { useEffect, useState } from "react";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
  return (
    <header
      className={`header ${hidden ? "hide" : ""} ${
        isScrolled ? "navbar-scrolled" : "navbar-transparent"
      }`}
      data-header
    >
      <div className="top_navbar_style">
        <p style={{ fontWeight: "bolder", marginTop: "10px" }}>
          Makhija Arcade, 35th Rd, Khar, Khar West, Mumbai, Maharashtra 400052
        </p>

        <p style={{ fontWeight: "bolder", marginTop: "10px" }}>
          Daily : 8.00 am to 10.00 pm
        </p>
        <p style={{ fontWeight: "bolder", marginTop: "10px" }}>
          +91 9136036603
        </p>
        <a
          href="mailto:sales@603thecoworkingspace.com"
          className="topbar-item link"
        >
          <div className="icon">
            <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
          </div>
          <span
            className="span"
            style={{ fontWeight: "bolder", marginTop: "10px" }}
          >
            sales@603thecoworkingspace.com
          </span>
        </a>
      </div>
      <div className="container">
        <a href="#" className="logo">
          <img
            src="./images/603logo (1).avif"
            width="160"
            height="50"
            alt="Grilli - Home"
            class="logohover"
          />
        </a>
        <nav className="navbar" data-navbar>
          <button
            className="close-btn"
            aria-label="close menu"
            data-nav-toggler
          >
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>
          <a href="#" className="logo">
            <img
              src="./images/603logo (1).avif"
              width="160"
              height="50"
              alt="Grilli - Home"
            />
          </a>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link hover-underline active">
                <div className="separator"></div>
                <span className="span">Home</span>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#spaces" className="navbar-link hover-underline">
                <div className="separator"></div>
                <span className="span">Spaces</span>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link hover-underline">
                <div className="separator"></div>
                <span className="span">About Us</span>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link hover-underline">
                <div className="separator"></div>
                <span className="span">Images</span>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link hover-underline">
                <div className="separator"></div>
                <span className="span">Contact</span>
              </a>
            </li>
          </ul>
          <div className="text-center">
            <p className="headline-1 navbar-title">Visit Us</p>
            <address className="body-4">
              Restaurant St, Delicious City, <br />
              London 9578, UK
            </address>
            <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>
            <a href="mailto:booking@grilli.com" className="body-4 sidebar-link">
              booking@grilli.com
            </a>
            <div className="separator"></div>
            <p className="contact-label">Booking Request</p>
            <a
              href="tel:+88123123456"
              className="body-1 contact-number hover-underline"
            >
              +88-123-123456
            </a>
          </div>
        </nav>
        <a href="indexLayout.html" className="btn btn-secondary">
          <span className="text text-1">Make Your Space</span>
          <span className="text text-2" aria-hidden="true">
            Make Your Space
          </span>
        </a>
        <button
          className="nav-open-btn"
          aria-label="open menu"
          data-nav-toggler
        >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>
        <div className="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
}

export default Navbar;
