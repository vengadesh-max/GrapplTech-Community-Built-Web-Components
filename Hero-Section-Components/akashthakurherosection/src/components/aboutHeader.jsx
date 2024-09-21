import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import EducationSection from "./educationSection";
import SkillSection from "./skillSection";
import ExperianceSection from "./ExperianceSection";

const AboutHeader =()=>{
    return(
        <div className="aboutHeader">
            <ul>
                <li>
                    <Link to="/about/skills" style={{textDecoration:'none'}}>Skills</Link>
                </li>
                <li>
                    <Link to="/about/education" style={{textDecoration:'none'}}>Education</Link>
                </li>
                <li>
                    <Link to="/about/experience" style={{textDecoration:'none'}}>Experience</Link>
                </li>
            </ul>
        </div>
    )
}

export default AboutHeader;