import React from "react";

function About() {
  return (
    <>
      <section id="about" className="section">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me:</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src="./src/assets/experience.png"
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>
                  2+ years <br />
                  Frontend Development
                </p>
              </div>
              <div className="details-container">
                <img
                  src="./src/assets/education.png"
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>C. Sc Associates Degree</p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                quis reprehenderit et laborum, rem, dolore eum quod voluptate
                exercitationem nobis, nihil esse debitis maxime facere minus
                sint delectus velit in eos quo officiis explicabo deleniti
                dignissimos. Eligendi illum libero dolorum cum laboriosam
                corrupti quidem, reiciendis ea magnam? Nulla, impedit fuga!
              </p>
            </div>
          </div>
        </div>
        <img
          src="./src/assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => {
            document.querySelector("#experience").scrollIntoView({
              behavior: "smooth",
            });
          }}
        />
      </section>
    </>
  );
}

export default About;
