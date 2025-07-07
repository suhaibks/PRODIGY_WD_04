import React, { useEffect, useState } from 'react';
import '../styles/hero.css';
import profileImg from '../assets/profile.jpg';
const phrases = ['Web Developer', 'UI Enthusiast', 'Tech Explorer'];

const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768); // mobile screen check

    if (window.innerWidth <= 768) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % phrases.length);
      }, 1000); // change every 1 second

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="highlight">Suhaib K S</span>
        </h1>

        {isMobile ? (
          <h2 className="looping-text">{phrases[currentIndex]}</h2>
        ) : (
          <h2 className="typewriter">
            Web Developer | UI Enthusiast | Tech Explorer
          </h2>
        )}
        <p>I build responsive websites that bring ideas to life with clean code and creative design.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
      </div>
      <div className="hero-photo">
        <img src={profileImg} alt="Suhaib K S" />
      </div>
    </section>
  );
};

export default Hero;
