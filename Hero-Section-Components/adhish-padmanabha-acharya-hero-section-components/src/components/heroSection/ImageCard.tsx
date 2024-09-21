import { FC } from "react";
import { NeonGradientCard } from "../magicui/neon-gradient-card";

const ImageCard: FC = () => {
  return (
    <div
      className="bg-orange mr-auto ml-auto mt-4 w-full h-5"
      style={{ margin: "64px 50% 0px 50%" }}
    >
      <NeonGradientCard className="w-full items-center justify-center text-center">
        <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          Neon Gradient Card
        </span>
      </NeonGradientCard>
    </div>
  );
};

export default ImageCard;
