import React from "react";

function Home() {
  return (
    <section id="profile">
      <div className="section_pic_container">
        <img
          src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
          alt="profile-picture"
          id="icon"
        />
      </div>
      <div className="section_text">
        <p className="section_text_p1">Hello, I'm</p>
        <h1 className="title">Dan Begaliev</h1>
        <p className="section_text_p2">Frontend Developer</p>

        <div className="button-container">
          <button className="brn btn-color-2" onClick="">
            Resume PDF
          </button>
          <button className="brn btn-color-1">
            <a href="#contact" id="contact-link">
              Contact Info
            </a>
          </button>
        </div>
        <div id="socials-container">
          <i className="fa-brands fa-github fa-flip"></i>
          <i className="fa-brands fa-linkedin fa-bounce"></i>
        </div>
      </div>
    </section>
  );
}

export default Home;
