import React from 'react';

const About = () => (
  <section className="section about text-center" aria-labelledby="about-label" id="about">
    <div className="container">
      <div className="about-content">
        <p className="label-2 section-subtitle" id="about-label">Our Story</p>
        <h2 className="headline-1 section-title">Welcome to 603 Interiors</h2>
        <p className="section-text">
        At 603 Interiors, we believe that the right workspace can transform the way you work. Our expertise in designing functional, aesthetically pleasing, and customized office spaces sets us apart. With a dedicated in-house design team that has successfully crafted inspiring environments for 603 The Coworking Space, we bring the same innovation and precision to your corporate office. Whether you're looking to redesign your existing office or create a new space from scratch, 603 Interiors offers end-to-end solutions tailored to your business needs. Experience the perfect blend of creativity, efficiency, and functionality with 603 Interiors – where every space is designed with purpose.
        </p>
        <div className="contact-label">Book Through Call</div>
        <a href="tel:+804001234567" className="body-1 contact-number hover-underline">+91 9136036603</a>
        <a href="#" className="btn btn-primary">
          <span className="text text-1">Read More</span>
          <span className="text text-2" aria-hidden="true">Read More</span>
        </a>
      </div>
      <figure className="about-banner">
        <img src="./assets/images/Untitled20-202024-05-14T202107.959.jpg" width="570" height="570" loading="lazy" alt="about banner" className="w-100" data-parallax-item data-parallax-speed="1" />
        <div className="abs-img abs-img-1 has-before" data-parallax-item data-parallax-speed="1.75">
          <img src="./assets/images/image-4.jpg" width="285" height="285" loading="lazy" alt="" className="w-100" />
        </div>
        <div className="abs-img abs-img-2 has-before">
          <img src="./assets/images/badge-2.png" width="133" height="134" loading="lazy" alt="" />
        </div>
      </figure>
    </div>
  </section>
);

export default About;