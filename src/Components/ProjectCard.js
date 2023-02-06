import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectCard() {

    const nav = useNavigate();
    
    const navToProjectView = () => {
        nav('/project-view')
    }

    return (
        <div>
            <div className="ProjectCard">
                <div className="CardTitle">
                    <h1 className="card-project-name"
                        onClick={navToProjectView}
                    >Card Title</h1>
                    <h5>Posted on Feb 4, 2023</h5>
                </div>
                <div className="CardImage">
                    <img 
                        className="CardImg"
                        alt="Card Img"
                        src="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg"
                        onClick={navToProjectView}
                    />
                </div>
                <div className="CardTechnologies">
                    <img className="CardTech"
                        alt="html"
                        src="https://assets.stickpng.com/images/5847f5bdcef1014c0b5e489c.png"
                    />
                    <img className="CardTech"
                        alt="CSS"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
                    />
                    <img className="CardTech"
                        alt="Javascript"
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                    />
                </div>
            </div>
        </div>
    );
}