import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import facebookIcon from "../../images/facebook.svg"
import instagramIcon from "../../images/instagram.svg"
import twitterIcon from "../../images/twitter.svg"
import youtubeIcon from "../../images/youtube.svg"
import mapsIcon from "../../images/maps.svg"
import Navbar from "../../Components/Navbar";
import '../Services/Services.css';
import '../Services/Blogs.animation.css';

const images = [
    "../../images/sunmill-loc_batcheditor_fotor (1).avif",
    "../../images/heroLocation (1).avif",
    "../../images/sunshine-loc.webp",
];

const blogs = [
    {
        id: 1,
        title: "Trends in Corporate Workspace Design",
        image: ".../../images/sunmill-loc_batcheditor_fotor (1).avif",
    },
    {
        id: 2,
        title: "Maximizing Space Efficiency in Offices",
        image: ".../../images/heroLocation (1).avif",
    },
    {
        id: 3,
        title: "The Psychology of Workspace Design",
        image: "../../images/sunshine-loc.webp",
    },
    {
        id: 4,
        title: "How Interior Design Can Transform Workspaces",
        image: "../../images/heroLocation (1).avif",
    },
    {
        id: 5,
        title: "How Interior Design Can Transform Workspaces",
        image: "../../images/sunshine-loc.webp",
    },
    {
        id: 6,
        title: "Creating a Productive Work Environment",
        image: "../../images/sunmill-loc_batcheditor_fotor (1).avif",
    },
];

