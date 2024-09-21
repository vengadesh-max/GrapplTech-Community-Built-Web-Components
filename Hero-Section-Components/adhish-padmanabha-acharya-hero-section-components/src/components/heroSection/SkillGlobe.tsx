import { FC } from "react";
import IconCloud from "@/components/magicui/icon-cloud";
import Meteors from "../magicui/meteors";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const SkillGlobe: FC = () => {
  return (
    <div className="relative flex h-full w-screen  items-center justify-center overflow-hidden rounded-lg bg-transparent px-20 pb-20 pt-8 ">
      {/* <div className="relative flex h-screen  w-full flex-col items-center justify-center overflow-hidden rounded-lg border  md:shadow-xl"> */}
      <Meteors number={200} />
      <IconCloud iconSlugs={slugs} />
      {/* </div> */}
    </div>
  );
};

export default SkillGlobe;
