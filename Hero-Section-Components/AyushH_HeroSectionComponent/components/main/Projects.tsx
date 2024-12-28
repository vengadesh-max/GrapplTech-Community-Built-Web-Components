import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/cc.jpg"
          title="Modern Next.js Portfolio"
          description="This is a sample E-Commerce website created as part of a Project-Based Learning Assignment."
        />
        <ProjectCard
          src="/weather.jpg"
          title="Interactive Website Cards"
          description="It is a lightweight weather application using HTML, CSS, and JavaScript, powered by WeatherAPI.."
        />
        <ProjectCard
          src="/yt.jpg"
          title="Space Themed Website"
          description="This is a YouTube-inspired homepage designed as a project in HTML, CSS and Java Script."
        />
      </div>
    </div>
  );
};

export default Projects;
