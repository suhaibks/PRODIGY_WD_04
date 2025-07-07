// Projects.jsx
import React from 'react';
import '../styles/projects.css';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.png';

const projectList = [
    {
      title: "Digital Cronicles - Blog Website",
      image: project1, // ✅ use imported variable
      tech: "ReactJS, UI/UX Design, State Management, ChatGPT",
      link: "https://suhaibks.github.io/blogs/",
      code: "https://github.com/suhaibks/blogs"
    },
    {
      title: "Modern Landing Page",
      image: project2, // ✅ use imported variable
      tech: "ReactJS",
      link: "https://suhaibks.github.io/PRODIGY_WD_01/",
      code: "https://github.com/suhaibks/PRODIGY_WD_01"
    },
    {
      title: "Subscription Manager",
      image: project3, // ✅ use imported variable
      tech: "HTML, CSS, JavaScript, PHP, DBMS",
      link: "#", // 👈 better than saying "Not Hosted"
      code: "https://github.com/suhaibks/subscription_manager"
    }
  ];
  

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.tech}</p>
            <div className="project-buttons">
              <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary">Live</a>
              <a href={project.code} target="_blank" rel="noreferrer" className="btn-secondary">Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
