import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <article>
          <section className="hero text-center" aria-label="home" id="home">
            <ul className="hero-slider" data-hero-slider>
              <li className="slider-item active" data-hero-slider-item>
                <div className="container">
                  <div className="slider-bg">
                    <img src="./images/sunmill-loc_batcheditor_fotor (1).avif" width="1880" height="950" alt="" className="img-cover" />
                  </div>
                  <p className="label-2 section-subtitle slider-reveal">Classic Elegance</p>
                  <h1 className="display-1 hero-title slider-reveal">
                    Create Your Space <br />
                    that breathes creativity
                  </h1>
                  <p className="body-2 hero-text slider-reveal">
                    Best working environment that suits your business needs.
                  </p>
                  <a href="https://603interiorlayout.netlify.app/" className="btn btn-primary slider-reveal" target="_blank" rel="noopener noreferrer">
                    <span className="text text-1">Make Your Space</span>
                    <span className="text text-2" aria-hidden="true">Make Your Space</span>
                  </a>
                </div>
              </li>
              <li className="slider-item" data-hero-slider-item>
                <div className="slider-bg">
                  <img src="./images/heroLocation (1).avif" width="1880" height="950" alt="" className="img-cover" />
                </div>
                <p className="label-2 section-subtitle slider-reveal">delightful experience</p>
                <h1 className="display-1 hero-title slider-reveal">
                  Transforming offices into <br />
                  vibrant stories
                </h1>
                <p className="body-2 hero-text slider-reveal">
                  Spaces that are occupied by Corporates and Startups, designed with your business in mind
                </p>
                <a href="https://603interiorlayout.netlify.app/" className="btn btn-primary slider-reveal" target="_blank" rel="noopener noreferrer">
                  <span className="text text-1">Make Your Space</span>
                  <span className="text text-2" aria-hidden="true">Make Your Space</span>
                </a>
              </li>
              <li className="slider-item" data-hero-slider-item>
                <div className="slider-bg">
                  <img src="./images/sunshine-loc.webp" width="1880" height="950" alt="" className="img-cover" />
                </div>
                <p className="label-2 section-subtitle slider-reveal">amazing & elegance</p>
                <h1 className="display-1 hero-title slider-reveal">
                  Where Every Floor <br />
                  tells a story
                </h1>
                <p className="body-2 hero-text slider-reveal">
                  Come with your team & experience the joy of inspiring office design.
                </p>
                <a href="https://603interiorlayout.netlify.app/" className="btn btn-primary slider-reveal" target="_blank" rel="noopener noreferrer">
                  <span className="text text-1">Make Your Space</span>
                  <span className="text text-2" aria-hidden="true">Make Your Space</span>
                </a>
              </li>
            </ul>
            <button className="slider-btn prev" aria-label="slide to previous" data-prev-btn>
              <ion-icon name="chevron-back"></ion-icon>
            </button>
            <button className="slider-btn next" aria-label="slide to next" data-next-btn>
              <ion-icon name="chevron-forward"></ion-icon>
            </button>
            <a href="indexLayout.html" className="hero-btn has-after">
              <img src="./images/hero-icon.png" width="48" height="48" alt="booking icon" />
              <span className="label-2 text-center span">Book A Space</span>
            </a>
          </section>

          {/* Other sections remain unchanged */}

        </article>
      </main>
      <footer className="footer section has-bg-image text-center" style={{ backgroundImage: "url('./images/fae955e3-de29-4d6b-a41a-85563f86a931.avif')" }}>
        <div className="container">
          {/* Footer content remains unchanged */}
        </div>
      </footer>
      <a href="#top" className="back-top-btn active" aria-label="back to top" data-back-top-btn>
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>
      <script src="./script.js"></script>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  );
};

export default Home;
