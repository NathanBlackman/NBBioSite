import React from "react";
import ProjectCard from "../Components/ProjectCard";

export default function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <div className="project-content">
               <ProjectCard /> 
            </div>
        </div>
    );    
}