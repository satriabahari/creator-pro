import SubContainer from "@/common/components/elements/SubContainer";
import Image from "next/image";
import React from "react";

const CallToAction = () => {
  return (
    <SubContainer
      className="flex flex-col items-center justify-center gap-4 rounded-xl bg-gradient-to-b p-8 text-center dark:from-neutral-800 dark:to-neutral-900"
      data-aos="fade-up"
    >
      <div className="flex flex-col">
        <h4 className="text-3xl font-semibold dark:text-neutral-300">
          Unlock Your Potential:
        </h4>
        <h4 className="text-3xl font-semibold dark:text-neutral-300">
          Try Our Free Versio Today!
        </h4>
      </div>
      <p className="w-1/3 text-sm dark:text-neutral-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga
        pariaturunr?
      </p>
      <button className="rounded-lg px-4 py-2 dark:bg-neutral-100 dark:text-neutral-700">
        Try To Free
      </button>
      <Image
        src="/images/hero.jpg"
        width={500}
        height={150}
        alt="hero"
        className="rounded-xl"
      />
    </SubContainer>
  );
};

export default CallToAction;
