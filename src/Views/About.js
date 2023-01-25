import React from "react";
import NBPicture from "../Images/NBPicture"

/*
const GithubLink = () => {
    var text = "Github";
    var result = text.link("https://github.com/NathanBlackman");
    return text;
}
*/

// •
export default function About() {
    return (
        <div>
            <h1 className="AboutName">Nathan Blackman</h1>
            <img 
                className="AboutPic"
                alt="Nathan Blackman"
                src={NBPicture}
            />
            <p className="AboutDescription">Nathan is a recent graduate of the Nashville Software School. Prefering a job in front end development but educated in both back end development and full stack.</p>
            <a href="https://github.com/NathanBlackman">Github</a>
            <a href="https://www.linkedin.com/in/nathan-blackman-979344200/">LinkedIn</a>
            

        </div>
        
    )
}