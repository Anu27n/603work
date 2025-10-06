import React from "react";
import styles from "./Contact.module.css";

function ContactInfo() {
  const contactDetails = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/958699ee12c6a4ef3593b10d130a31ec8f048b417d213f80cccf13b236a4421a?placeholderIfAbsent=true&apiKey=1672e7c4d6074833a4108dd5d99bcb2e",
      text: "Makhija Arcade, 35th Rd, Khar West, Mumbai, Maharashtra 400052",
      alt: "Location icon"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc0d0a2dccaa0032e1e5c427bfac491b92e861da7348cf967e59cbcbd187cd1c?placeholderIfAbsent=true&apiKey=1672e7c4d6074833a4108dd5d99bcb2e",
      text: "sales@603thecoworkingspace.com",
      alt: "Email icon"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a31c1d327de4de80b1f27deeb28757d4835338219cf9c11c367ebb72a1a32db2?placeholderIfAbsent=true&apiKey=1672e7c4d6074833a4108dd5d99bcb2e",
      text: "+91 9136036603",
      alt: "Phone icon"
    }
  ];

  return (
    <div className={styles.contactInfo}>
      <h2 className={styles.title}>
        Connect with <span className={styles.highlight}>603</span>
      </h2>
      {contactDetails.map((detail, index) => (
        <div key={index} className={styles.detailItem}>
          <img loading="lazy" src={detail.icon} alt={detail.alt} className={styles.icon} />
          <div className={styles.detailText}>{detail.text}</div>
        </div>
      ))}
      <p className={styles.message}>
        Our team is dedicated to assisting you and answering any questions. We eagerly await the opportunity to connect with you.
      </p>
    </div>
  );
}

export default ContactInfo;