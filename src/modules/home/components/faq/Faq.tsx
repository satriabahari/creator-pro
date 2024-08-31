import React from "react";
import FaqList from "./FaqList";
import SectionHeading from "@/common/components/elements/SectionHeading";

const Faq = () => {
  return (
    <section className="px-28">
      <div className="rounded-2xl bg-gradient-to-br p-0.5 dark:from-purple-500 dark:via-pink-500 dark:to-yellow-500">
        <div className="space-y-10 rounded-2xl bg-neutral-200 bg-gradient-to-b p-16 dark:from-neutral-800 dark:to-neutral-900">
          <SectionHeading
            title="Frequently Ask Question"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, aperiam."
          />
          <FaqList />
          <p className="text-center text-sm dark:text-neutral-300">
            More Question?{" "}
            <span className="bg-gradient-to-r bg-clip-text text-transparent dark:from-purple-500 dark:via-pink-500 dark:to-yellow-500 font-medium">
              Contact us
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
