import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <section className="about-us" id="about-us"> 
      <div className="container"> 
        <div className="about-us-content">
          <div className="section-title">
            <h2 className="headline-1">Our Story</h2>
            <p className="label-2">Crafting Inspiring Workspaces</p> 
          </div>

          <div className="content-blocks"> 
            <div className="content-block">
              <img src={`${process.env.PUBLIC_URL}/images/about-img1.jpg`} alt="Coworking Space Image" className="about-img" /> 
              <div className="text-content">
                <h3>Our Mission</h3>
                <p>
                  At 603 The Coworking Space, we're passionate about providing 
                  entrepreneurs, freelancers, and businesses with vibrant and 
                  inspiring workspaces that foster creativity, productivity, and 
                  collaboration. 
                </p>
              </div>
            </div>

            <div className="content-block">
              <div className="text-content"> 
                <h3>Our Values</h3>
                <ul>
                  <li>Community</li>
                  <li>Flexibility</li>
                  <li>Innovation</li>
                  <li>Well-being</li>
                </ul>
              </div>
              <img src={`${process.env.PUBLIC_URL}/images/about-img2.jpg`} alt="Coworking Space Image" className="about-img" /> 
            </div>

          </div>

          <div className="cta">
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;