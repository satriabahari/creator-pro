import React from "react";

const EmailNewsletter = () => {
  return (
    <div
      className="rounded-2xl p-0.5"
      data-aos="fade-left"
      data-aos-anchor="#footer"
    >
      <div className="space-y-5 rounded-xl bg-gradient-to-b from-neutral-200 to-neutral-100 p-8 dark:from-neutral-800 dark:to-neutral-900">
        <h4 className="lg:text-2xl text-xl font-medium text-neutral-700 dark:text-neutral-300">
          Join our newsletter
        </h4>
        <div className="flex gap-4">
          <input
            type="text"
            className="w-full rounded-xl bg-neutral-300 p-3 text-neutral-700 outline-none dark:bg-neutral-600 dark:text-neutral-300 text-sm lg:text-base"
            placeholder="Enter your email"
          />
          <button className="rounded-xl bg-neutral-300 p-3 text-neutral-700 dark:bg-neutral-600 dark:text-neutral-300 text-sm lg:text-base">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailNewsletter;
