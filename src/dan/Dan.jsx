
import "./Dan.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function Dan() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Dan;
