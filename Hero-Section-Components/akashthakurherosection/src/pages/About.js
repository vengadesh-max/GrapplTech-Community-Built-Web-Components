import React from "react";
import Navbar from "../components/Navbars/aboutNav";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaGithub,
} from "react-icons/fa";
import profileImg from "../Asset/myphoto.jpg";
import Img from "../Asset/aboutpage.jpg";
import ProfileCardTopImg from "../Asset/profileCardAbouttop.jpg";
import "../styles/about.css";

import { useNavigate } from "react-router-dom";

function About() {
  const nav = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="lg:flex lg:flex-1">
        <div className="lg:flex lg:items-center lg:justify-center lg:bg-gray-950 lg:w-1/4">
          
          
          
          <div className="lg:max-w-sm lg:mx-auto bg-gray-900 lg:rounded-xl lg:shadow-lg lg:overflow-hidden lg:border lg:border-gray-800 lg:min-h-[80vh] ProfileCard">
            <div className="bg-[#ab51e3] lg:h-36 lg:flex lg:items-center lg:justify-center">
              <img src={ProfileCardTopImg} alt="profile" />
            </div>
            <div className="lg:relative lg:-mt-8 lg:flex lg:justify-center ProfilePhoto">
              <img
                className="lg:w-36 lg:h-36 lg:rounded-full lg:border-4 lg:border-[#ffdd00] lg:shadow-md"
                src={profileImg}
                alt="Profile"
              />
            </div>
            <div className="lg:p-6 lg:text-center lg:flex lg:flex-col lg:justify-between lg:h-full ProfileDescription">
              <div>
                <h2 className="lg:text-2xl lg:font-semibold lg:text-white name">
                  Akash Thakur
                </h2>
                <p className="lg:text-gray-400 lg:mt-2 lg:text-sm Intro">
                  Web Developer | Full Stack Enthusiast
                </p>
              </div>
              <div className="random">
                <div className="lg:flex lg:justify-center lg:space-x-2 lg:mt-5 ProfileIcons">
                  <a
                    href="https://www.instagram.com/akash.thakur09__/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram
                      size={32}
                      className="lg:text-pink-600 lg:hover:text-pink-500 lg:w-6 lg:h-6 icon insta"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook
                      size={32}
                      className="lg:text-blue-600 lg:hover:text-blue-500 lg:w-6 lg:h-6 icon facebook"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thakur-aakash"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin
                      size={32}
                      className="lg:text-blue-700 lg:hover:text-blue-600 lg:w-6 lg:h-6 icon linkedin"
                    />
                  </a>
                  <a
                    href="https://t.me/a_akash_thakur"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTelegram
                      size={32}
                      className="lg:text-blue-400 lg:hover:text-blue-300 lg:w-6 lg:h-6 icon telegram"
                    />
                  </a>
                  <a
                    href="https://github.com/akashthakur09"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub
                      size={32}
                      className="lg:text-gray-500 lg:hover:text-gray-400 lg:w-6 lg:h-6 icon github"
                    />
                  </a>
                </div>
                <div className="lg:flex lg:justify-center lg:mt-6">
                  <button
                    onClick={() => {
                      nav("/contact");
                    }}
                    className="bg-[#ab51e3] lg:text-gray-950 lg:font-bold lg:px-4 lg:py-2 lg:rounded-full lg:hover:bg-indigo-500 lg:hover:text-white lg:transition-colors lg:duration-300 homebtn"
                  >
                    Hire Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-3/4 lg:relative HomeSectionRight">
          <div
            className="lg:absolute lg:inset-0 lg:bg-cover lg:bg-center"
            style={{
              backgroundImage: `url(${Img})`,
              backgroundRepeat: "no-repeat", 
              backgroundSize: "cover", 
            }}
          >
            <div className="lg:absolute lg:inset-0 lg:bg-gradient-to-r lg:from-gray-950 lg:via-gray-950 lg:to-gray-950 lg:opacity-80"></div>

            <div className="lg:relative lg:z-10 lg:flex lg:flex-col lg:h-full lg:p-8 lg:text-white">
              <div>
                <h2 className="lg:text-2xl lg:font-bold lg:ml-5 headings">
                  My Education
                </h2>
                
                <div className="lg:flex lg:justify-between lg:m-5 education">
                  <div className="lg:bg-purple-400/10 lg:rounded lg:p-2 lg:backdrop-blur-md educationBox">
                    <h1>10th</h1>
                    <p>State Board</p>
                    <p>2015</p>
                  </div>
                  <div className="lg:bg-purple-400/10 lg:rounded lg:p-2 lg:backdrop-blur-md educationBox">
                    <h1>12th</h1>
                    <p>State Board</p>
                    <p>2017</p>
                  </div>
                  <div className="lg:bg-purple-400/10 lg:rounded lg:p-2 lg:backdrop-blur-md educationBox">
                    <h1>Under Graduation</h1>
                    <p>Indore University</p>
                    <p>2020</p>
                  </div>
                  <div className="lg:bg-purple-400/10 lg:rounded lg:p-2 lg:backdrop-blur-md educationBox">
                    <h1>Post Graduation</h1>
                    <p>Nit Trichy</p>
                    <p>2024</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="lg:text-2xl lg:font-bold lg:m-5 headings">
                  My Experience
                </h2>
                <div className="lg:bg-purple-400/10 lg:rounded lg:backdrop-blur-md lg:m-5 lg:p-2 experiencePara">
                  <h1>
                    As a motivated fresher, I've actively built several
                    projects, including DomConnect (React, Node.js, MongoDB) and
                    RoomEase (React, Node.js, JWT, MongoDB). These projects have
                    provided me with hands-on experience and practical knowledge
                    in full-stack development, showcasing my ability to deliver
                    real-world software solutions.
                  </h1>
                </div>
              </div>

              <div>
                <h3 className="lg:text-2xl lg:font-bold lg:m-5 headings">
                  My Skills
                </h3>
                <div className="lg:flex lg:bg-purple-400/10 lg:rounded lg:backdrop-blur-md lg:m-5 lg:justify-around SkillsBox">
                  <div className="lg:p-2 ">
                    <ul className="skills-ul">
                      <li>HTML & CSS</li>
                      <li>JavaScript</li>
                      <li>C++</li>
                      <li>Python</li>
                    </ul>
                  </div>
                  <div className="lg:p-2">
                    <ul className="skills-ul">
                      <li>SQL</li>
                      <li>React.js</li>
                      <li>Node.js</li>
                      <li>Express.js</li>
                    </ul>
                  </div>
                  <div className="lg:p-2">
                    <ul className="skills-ul">
                      <li>MongoDB</li>
                      <li>Firebase</li>
                      <li>Redux</li>
                      <li>PostgreSQL</li>
                    </ul>
                  </div>
                  <div className="lg:p-2">
                    <ul className="skills-ul">
                      <li>Git & GitHub</li>
                      <li>TailwindCSS</li>
                      <li>Next.js</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
