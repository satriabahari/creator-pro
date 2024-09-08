import SubContainer from "@/common/components/elements/SubContainer";
import Image from "next/image";
import React from "react";

const CallToAction = () => {
  return (
    <SubContainer
      className="flex flex-col items-center justify-center gap-4 rounded-xl bg-gradient-to-b p-8 text-center dark:from-neutral-800 dark:to-neutral-900 overflow-hidden"
      id="cta"
    >
      <div className="flex flex-col" data-aos="fade-up" data-aos-anchor="#cta">
        <h4 className="text-3xl font-semibold dark:text-neutral-300">
          Unlock Your Potential:
        </h4>
        <h4 className="text-3xl font-semibold dark:text-neutral-300">
          Try Our Free Versio Today!
        </h4>
      </div>
      <p
        className="w-1/3 text-sm dark:text-neutral-500"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-anchor="#cta"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga
        pariaturunr?
      </p>
      <button
        className="rounded-lg px-4 py-2 dark:bg-neutral-100 dark:text-neutral-700"
        data-aos="fade-up"
        data-aos-delay="650"
        data-aos-anchor="#cta"
      >
        Try To Free
      </button>
      <Image
        src="/images/hero.jpg"
        width={500}
        height={150}
        alt="hero"
        className="rounded-xl"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-anchor="#cta"
      />
    </SubContainer>
  );
};

export default CallToAction;
