import React from "react";
import Navbar from "../components/Navbars/Navbar";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaGithub,
} from "react-icons/fa";
import profileImg from "../Asset/myphoto.jpg";
import Img from "../Asset/home.jpg";
import ProfileCardTopImg from "../Asset/homeProfile.jpg";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

function Homepage() {
  const nav = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="lg:flex lg:flex-1 ">
        <div className="lg:flex lg:items-center lg:justify-center lg:bg-gray-950 lg:w-1/4 HomeSectionLeft">
          
          
          
          <div className="lg:max-w-sm lg:mx-auto lg:bg-gray-900 lg:rounded-xl lg:shadow-lg lg:overflow-hidden lg:border lg:border-gray-800 lg:min-h-[80vh] ProfileCard">
            <div className="bg-[#fdc500] lg:h-36 lg:flex lg:items-center lg:justify-center">
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
                    className="bg-[#fdc500] lg:text-gray-950 lg:font-bold lg:px-4 lg:py-2 lg:rounded-full lg:hover:bg-indigo-500 lg:hover:text-white lg:transition-colors lg:duration-300 homebtn"
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
            className="lg:absolute lg:inset-0 lg:bg-cover lg:bg-center image"
            style={{
              backgroundImage: `url(${Img})`,
              backgroundRepeat: "no-repeat", // Prevent background from repeating
              backgroundSize: "cover", // Ensure the image covers the entire section
            }}
          >
            <div className="lg:absolute lg:inset-0 lg:bg-gradient-to-r lg:from-gray-950 lg:via-gray-950 to-gray-950 lg:opacity-80"></div>

            <div className="lg:relative lg:z-10 lg:flex lg:flex-col lg:items-center lg:justify-center lg:h-full lg:p-8">
              <h1 className="lg:text-white lg:font-bold lg:text-5xl lg:mb-4 HomeSectionHeading">
                Welcome to My Portfolio
              </h1>
              <p className="lg:text-white lg:text-center lg:text-lg lg:max-w-xl lg:mb-8 HomeSectionPara">
                I am Akash Thakur, a passionate and dedicated software developer
                with a strong foundation in full-stack web development. With a
                deep understanding of both front-end and back-end technologies,
                I specialize in building dynamic, user-centric applications that
                solve real-world problems.
              </p>
              <button
                onClick={() => {
                  nav("/contact");
                }}
                className="bg-[#fdc500] lg:text-gray-950 lg:font-bold lg:px-6 lg:py-3 lg:rounded-full lg:hover:bg-indigo-500 lg:hover:text-white lg:transition-colors lg:duration-300 HomeSectionBtn"
              >
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
