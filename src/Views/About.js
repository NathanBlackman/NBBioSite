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
            <div className="AboutPicNDesc">
                <img 
                    className="AboutPic"
                    alt="Nathan Blackman"
                    src={NBPicture}
                />
                <p className="AboutDescription">Nathan is a recent graduate of the Nashville Software School. Very eager to continue my software journey as well as continue to gain professional experience. I enjoy art, video production, music, and especially technology! Feel free to contact me through the methods below, I would love to hear from you!</p>
            </div>
            

            <div className='aboutLinks'>
                <a href="https://github.com/NathanBlackman">Github</a>
                <a href="https://www.linkedin.com/in/nathan-blackman-979344200/">LinkedIn</a>
            </div>
            
            

        </div>
        
    )
}