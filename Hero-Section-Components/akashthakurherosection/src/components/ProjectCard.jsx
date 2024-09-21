import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgUrl} alt={props.alt || "Image"} />
      <div className="project-card-content">
        <h1>{props.title}</h1>
        <p>{props.tech}</p>
        <div style={{ display: "flex", justifyContent:"space-between",marginTop:"10px"}}>
          <a className="projectLinks" href={props.githubLink} style={{ marginRight: "10px",color:"blue",textDecoration:"none"}}>
            Source Code
          </a>
          <a className="projectLinks" href={props.liveLink} style={{color:"blue",textDecoration:"none"}}>Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
