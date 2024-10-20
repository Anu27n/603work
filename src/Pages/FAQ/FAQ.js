import { useState } from "react";
import faqData from "./faqData.json";
import "./faq.css"; // Import the CSS file

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div key={index} className={`faq-item ${openQuestion === index ? "open" : ""}`}>
              <button className="faq-button" onClick={() => toggleQuestion(index)}>
                <span className="faq-question">{faq.question}</span>
                <svg className={`faq-icon ${openQuestion === index ? "rotate" : ""}`} viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`faq-answer ${openQuestion === index ? "open" : ""}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
