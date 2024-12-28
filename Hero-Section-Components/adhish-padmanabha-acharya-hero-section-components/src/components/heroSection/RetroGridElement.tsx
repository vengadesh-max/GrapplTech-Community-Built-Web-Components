import { FC } from "react";
import SkillGlobe from "./SkillGlobe";
import Meteors from "../magicui/meteors";

const RetroGridElement: FC = () => {
  return (
    <>
      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border  md:shadow-xl">
        <Meteors number={200} />
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          <div className="relative bg-slate-900 flex w-full h-screen flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <SkillGlobe />
          </div>
        </span>
      </div>
    </>
  );
};

export default RetroGridElement;
