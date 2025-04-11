// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="about-container">
        <div className="about-image">
          <img
            src={`${process.env.PUBLIC_URL}/pics/about.webp`}
            alt="About me"
          />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
          <b>Hello! I'm Himanshu Kushwaha, a passionate software developer with a strong ambition to grow into a skilled data analyst.</b> I love breaking down complex problems and turning them into practical, data-driven solutions. While my background is rooted in software development, I also bring experience in web technologies like React, JavaScript, and CSS. Lately, I’ve been exploring the world of data—leveraging tools and AI to analyze trends, automate processes, and improve decision-making. I'm always curious, eager to learn, and driven to make an impact through technology and data.
          </p>
          <p>
            When I'm not coding, I enjoy watching anime, playing cricket, talking with friends, and exploring new tech trends to keep my mind fresh and inspired.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
