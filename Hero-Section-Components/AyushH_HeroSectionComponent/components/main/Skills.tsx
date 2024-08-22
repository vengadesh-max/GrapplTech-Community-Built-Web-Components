import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div> */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

            
      <div className="text-center text-white mt-8"> 
        <h2 className="text-2xl font-bold mb-4">More About Me</h2>
        <p className="text-lg custom-text-style">
          Hello! I&apos;m Ayush, a dedicated web designer with over a year of immersive learning in the dynamic world of digital creation. Specializing in front-end development, I&apos;ve been crafting captivating website designs that seamlessly blend aesthetics with functionality. Currently, I&apos;m expanding my skill set into full-stack development, eager to bring my designs to life with comprehensive functionality. My passion lies in staying ahead of design trends, channeling creativity to ensure a deep understanding of user experience (UX) and user interface (UI) principles. I take pride in my commitment to continuous learning, always striving to enhance my skills and stay abreast of emerging technologies. With a keen eye for detail and a focus on creating visually appealing, user-friendly interfaces, I&apos;m dedicated to transforming digital concepts into engaging online experiences. Join me on this journey where every line of code and pixel contributes to the art of crafting immersive and user-centric websites.
        </p>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
