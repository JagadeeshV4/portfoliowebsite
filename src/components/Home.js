import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <nav className="navbar">
        <div className="nav-logo">JD</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm <span className="highlight">Your Name</span></h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            I build exceptional digital experiences that make life easier and more enjoyable
          </p>
          <div className="cta-buttons">
            <button className="cta-primary">View My Work</button>
            <button className="cta-secondary">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 