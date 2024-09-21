import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbars/ContactNav";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaGithub,
} from "react-icons/fa";
import profileImg from "../Asset/myphoto.jpg";
import Img from "../Asset/contactpage.jpg";
import ProfileCardTopImg from "../Asset/profileCardContacttop.jpg";
import "../styles/contact.css";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rn5flts", "template_0jh3ue2", form.current, {
        publicKey: "NJkq0ih1eXl2MnBvc",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email sent Successfully :)");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="lg:flex lg:flex-1">
        <div className="lg:flex lg:items-center lg:justify-center lg:bg-gray-950 lg:w-1/4">
          <div className="lg:max-w-sm lg:mx-auto bg-gray-900 lg:rounded-xl lg:shadow-lg lg:overflow-hidden lg:border lg:border-gray-800 lg:min-h-[80vh] ProfileCard">
            <div className="bg-[#ab51e3] lg:h-36 lg:flex lg:items-center lg:justify-center ProfileCardTopImage">
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
                  <button className="bg-[#7bdff2] lg:text-gray-950 lg:font-bold lg:px-4 lg:py-2 lg:rounded-full lg:hover:bg-indigo-500 lg:hover:text-white lg:transition-colors lg:duration-300 homebtn">
                    Hire Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-3/4 lg:relative">
          <div
            className="lg:absolute lg:inset-0 lg:bg-cover lg:bg-center"
            style={{
              backgroundImage: `url(${Img})`,
              backgroundRepeat: "no-repeat", // Prevent background from repeating
              backgroundSize: "cover", // Ensure the image covers the entire section
            }}
          >
            <div className="lg:absolute lg:inset-0 lg:bg-gradient-to-r lg:from-gray-950 lg:via-gray-950 lg:to-gray-950 lg:opacity-80"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-white">
              <h1 className="text-4xl font-bold mb-8 contactheading">
                Send Me Your Details
              </h1>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="w-full max-w-lg lg:bg-[#7bdff2]/10 lg:rounded lg:backdrop-blur-md p-8 rounded-lg shadow-lg formSection"
              >
                <div className="mb-4">
                  <input
                    style={{ color: "black" }}
                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7bdff2] transition-all duration-300"
                    type="text"
                    name="user_name"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    style={{ color: "black" }}
                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7bdff2] transition-all duration-300"
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    style={{ color: "black" }}
                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7bdff2] transition-all duration-300"
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <input
                    type="submit"
                    value="Send"
                    className="submitBtn bg-[#7bdff2] pl-20 pr-20 text-gray-950 font-bold px-4 py-2 rounded-full hover:bg-indigo-500 hover:text-white transition-colors duration-300 cursor-pointer"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
