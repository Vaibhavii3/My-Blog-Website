import React from "react";
import "../style/About.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <p>
          Hi, I'm <strong>Vaibhavi</strong>! 👋 <br />
          I'm a Frontend Developer with a passion for creating beautiful and
          functional web applications.
        </p>
        <p>
          I enjoy coding, exploring the mysteries of space 🌌, and sharing my
          thoughts on life and technology through writing.
        </p>
        <div className="social-links">
          <a href="https://instagram.com/vaibhavii.3" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i> 
          </a>
          <a href="https://linkedin.com/in/vaibhavi-chaudhari-1b003120b" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i> 
          </a>
          <a href="https://github.com/vaibhavii3" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i> 
          </a>
          <a href="https://youtube.com/@codingwithv30" target="_blank" rel="noreferrer">
            <i className="fab fa-youtube"></i> 
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
