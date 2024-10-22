import React from "react";
import ContactInfo from "./ContactInfo";
import DirectorInfo from "./DirectorInfo";
import ContactForm from "./ContactForm";
import Navbar from "../../Components/Navbar";
import styles from "../Contact/Contact.module.css";


function Contact() {
  return (
    <div>
                 
                  <Navbar/>
              

    <section className={styles.background}>
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
    </div>

  );
}

export default Contact;
