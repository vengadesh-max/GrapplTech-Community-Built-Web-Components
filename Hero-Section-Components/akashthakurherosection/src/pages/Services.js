import React from "react";
import Navbar from "../components/Navbars/Servicesnav";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaGithub,
} from "react-icons/fa";
import profileImg from "../Asset/myphoto.jpg";
import Img from "../Asset/servicepage.jpg";
import ProfileCardTopImg from "../Asset/profileCardServicestop.jpg";
import { useNavigate } from "react-router-dom";
import "../styles/services.css";

function Services() {
  const nav=useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="lg:flex lg:flex-1">
        <div className="lg:flex lg:items-center lg:justify-center lg:bg-gray-950 lg:w-1/4">
          
          
          
          {/* <div className="max-w-sm mx-auto bg-gray-900 rounded-xl shadow-lg overflow-hidden md:max-w-md border border-gray-800 min-h-[80vh]">
            <div className="bg-[#3f8efc] h-36 flex items-center justify-center">
              <img src={ProfileCardTopImg} alt="profile" />
            </div>
            <div className="relative -mt-20 flex justify-center">
              <img
                className="w-36 h-36 rounded-full border-4 border-[#3f8efc] shadow-md"
                src={profileImg}
                alt="Profile"
              />
            </div>
            
            <div className="p-6 text-center flex flex-col justify-between h-full">
              <div>
                <h2 className="text-3xl font-semibold text-white">
                  Akash Thakur
                </h2>
                <p className="text-gray-400 mt-2">
                  Web Developer | Full Stack Enthusiast
                </p>
              </div>
              <div>
                <div className="flex justify-center space-x-6 mt-4">
                  <a
                    href="https://www.instagram.com/akash.thakur09__/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram
                      size={32}
                      className="text-pink-600 hover:text-pink-500"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook
                      size={32}
                      className="text-blue-600 hover:text-blue-500"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thakur-aakash"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin
                      size={32}
                      className="text-blue-700 hover:text-blue-600"
                    />
                  </a>
                  <a
                    href="https://t.me/a_akash_thakur"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTelegram
                      size={32}
                      className="text-blue-400 hover:text-blue-300"
                    />
                  </a>
                  <a
                    href="https://github.com/akashthakur09"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub
                      size={32}
                      className="text-gray-500 hover:text-gray-400"
                    />
                  </a>
                </div>
                <div className="flex justify-center mt-6">
                  <button onClick={()=>{nav('/contact')}} className="bg-[#3f8efc] text-gray-950 font-bold px-4 py-2 rounded-full hover:bg-indigo-500 hover:text-white transition-colors duration-300">
                    Hire Me
                  </button>
                </div>
              </div>
            </div>
          </div> */}

<div className="lg:max-w-sm lg:mx-auto bg-gray-900 lg:rounded-xl lg:shadow-lg lg:overflow-hidden lg:border lg:border-gray-800 lg:min-h-[80vh] ProfileCard">
            <div className="bg-[#ab51e3] lg:h-36 lg:flex lg:items-center lg:justify-center">
              <img src={ProfileCardTopImg} alt="profile" />
            </div>
            <div className="lg:relative lg:-mt-8 lg:flex lg:justify-center ProfilePhoto">
              <img
                className="lg:w-36 lg:h-36 lg:rounded-full lg:border-4 lg:border-[#3f8efc] lg:shadow-md"
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
                    className="bg-[#3f8efc] lg:text-gray-950 lg:font-bold lg:px-4 lg:py-2 lg:rounded-full lg:hover:bg-[#3f8efc] lg:hover:text-white lg:transition-colors lg:duration-300 homebtn"
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
              backgroundRepeat: "no-repeat", // Prevent background from repeating
              backgroundSize: "cover", // Ensure the image covers the entire section
            }}
          >
            <div className="lg:absolute lg:inset-0 lg:bg-gradient-to-r lg:from-gray-950 lg:via-gray-950 lg:to-gray-950 lg:opacity-80"></div>

            <div className="lg:relative lg:z-10 lg:flex lg:flex-col lg:items-center lg:justify-center lg:h-full lg:p-8 Serviceheading">
              <h5 className="lg:relative text-white lg:z-10 lg:text-center">
              I am dedicated to delivering exceptional quality and performance in every project, ensuring your vision is realized with precision. With a commitment to timely delivery and a focus on your satisfaction, you can trust me to provide reliable and scalable solutions tailored to your needs.
              </h5>
              <div className="lg:flex ServicesSection">
                <div className="book m-5">
                  <div className="lg:flex lg:flex-col">
                    <p className="text-[#3f8efc]">Tech Stack</p>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>React.js</li>
                      <li>Next.js</li>
                      <li>TailwindCSS</li>
                      <li>Redux</li>
                      <li>JavaScript</li>
                    </ul>
                  </div>
                  <div className="cover bg-[#3f8efc]">
                    <div className="bg-blue-800 rounded-lg pb-5 pt-1">
                      <p className="text-center">Front-End</p>
                      <p className="text-center">Development</p>
                    </div>
                    <h3 className="text-center text-sm pt-5">
                      I specialize in building responsive, high-performance web
                      applications that provide an exceptional user experience.
                      From designing intuitive layouts to implementing smooth
                      animations, I bring your ideas to life with pixel-perfect
                      precision.
                    </h3>
                  </div>
                </div>

                <div className="book m-5">
                  <div className="flex flex-col">
                    <p className="text-[#3f8efc]">Tech Stack</p>
                    <ul>
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>MongoDB</li>
                      <li>PostgreSQL</li>
                      <li>Firebase</li>
                      <li>RESTful APIs</li>
                      <li>JWT</li>
                      <li>WebSokets</li>
                    </ul>
                  </div>
                  <div className="cover bg-[#3f8efc]">
                    <div className="bg-blue-800 rounded-lg pb-5 pt-1">
                      <p className="text-center">Back-End</p>
                      <p className="text-center">Development</p>
                    </div>
                    <h3 className="text-center text-sm pt-5">
                      I engineer robust and scalable backend systems that power
                      seamless interactions and data flow. With a deep
                      understanding of server-side logic, databases, and API
                      development, I ensure your application runs smoothly and
                      efficiently behind the scenes.
                    </h3>
                  </div>
                </div>

                <div className="book m-5">
                  <div className="flex flex-col">
                    <p className="text-[#3f8efc]">Tech Stack</p>
                    <ul>
                      <li>
                        MERN Stack
                      </li>
                      <li>API Integration</li>
                      <li>Git & GitHub</li>
                      <li>Deployment</li>
                      <li>Next.js</li>
                    </ul>
                  </div>
                  <div className="cover bg-[#3f8efc]">
                    <div className="bg-blue-800 rounded-lg pb-5 pt-1">
                      <p className="text-center">Full-Stack</p>
                      <p className="text-center">Development</p>
                    </div>
                    <h3 className="text-center text-sm pt-5">
                      Bridging the gap between frontend aesthetics and backend
                      logic, I deliver end-to-end web solutions that are both
                      visually compelling and technically robust. With expertise
                      across the entire stack, I develop cohesive applications
                      that meet your business needs from start to finish.
                    </h3>
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

export default Services;
