import Image from "next/image";

import SubContainer from "@/common/components/elements/SubContainer";

const CallToAction = () => {
  return (
    <SubContainer
      className="relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-xl p-8 text-center"
      id="cta"
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-neutral-300 bg-[radial-gradient(#606060,transparent_1px)] [background-size:16px_16px] dark:bg-[#222222]"></div>
      <div
        className="flex flex-col text-2xl font-semibold text-neutral-700 dark:text-neutral-300 lg:text-3xl"
        data-aos="fade-up"
        data-aos-anchor="#cta"
      >
        <h4>
          Unlock Your Potential: <br />
          Ready to Elevate Your Content Creation?
        </h4>
      </div>
      <p
        className="text-sm text-neutral-500 lg:w-1/2"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-anchor="#cta"
      >
        Join our community of passionate creators and unlock your full
        potential. Sign up today to access exclusive tools, resources, and
        support!
      </p>
      <button
        className="rounded-lg bg-neutral-800 px-4 py-2 text-xs text-neutral-300 dark:bg-neutral-100 dark:text-neutral-700 lg:text-base"
        data-aos="fade-up"
        data-aos-delay="650"
        data-aos-anchor="#cta"
      >
        Get Started Now
      </button>
      <Image
        src="/images/dashboard.png"
        width={500}
        height={150}
        alt="hero"
        className="mt-4 rounded-xl border-2 border-neutral-700 p-1 dark:border-neutral-300"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-anchor="#cta"
      />
    </SubContainer>
  );
};

export default CallToAction;
