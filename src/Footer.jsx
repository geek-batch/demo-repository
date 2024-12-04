import React from 'react';
import './Footer.css'
import 'index.html'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">&copy; 2021 TruckersPortal</div>
      <div className="links">
        <a href="/first" className="link">
          First
        </a>
        <a href="/second" className="link">
          Second
        </a>
        <a href="/third" className="link">
          Third
        </a>
        <a href="/fourth" className="link">
          Fourth
        </a>
        <a href="/fifth" className="link">
          Fifth
        </a>
      </div>
      <div className="socialMedia">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer;