import { FC } from "react";
import NavBar from "./NavBar";
import RetroGridElement from "./RetroGridElement";
import ImageCard from "./ImageCard";

const HeroPage: FC = () => {
  return (
    <>
      <NavBar />
      {/* <ImageCard /> */}
      <RetroGridElement />
    </>
  );
};

export default HeroPage;
