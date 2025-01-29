import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-about">
            <h3>About Me</h3>
            <p>
              A passionate Full Stack Developer and Salesforce Developer, dedicated to creating
              innovative web solutions and exceptional digital experiences.
            </p>
          </div>

          <div className="footer-quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Info</h3>
            <ul>
              <li>
                <i className="fas fa-envelope"></i>
                <span>your.email@example.com</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>+1 234 567 8900</span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Your Location</span>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-line"></div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <p>Designed with <i className="fas fa-heart"></i> by Your Name</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 