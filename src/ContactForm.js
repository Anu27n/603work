import React from "react";
import styles from "./Contact.module.css";

function ContactForm() {
  const formFields = [
    { label: "Name", type: "text", required: true },
    { label: "Phone", type: "tel", required: true },
    { label: "Email", type: "email", required: true },
    { label: "Preferred Location", type: "text", required: true },
    { label: "Company", type: "text", required: true },
    { label: "Number of Seats", type: "number", required: true },
    { label: "Requirements", type: "select", required: true, options: ["Select an option"] },
    { label: "Specifications", type: "textarea", required: false }
  ];

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.formTitle}>Contact Form</h2>
      <form className={styles.contactForm}>
        {formFields.map((field, index) => (
          <div key={index} className={styles.formGroup}>
            <label htmlFor={`field-${index}`} className={styles.label}>
              {field.label}{field.required && "*"}
            </label>
            {field.type === "select" ? (
              <select id={`field-${index}`} className={styles.select} required={field.required}>
                {field.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>{option}</option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea id={`field-${index}`} className={styles.textarea} required={field.required} />
            ) : (
              <input
                type={field.type}
                id={`field-${index}`}
                className={styles.input}
                required={field.required}
              />
            )}
          </div>
        ))}
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>Send</button>
          <button type="reset" className={styles.resetButton}>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;