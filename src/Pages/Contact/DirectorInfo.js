import React from "react";
import styles from "../Contact/Contact.module.css";
import directorimage from "../../images/directorimage.png"; 

function DirectorInfo() {
  return (
    <div className={styles.directorInfo}>
       <img
        loading="lazy"
        src={directorimage}  
        alt="Kunal Kataria, Director"
        className={styles.directorImage}
      />
      <h3 className={styles.directorName}>Kunal Kataria, Director</h3>
      <p className={styles.directorMessage}>
        At 603, we represent Success, Infinity, and Energy. Our mission is to foster your business's achievements and create a lasting impact. Should we be able to enhance your accomplishments even slightly, we would be honored to assist. With our dedicated team, we offer unparalleled support and commitment.
      </p>
    </div>
  );
}

export default DirectorInfo;