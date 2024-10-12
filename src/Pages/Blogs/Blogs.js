import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "../../Navbar";
import '../Services/Services.css';

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
                // setZooming(true);
            }, 500);
        }, 4800);

        return () => clearTimeout(zoomTimeout); // Cleanup timeout
    }, [currentImageIndex, images.length]);

    return (
        <>
            <Navbar />
            <div
                style={{
                    // height: "100vh",
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
                    <p className="section-subtitle label-2">
                        Our Blogs
                    </p>
                    <h2 className="headline-1 section-title title-box"
                      style={{marginBottom:"10rem"}}
                    >
                        Read Our Latest Blogs Here </h2>
                    <div className="grid-list card-box">
                        {blogs.map((blog) => (
                            <div key={blog.id}>
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
                    href="#top"
                    className="back-top-btn active"
                    aria-label="back to top"
                    data-back-top-btn
                    style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
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
        </>
    );
};

export default Blogs;