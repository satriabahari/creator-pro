import React from "react";
import TitleHero from "./TitleHero";
import SosmedList from "./SosmedList";
import ImageHero from "./ImageHero";
import SubContainer from "@/common/components/elements/SubContainer";
import ButtonLabel from "@/common/components/elements/ButtonLabel";
import { BsStars as StarsIcon } from "react-icons/bs";
const Hero = () => {
  return (
    <SubContainer className="flex flex-col items-center gap-8" id="hero">
      <ButtonLabel data-aos="fade-up" data-aos-anchor="#hero" data-aos-delay="300">
        <StarsIcon size={16} />
        <span>Introduction Content AI</span>
      </ButtonLabel>
      <TitleHero />
      <SosmedList />
      <button
        className="rounded-full border-2 bg-gradient-to-b from-neutral-800 to-neutral-900 px-4 py-2 transition duration-300 hover:scale-105 active:scale-90 dark:border-neutral-700"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-anchor="#hero"
      >
        <span className="text-gradient-color font-semibold">Get Started</span>
      </button>

      <div className="mt-20 flex w-full items-center justify-center">
        <ImageHero />
      </div>
    </SubContainer>
  );
};

export default Hero;
