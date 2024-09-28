import { BsStars as StarsIcon } from "react-icons/bs";

import TitleHero from "./TitleHero";
import SosmedList from "./SosmedList";
import ImageHero from "./ImageHero";

import SubContainer from "@/common/components/elements/SubContainer";
import ButtonLabel from "@/common/components/elements/ButtonLabel";

const Hero = () => {
  return (
    <SubContainer
      className="flex flex-col items-center gap-6 lg:gap-8"
      id="hero"
    >
      <ButtonLabel
        data-aos="fade-up"
        data-aos-anchor="#hero"
        data-aos-delay="300"
      >
        <StarsIcon size={16} className="text-purple-500" />
        <span className="text-gradient-color text-xs md:text-sm lg:text-base">
          Create, Share, Inspires
        </span>
      </ButtonLabel>
      <TitleHero />
      <SosmedList />
      <button
        className="bg-gradient-color rounded-full px-4 py-2 text-xs font-semibold text-neutral-200 transition duration-300 hover:scale-105 active:scale-90 md:text-sm lg:text-base"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-anchor="#hero"
      >
        Get Started
      </button>

      <div
        id="hero-image"
        className="mt-20 flex w-full items-center justify-center"
      >
        <ImageHero />
      </div>
    </SubContainer>
  );
};

export default Hero;
