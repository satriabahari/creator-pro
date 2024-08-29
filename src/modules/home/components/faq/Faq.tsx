import React from "react";
import FaqList from "./FaqList";

const Faq = () => {
  return (
    <section className="px-28">
      <div className="space-y-10 rounded-2xl bg-neutral-200 p-16">
        <div className="space-y-4 text-center">
          <h2 className="space-y-2 text-4xl font-semibold">
            Frequently Ask Question
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, aperiam.
          </p>
        </div>
        <FaqList />
        <p className="text-sm text-center">More Question? Contact us</p>
      </div>
    </section>
  );
};

export default Faq;
