import React from "react";


function Experience() {
  return (
    <>
      {" "}
      <section id="experience" className="section">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience:</h1>
        <div className="experience-details-container">
          <div className="about-containers-exp">
            <div className="details-container">
              <h2 className="experience-sub-title">Languages</h2>
              <div className="article-container">
                <article>
                  <img
                    src="./src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>

                <article>
                  <img
                    src="./src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Experienced</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Frameworks:</h2>
              <div className="article-container">
                <article>
                  <img
                    src="./src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>React</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                {/* <article>
                  <img
                    src="./src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Angular</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Vue.js</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Ember.js</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Next.js</h3>
                    <p>Basic</p>
                  </div>
                </article> */}
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Libraries:</h2>
              <div className="article-container">
                {/* <article>
                  <img
                    src="./src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>jQuery</h3>
                    <p>Intermediate</p>
                  </div>
                </article> */}
                <article>
                  <img
                    src="./src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Bootstrap</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Sass</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Material-UI</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./src/assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => {
            document.querySelector("#projects").scrollIntoView({
              behavior: "smooth",
            });
          }}
        />
      </section>
    </>
  );
}
export default Experience;
