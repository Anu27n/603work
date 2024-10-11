import React, {useState, useEffect} from "react";
import Navbar from "../../Navbar";
import './Services.css';

const Services = () => {

    const images = [
        "../../images/sunmill-loc_batcheditor_fotor (1).avif",
        "../../images/heroLocation (1).avif",
        "../../images/sunshine-loc.webp",
    ];

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
            <Navbar/>
            <div
                style={{
                    // height: "100vh",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <h1 className="body-2 heroText">
                    Our Services
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
                {/*<a href="#" className="btn btn-primary slider-reveal">*/}
                {/*    <span className="text text-1">Make Your Space</span>*/}
                {/*    <span className="text text-2" aria-hidden="true">Make Your Space </span>*/}
                {/*</a>*/}
            </div>
            <section
                id="spaces"
                className="section service bg-black-10 text-center"
                aria-label="service"
            >
                <div className="container">
                    <p className="section-subtitle label-2">
                        Our Services
                    </p>
                    <h2 className="headline-1 section-title">We Offer Top Notch Services</h2>
                    <p className="section-text">
                        At 603 Interiors, we provide a comprehensive range of interior design services tailored to meet
                        the unique needs of corporate clients. From conceptualization to execution, we ensure that every
                        project is completed with precision and creativity.
                    </p>
                    <ul className="grid-list">
                        <li>
                            <div className="service-card">
                                <a href="#" className="has-before hover:shine">
                                    <figure
                                        className="card-banner img-holder"
                                        style={{"--width": 285, "--height": 336}}
                                    >
                                        <img
                                            src="./images/benjamin-child-0sT9YhNgSEs-unsplash.avif"
                                            width="285"
                                            height="336"
                                            loading="lazy"
                                            alt="Breakfast"
                                            className="img-cover"
                                        />
                                    </figure>
                                </a>
                                <div className="card-content">
                                    <h3 className="title-4 card-title">
                                        <a href="#">Meeting Room</a>
                                    </h3>
                                    <a href="#" className="btn-text hover-underline label-2">
                                        View Space
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="service-card">
                                <a href="#" className="has-before hover:shine">
                                    <figure
                                        className="card-banner img-holder"
                                        style={{"--width": 285, "--height": 336}}
                                    >
                                        <img
                                            src="./images/nastuh-abootalebi-JdcJn85xD2k-unsplash.avif"
                                            width="285"
                                            height="336"
                                            loading="lazy"
                                            alt="Appetizers"
                                            className="img-cover"
                                        />
                                    </figure>
                                </a>
                                <div className="card-content">
                                    <h3 className="title-4 card-title">
                                        <a href="#">Appetizers</a>
                                    </h3>
                                    <a href="#" className="btn-text hover-underline label-2">
                                        View Space
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="service-card">
                                <a href="#" className="has-before hover:shine">
                                    <figure
                                        className="card-banner img-holder"
                                        style={{"--width": 285, "--height": 336}}
                                    >
                                        <img
                                            src="./images/the-9th-coworking--MezGpfNBTo-unsplash.avif"
                                            width="285"
                                            height="336"
                                            loading="lazy"
                                            alt="Drinks"
                                            className="img-cover"
                                        />
                                    </figure>
                                </a>
                                <div className="card-content">
                                    <h3 className="title-4 card-title">
                                        <a href="#">Manager Desk</a>
                                    </h3>
                                    <a href="#" className="btn-text hover-underline label-2">
                                        View Space
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section
                className="section about"
                aria-labelledby="about-label"
                id="about"
            >
                <div className="container">
                    <div className="">
                        <p className="label-2 section-subtitle text-center" id="about-label">
                            Our Services
                        </p>
                        <h2 className="headline-1 section-title">
                            1. Workspace Design & Planning
                        </h2>
                        <ul className="bullets">
                            <li>Customized office layouts to optimize productivity and collaboration.</li>
                            <li>Space planning to maximize efficiency and meet specific business requirements.</li>
                            <li>Ergonomic designs that promote health and well-being.</li>

                        </ul>
                        <div className="contact-label text-center">Book Through Call</div>
                        <a
                            href="tel:+804001234567"
                            className="body-1 contact-number hover-underline"
                        >
                            +91 9136036603
                        </a>
                        <a href="#" className="btn btn-primary">
                            <span className="text text-1">Read More</span>
                            <span className="text text-2" aria-hidden="true">
                    Read More
                  </span>
                        </a>
                    </div>
                    <figure className="about-banner">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/Untitled20-202024-05-14T202107.959.jpg`}
                            width="570"
                            height="570"
                            loading="lazy"
                            alt="about banner"
                            className="w-100"
                            data-parallax-item
                            data-parallax-speed="1"
                        />
                        <div
                            className="abs-img abs-img-1 has-before"
                            data-parallax-item
                            data-parallax-speed="1.75"
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/images/image-4.jpg`}
                                width="285"
                                height="285"
                                loading="lazy"
                                alt=""
                                className="w-100"
                            />
                        </div>
                        <div className="abs-img abs-img-2 has-before">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/badge-2.png`}
                                width="133"
                                height="134"
                                loading="lazy"
                                alt=""
                            />
                        </div>
                    </figure>
                </div>
            </section>


            <section
                className="section about"
                aria-labelledby="about-label"
                id="about"
            >
                <div className="container ">
                    <figure className="about-banner">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/Untitled20-202024-05-14T202107.959.jpg`}
                            width="570"
                            height="570"
                            loading="lazy"
                            alt="about banner"
                            className="w-100"
                            data-parallax-item
                            data-parallax-speed="1"
                        />
                        <div
                            className="abs-img abs-img-1 has-before"
                            data-parallax-item
                            data-parallax-speed="1.75"
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/images/image-4.jpg`}
                                width="285"
                                height="285"
                                loading="lazy"
                                alt=""
                                className="w-100"
                            />
                        </div>
                        <div className="abs-img abs-img-2 has-before">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/badge-2.png`}
                                width="133"
                                height="134"
                                loading="lazy"
                                alt=""
                            />
                        </div>
                    </figure>
                    <div className="reverse">
                        <p className="label-2 section-subtitle text-center" id="about-label">
                            Our Services
                        </p>
                        <h2 className="headline-1 section-title">
                            2. Interior Decoration
                        </h2>
                        <ul className="bullets">
                            <li> Tailored decor solutions that reflect your brand identity.</li>
                            <li> Selection of furniture, fixtures, and finishes that align with your company’s vision.
                            </li>
                            <li>Integration of technology and modern design elements for a futuristic workspace.</li>
                        </ul>
                        <div className="contact-label text-center">Book Through Call</div>
                        <a href="tel:+804001234567" className="body-1 contact-number hover-underline">
                            +91 9136036603
                        </a>
                        <a href="#" className="btn btn-primary">
                            <span className="text text-1">Read More</span>
                            <span className="text text-2" aria-hidden="true">Read More</span>
                        </a>
                    </div>


                </div>
            </section>


            <section
                className="section about"
                aria-labelledby="about-label"
                id="about"
            >
                <div className="container">
                    <div className="">
                        <p className="label-2 section-subtitle text-center" id="about-label">
                            Our Services
                        </p>
                        <h2 className="headline-1 section-title">
                            3. Turnkey Projects
                        </h2>
                        <ul className="bullets">
                            <li>Complete project management from design to delivery.</li>
                            <li>Coordination with contractors, vendors, and suppliers to ensure timely execution.</li>
                            <li> Quality control and on-site supervision to maintain the highest standards.</li>
                        </ul>
                        <div className="contact-label text-center">Book Through Call</div>
                        <a
                            href="tel:+804001234567"
                            className="body-1 contact-number hover-underline"
                        >
                            +91 9136036603
                        </a>
                        <a href="#" className="btn btn-primary">
                            <span className="text text-1">Read More</span>
                            <span className="text text-2" aria-hidden="true">
                    Read More
                  </span>
                        </a>
                    </div>
                    <figure className="about-banner">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/Untitled20-202024-05-14T202107.959.jpg`}
                            width="570"
                            height="570"
                            loading="lazy"
                            alt="about banner"
                            className="w-100"
                            data-parallax-item
                            data-parallax-speed="1"
                        />
                        <div
                            className="abs-img abs-img-1 has-before"
                            data-parallax-item
                            data-parallax-speed="1.75"
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/images/image-4.jpg`}
                                width="285"
                                height="285"
                                loading="lazy"
                                alt=""
                                className="w-100"
                            />
                        </div>
                        <div className="abs-img abs-img-2 has-before">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/badge-2.png`}
                                width="133"
                                height="134"
                                loading="lazy"
                                alt=""
                            />
                        </div>
                    </figure>
                </div>
            </section>


            <section
                className="section about"
                aria-labelledby="about-label"
                id="about"
            >
                <div className="container ">
                    <figure className="about-banner">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/Untitled20-202024-05-14T202107.959.jpg`}
                            width="570"
                            height="570"
                            loading="lazy"
                            alt="about banner"
                            className="w-100"
                            data-parallax-item
                            data-parallax-speed="1"
                        />
                        <div
                            className="abs-img abs-img-1 has-before"
                            data-parallax-item
                            data-parallax-speed="1.75"
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/images/image-4.jpg`}
                                width="285"
                                height="285"
                                loading="lazy"
                                alt=""
                                className="w-100"
                            />
                        </div>
                        <div className="abs-img abs-img-2 has-before">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/badge-2.png`}
                                width="133"
                                height="134"
                                loading="lazy"
                                alt=""
                            />
                        </div>
                    </figure>
                    <div className="reverse">
                        <p className="label-2 section-subtitle text-center" id="about-label">
                            Our Services
                        </p>
                        <h2 className="headline-1 section-title">
                            4. Renovation & Remodeling
                        </h2>
                        <ul className="bullets">
                            <li>Transform your existing office into a dynamic, modern workspace.</li>
                            <li> Upgrading infrastructure and facilities to meet contemporary standards.</li>
                            <li>Sustainable and eco-friendly design options for a greener workspace.</li>
                        </ul>
                        <div className="contact-label text-center">Book Through Call</div>
                        <a href="tel:+804001234567" className="body-1 contact-number hover-underline">
                            +91 9136036603
                        </a>
                        <a href="#" className="btn btn-primary">
                            <span className="text text-1">Read More</span>
                            <span className="text text-2" aria-hidden="true">Read More</span>
                        </a>
                    </div>


                </div>
            </section>


        </>
    );
};

export default Services;
