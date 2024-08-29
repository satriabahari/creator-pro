import React from "react";
import TitleHero from "./TitleHero";
import SosmedList from "./SosmedList";
import ImageHero from "./ImageHero";

const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-6">
      <TitleHero />
      <SosmedList />
      <button className="rounded-full bg-neutral-800 px-4 py-2">
        <span className="bg-gradient-to-r from-blue-600 via-fuchsia-500 to-rose-700 bg-clip-text text-transparent">
          Get Started
        </span>
      </button>

      <div className="mt-20">
        <ImageHero />
      </div>
    </section>
  );
};

export default Hero;
