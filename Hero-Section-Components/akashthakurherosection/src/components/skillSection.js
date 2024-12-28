import React from "react";
import "../App.css";

const SkillSection = () => {
  const skills = [
    
    {
      name: "C++",
      level: 85,
      tag:"Expert",
    },
    {
      name: "JavaScript",
      level: 80,
      tag:"expert",
    },
    {
      name: "ReactJs",
      level: 90,
      tag:"expert",
    },
    {
      name: "NodeJs",
      level: 85,
      tag:"expert",
    },
    {
      name: "ExpressJs",
      level: 80,
      tag:"expert",
    },
    {
      name: "MongoDB",
      level: 70,
      tag:"expert",
    },
    {
      name: "HTML",
      level: 90,
      tag:"expert",
    },
    {
      name: "CSS",
      level: 90,
      tag:"expert",
    },
    {
      name: "Redux",
      level: 80,
      tag:"expert",
    },
    {
      name: "RESTful APIs",
      level: 80,
      tag:"expert",
    },
    {
      name: "Python",
      level: 70,
      tag:"Intermediate",
    },
    {
      name: "SQL",
      level: 60,
      tag:"Intermediate",
    },
    {
      name: "MySQL",
      level: 70,
      tag:"Intermediate",
    },
    {
      name: "Google Firebase",
      level: 50,
      tag:"beginner",
    },
    {
      name: "Decker",
      level: 50,
      tag:"beginner",
    },
    
    
  ];

  return (
    <div className="skills-container">
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill.name} className="skill">
            <div className="skill-name" style={{display:"flex",justifyContent:"space-between"}}>
              
              <div>{skill.name}</div>
              <div style={{fontWeight:"lighter"}}>{skill.tag}</div>
              </div>
            
            <div className="skill-level">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
                
              >
                <div className="skill-tag">{`${skill.level}%`}</div>
              </div>
              
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillSection;
