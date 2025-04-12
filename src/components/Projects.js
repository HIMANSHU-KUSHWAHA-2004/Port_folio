// src/components/Projects.js
import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Flappy Bird',
    description: 'A classic arcade-style game where the player controls a bird, navigating it through obstacles using keyboard input.',
    technologies: ['Python', 'Pygame'],
    image: `${process.env.PUBLIC_URL}/pics/flappy.png`,
    github: 'https://github.com/HIMANSHU-KUSHWAHA-2004/flappy_bird',
    liveDemo: '#',
  },
  {
    title: 'Bank Management System',
    description: 'A simple command-line based banking system that allows users to create, update, and manage bank accounts with data stored in JSON format.',
    technologies: ['Python', 'JSON'],
    image: `${process.env.PUBLIC_URL}/pics/bank.png`,
    github: 'https://github.com/HIMANSHU-KUSHWAHA-2004/Bank_management_system.git',
    liveDemo: `${process.env.PUBLIC_URL}/project/project_Bank_oops_1`, // The .exe file path
  },
  {
    title: 'Music Player',
    description: 'A simple music player that plays songs from a specified directory using Python, Tkinter, and OS modules.',
    technologies: ['Python', 'Tkinter', 'OS', 'PIL'],
    image: `${process.env.PUBLIC_URL}/pics/mus.png`,
    github: 'https://github.com/yourusername/project-three',
    liveDemo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item" data-aos="zoom-in" data-aos-delay="100">
            <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.liveDemo} download rel="noopener noreferrer">Download</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
