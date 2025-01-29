import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              {/* Replace with your image */}
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDW1ZtKbp6Q6VU-4a0WEnQirp2Ue3Isxz7gQ&s" alt="Profile" />
            </div>
          </div>
          
          <div className="about-text">
            <h3>Hello! I'm <span className="highlight">Your Name</span></h3>
            <p className="about-description">
              I'm a passionate Full Stack Developer based in [Your Location]. With a strong foundation in both frontend and backend development, I love creating efficient and user-friendly applications that solve real-world problems.
            </p>
            
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Experience:</span>
                <span className="detail-value">X+ Years</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Your Location</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">your.email@example.com</span>
              </div>
            </div>

            <div className="about-buttons">
              <a href="/path-to-your-resume.pdf" download className="download-cv">
                Download CV
                <i className="fas fa-download"></i>
              </a>
              <a href="#contact" className="contact-btn">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 