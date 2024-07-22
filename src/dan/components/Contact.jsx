import React from "react";

function Contact() {
  return (
    <>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me:</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src="./src/assets/email.png"
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:examplemail@gmail.com">dan.begaliev@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src="./src/assets/linkedin.png"
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p>
              <a href="https://www.linkedin.com">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>
      <footer>
        <p>Copyright &#169; 2024 Dan Begaliev. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Contact;
