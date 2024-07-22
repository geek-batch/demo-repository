import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <ul className="nav-links">
          <li>
            <a href="#about">Dan Begaliev</a>
          </li>
        </ul>
      </div>

      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
