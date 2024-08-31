import Image from "next/image";
import React from "react";

const CallToAction = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-4 dark:from-neutral-800 dark:to-neutral-900 bg-gradient-to-b rounded-xl p-8">
      <div className="flex flex-col">
        <h4 className="text-3xl font-semibold dark:text-neutral-300">
          Unlock Your Potential:
        </h4>
        <h4 className="text-3xl font-semibold dark:text-neutral-300">
          Try Our Free Versio Today!
        </h4>
      </div>
      <p className="w-1/3 dark:text-neutral-500 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga
        pariatur?
      </p>
      <button className="dark:bg-neutral-100 dark:text-neutral-700 px-4 py-2 rounded-lg">Try To Free</button>
      <Image src="/images/hero.jpg" width={500} height={150} alt="hero" className="rounded-xl"/>
    </section>
  );
};

export default CallToAction;
