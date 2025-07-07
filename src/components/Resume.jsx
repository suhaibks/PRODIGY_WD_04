// Resume.jsx
import React from 'react';
import '../styles/resume.css';
import resumeFile from '../assets/Suhaib K S - Resume.pdf';

const Resume = () => {
  return (
    <section className="resume" id="resume">
      <h2 className="section-title">Resume</h2>
      <p className="resume-desc">You can download and view my resume below.</p>
      <a href={resumeFile} download className="btn-primary resume-download">
        Download Resume (PDF)
      </a>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Frontend Developer Intern @Prodigy InfoTech</h3>
            <span className="timeline-date">Juy, 2025 - Present</span>
            <p>Projects & personal applications using front-end languages and modern UI libraries.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Bachelor’s in Computer Applicaton</h3>
            <span className="timeline-date">2022 - 2025</span>
            <p>Mangalore University – Specialized in Web Development and Software Engineering.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