const Blogs = () => {

    const navigate = useNavigate();
    const [hoveredCard, setHoveredCard] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);

    const handleCardClick = (id) => {
        navigate(`/blogs/${id}`);
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [zooming, setZooming] = useState(true);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        const zoomTimeout = setTimeout(() => {
            setFadeIn(false);
            setTimeout(() => {
                let nextIndex = (currentImageIndex + 1) >= images.length ? 0 : currentImageIndex + 1;
                setCurrentImageIndex(nextIndex);
                setFadeIn(true);
            }, 500);
        }, 4800);

        return () => clearTimeout(zoomTimeout);
    }, [currentImageIndex, images.length]);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Navbar />
            <div
                className="hero-container"
                style={{
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <h1 className="body-2 heroText">
                    Read Our Blogs
                </h1>
                <img
                    src={images[currentImageIndex]}
                    alt="hero-image"
                    className={`serviceImg ${zooming ? "zoom" : ""} ${fadeIn ? "fade-in" : ""}`}
                    style={{
                        width: "100%",
                    }}
                    onAnimationEnd={() => setZooming(false)}
                />
            </div>

            <section
                id="spaces"
                className="section service bg-black-10 text-center"
                aria-label="service"
            >
                <div className="container">
                    <div className={`section-content-animated ${isVisible ? 'visible' : ''}`}>
                        <p className="section-subtitle label-2">
                            Our Blogs
                        </p>
                        <h2 className="headline-1 section-title title-box"
                          style={{marginBottom:"10rem"}}
                        >
                            Read Our Latest Blogs Here
                        </h2>
                    </div>
                    
                    <div className="grid-list card-box">
                        {blogs.map((blog, index) => (
                            <div 
                                key={blog.id} 
                                className="blog-card-wrapper"
                                onMouseEnter={() => setHoveredCard(blog.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="service-card">
                                    <a onClick={() => handleCardClick(blog.id)} className="has-before hover:shine">
                                        <figure
                                            className="card-banner img-holder"
                                            style={{ "--width": 285, "--height": 336 }}
                                        >
                                            <img
                                                src={blog.image}
                                                width="285"
                                                height="336"
                                                loading="lazy"
                                                alt={blog.title}
                                                className="img-cover"
                                            />
                                        </figure>
                                    </a>
                                    <div className="card-content">
                                        <h3 className="title-4 card-title">
                                            <a onClick={() => handleCardClick(blog.id)}>{blog.title}</a>
                                        </h3>
                                        <a onClick={() => handleCardClick(blog.id)} className="btn-text hover-underline label-2">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <a
                        onClick={scrollToTop}
                        className={`back-top-btn ${showBackToTop ? 'active' : ''}`}
                        aria-label="back to top"
                        data-back-top-btn
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textDecoration: "none",
                            cursor: "pointer",
                            opacity: showBackToTop ? 1 : 0,
                            visibility: showBackToTop ? 'visible' : 'hidden',
                        }}
                    >
                        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
                        <img
                            src="./images/Vector 2.png"
                            alt="Back to top"
                            className="caret-image"
                        />
                    </a>
                    <script src="./script.js"></script>
                    <script
                        type="module"
                        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
                    ></script>
                    <script
                        nomodule
                        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
                    ></script>
                </div>
            </section>

            <footer
                className="footer section has-bg-image text-center"
                style={{ position: "relative", overflow: "hidden" }}
            >
                <div
                    className="background-blur"
                    style={{
                        backgroundImage:
                            "url('./images/fae955e3-de29-4d6b-a41a-85563f86a931.avif')",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-top grid-list">
                            <div className="footer-brand has-before has-after">
                                <ul className="footer-list">
                                    <li>
                                        <a href="#" className="label-2 footer-link hover-underline">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="label-2 footer-link hover-underline">
                                            Menus
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="label-2 footer-link hover-underline">
                                            About Us
                                        </a>
                                    </li>
                                    <li></li>
                                    <li>
                                        <a href="#" className="label-2 footer-link hover-underline">
                                            Contact
                                        </a>
                                    </li>
                                </ul> 
                                <a href="#" className="logo">
                                    <img
                                        src="./images/603logo (1).avif"
                                        width="160"
                                        height="50"
                                        loading="lazy"
                                        alt="grilli home"
                                    />
                                </a>
                                <address className="body-4">
                                    Makhija Arcade, 35th Rd, Khar, Khar West, Mumbai, Maharashtra
                                    400052
                                </address>
                                <a
                                    href="mailto:booking@grilli.com"
                                    className="body-4 contact-link mail1"
                                >
                                    booking@grilli.com
                                </a>
                                <a href="tel:+88123123456" className="body-4 contact-link">
                                    Booking Request : +88-123-123456
                                </a>
                                <p className="body-4">Open : 09:00 am - 01:00 pm</p>
                                <div className="wrapper">
                                    <div className="separator"></div>
                                    <div className="separator"></div>
                                    <div className="separator"></div>
                                </div>
                                <p className="title-1">Get News & Offers</p>
                                <p className="label-1">
                                    Subscribe us & Get <span className="span">25% Off.</span>
                                </p>
                                <form action="" className="input-wrapper">
                                    <div className="icon-wrapper">
                                        <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                                        <input
                                            type="email"
                                            name="email_address"
                                            placeholder="Your email"
                                            autoComplete="off"
                                            className="input-field"
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-secondary">
                                        <span className="text text-1">Subscribe</span>
                                        <span className="text text-2" aria-hidden="true">
                                            Subscribe
                                        </span>
                                    </button>
                                </form>
                                <ul className="footer-list">
                                    <p className="title-1">Follow us on: </p>
                                    <li>
                                        <a href="https://www.facebook.com/" className="label-2 footer-link">
                                            <img className="img-height" src={facebookIcon} alt="Facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/603thecoworkingspace/" className="label-2 footer-link">
                                            <img className="img-height" src={instagramIcon} alt="Instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/603coworking" className="label-2 footer-link">
                                            <img className="img-height" src={twitterIcon} alt="Twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/" className="label-2 footer-link">
                                            <img className="img-height" src={youtubeIcon} alt="YouTube" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.google.com/maps" className="label-2 footer-link">
                                            <img className="img-height map" src={mapsIcon} alt="Maps" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p className="copyright">
                                &copy; 2024 . All Rights Reserved | Crafted by{" "}
                                <a
                                    href="603thecoworkingspace.com"
                                    target="_blank"
                                    className="link"
                                >
                                    603 The Coworking Space
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Blogs;