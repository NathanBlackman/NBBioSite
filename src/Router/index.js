import React from "react";
import { Routes, Route } from 'react-router-dom';
import About from "../Views/About";
import Home from "../Views/Home";
//import ProjectView from "../Views/ProjectView";
import Projects from "../Views/Projects";
import ProjectView from "../Views/ProjectView";

export default function Router() {
    
    return (
        //add a route for ProjectView when you get the firebase storage up and running
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/project-view" element={<ProjectView />} />
            </Routes>
        </div>
    )
}