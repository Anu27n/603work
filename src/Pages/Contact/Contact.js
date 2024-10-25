import React from "react";
import ContactInfo from "./ContactInfo";
import DirectorInfo from "./DirectorInfo";
import ContactForm from "./ContactForm";
import Navbar from "../../Components/Navbar";
import styles from "../Contact/Contact.module.css";

import facebookIcon from "../../images/facebook.svg"
import instagramIcon from "../../images/instagram.svg"
import twitterIcon from "../../images/twitter.svg"
import youtubeIcon from "../../images/youtube.svg"
import mapsIcon from "../../images/maps.svg"


function Contact() {
  return (
    <div>

    <section className={styles.background}>
    <Navbar/>

      <div className={styles.container}>
        <div className={styles.infoRow}>
          <div className={styles.contactColumn}>
            <ContactInfo />
          </div>
          <div className={styles.directorColumn}>
            <DirectorInfo />
          </div>
        </div>
        <div className={styles.formRow}>
          <ContactForm />
        </div>
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
                  <li>
                  
                  </li>
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
                      <img className="img-height" src={facebookIcon} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/603thecoworkingspace/" className="label-2 footer-link">
                      <img className="img-height" src={instagramIcon} />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/603coworking" className="label-2 footer-link">
                      <img className="img-height" src={twitterIcon} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" className="label-2 footer-link">
                      <img className="img-height" src={youtubeIcon} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps" className="label-2 footer-link">
                      <img className="img-height map" src={mapsIcon} />
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

    </div>

  );
}

export default Contact;
