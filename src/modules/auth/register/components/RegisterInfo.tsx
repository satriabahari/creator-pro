import Image from "next/image";
import React from "react";

const RegisterInfo = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-16 bg-gradient-to-b from-neutral-200 to-neutral-100 p-8 dark:from-neutral-800 dark:to-neutral-900 lg:p-16">
      <div className="flex flex-col gap-2 text-center">
        <h2
          className="text-xl font-medium text-neutral-700 dark:text-neutral-300"
          data-aos="fade-down"
          data-aos-delay="400"
          data-aos-anchor="#login"
        >
          Join our community of content creators! Fill out the form below to
          sign up and start sharing your creativity with the world.
        </h2>
      </div>

      <div className="relative">
        <Image
          src="/images/laptop-responsive.png"
          width={500}
          height={500}
          alt="login"
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-anchor="#login"
        />
        <Image
          src="/images/dashboard.png"
          width={200}
          height={200}
          alt="login"
          className="absolute -left-12 bottom-3 hidden translate-y-1/2 border-2 rounded-md border-neutral-500 md:block"
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-anchor="#login"
        />
      </div>
    </div>
  );
};

export default RegisterInfo;