import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'React', icon: 'fab fa-react' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain' },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'Java', icon: 'fab fa-java' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'Docker', icon: 'fab fa-docker' },
        { name: 'AWS', icon: 'fab fa-aws' },
        { name: 'Salesforce', icon: 'fab fa-salesforce' },
      ],
    },
    {
      title: 'Other Skills',
      skills: [
        { name: 'VS Code', icon: 'devicon-vscode-plain' },
        { name: 'NPM', icon: 'fab fa-npm' },
        { name: 'Linux', icon: 'fab fa-linux' },
        { name: 'Agile', icon: 'fas fa-sync-alt' },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <i className={`skill-icon ${skill.icon}`}></i>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certifications">
          <h3 className="category-title">Certifications</h3>
          <div className="certification-list">
            <div className="certification-item">
              <i className="fas fa-certificate"></i>
              <div className="certification-info">
                <h4>AWS Certified Developer</h4>
                <p>Amazon Web Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 