import React from "react";
import TitleHero from "./TitleHero";
import SosmedList from "./SosmedList";
import ImageHero from "./ImageHero";

const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-6">
      <TitleHero />
      <SosmedList />
      <button className="rounded-full border bg-gradient-to-b from-neutral-800 to-neutral-900 px-4 py-2 transition duration-300 hover:scale-105 active:scale-90 dark:border-neutral-700">
        <div className="bg-gradient-to-r bg-clip-text font-medium text-transparent dark:from-purple-500 dark:via-pink-500 dark:to-yellow-500">
          Get Started
        </div>
      </button>

      <div className="mt-20">
        <ImageHero />
      </div>
    </section>
  );
};

export default Hero;
