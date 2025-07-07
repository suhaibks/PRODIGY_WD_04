// About.jsx
import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-container">
        <div className="about-text">
          <p>
            I'm a passionate <strong>Web Developer</strong> with a Computer Science background. I create clean, responsive, and dynamic user interfaces using modern technologies.
          </p>
          <p>
            My expertise includes front-end development with ReactJS, along with backend skills in Node.js and PHP. I'm always exploring new tools and frameworks to build fast, accessible web experiences.
          </p>
        </div>

        {/* Optional: Display a circular image next to the text */}
        {/* <div className="about-image">
          <img src={aboutImg} alt="About me" />
        </div> */}

        <div className="about-skills">
          {[
            'JavaScript (ES6+)',
            'ReactJS',
            'CSS3 / Tailwind',
            'Node.js & Express',
            'Python',
            'PHP',
            'Data Analysis',
            'DBMS'
          ].map((skill, index) => (
            <span key={index} className="skill-badge">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
