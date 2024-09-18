import SubContainer from "@/common/components/elements/SubContainer";
import Image from "next/image";
import React from "react";

const CallToAction = () => {
  return (
    <SubContainer
      className="relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-xl p-8 text-center"
      id="cta"
    >
      {/* <SubContainer
      className="flex relative flex-col items-center justify-center gap-4 overflow-hidden rounded-xl bg-gradient-to-b from-neutral-200 to-neutral-100 p-8 text-center dark:from-neutral-800 dark:to-neutral-900"
      id="cta"
    > */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[#222222] dark:bg-[radial-gradient(#606060,transparent_1px)]"></div>
      <div className="flex flex-col" data-aos="fade-up" data-aos-anchor="#cta">
        <h4 className="lg:text-3xl text-xl font-semibold text-neutral-700 dark:text-neutral-300">
          Unlock Your Potential:
        </h4>
        <h4 className="lg:text-3xl text-xl font-semibold text-neutral-700 dark:text-neutral-300">
          Try Our Free Versio Today!
        </h4>
      </div>
      <p
        className="lg:w-1/3 text-sm text-neutral-500"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-anchor="#cta"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga
        pariaturunr?
      </p>
      <button
        className="rounded-lg bg-neutral-800 px-4 py-2 text-neutral-300 dark:bg-neutral-100 dark:text-neutral-700 text-xs lg:text-base"
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
