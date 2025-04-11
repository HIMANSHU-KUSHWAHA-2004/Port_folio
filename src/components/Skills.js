import React from 'react';
import './Skills.css';

const technicalSkills = [
  { name: 'C', icon: <img src={`${process.env.PUBLIC_URL}/pics/C_Programming_Language.webp`} alt="C Programming Language Icon" /> },
  { name: 'C++', icon: <img src={`${process.env.PUBLIC_URL}/pics/cpp_logo.webp`} alt="C++ Programming Language Icon" /> },
  { name: 'Python', icon: <img src={`${process.env.PUBLIC_URL}/pics/python.webp`} alt="Python Programming Language Icon" /> },
  { name: 'CSS3', icon: <img src={`${process.env.PUBLIC_URL}/pics/excel-logo.webp`} alt="CSS3 Icon" /> },
  { name: 'JavaScript', icon: <img src={`${process.env.PUBLIC_URL}/pics/bi.webp`} alt="JavaScript Icon" /> },
  { name: 'MySQL', icon: <img src={`${process.env.PUBLIC_URL}/pics/sql.webp`} alt="MySQL Icon" /> },
  { name: 'HTML5', icon: <img src={`${process.env.PUBLIC_URL}/pics/web.webp`} alt="HTML5 Icon" /> },
  { name: 'DSA', icon: <img src={`${process.env.PUBLIC_URL}/pics/dsa.webp`} alt="Data Structures and Algorithms Icon" /> },
  { name: 'React', icon: <img src={`${process.env.PUBLIC_URL}/pics/aws.webp`} alt="React Icon" /> },
  { name: 'Node.js', icon: <img src={`${process.env.PUBLIC_URL}/pics/git.png`} alt="Node.js Icon" /> },
];

const softSkills = [
  'Good Communication',
  'Problem Solving',
  'Leadership',
  'Excellent in Teamwork',
  'Manupulating'

];

const Skills = () => {
  return (
    <section id="skills" className="skills" data-aos="fade-up">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skills-section technical-skills">
          <h3>Technical Skills</h3>
          <div className="skills-list">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="skill-item" data-aos="zoom-in" data-aos-delay="100">
                <div className="skill-icon">{skill.icon}</div>
                {/* <div className="skill-name">{skill.name}</div> */}
              </div>
            ))}
          </div>
        </div>

        <div className="soft-skills">
          <h3>Soft Skills</h3>
          <ul className="soft-skills-list">
            {softSkills.map((skill, index) => (
              <li key={index} className="skill-item" data-aos="zoom-in" data-aos-delay="100">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
