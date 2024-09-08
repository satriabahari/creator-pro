import React from "react";

const EmailNewsletter = () => {
  return (
    <div
      className="rounded-2xl bg-gradient-to-br p-0.5 dark:from-purple-500 dark:via-pink-500 dark:to-yellow-500"
      data-aos="fade-left"
      data-aos-anchor="#footer"
    >
      <div className="space-y-5 rounded-xl bg-neutral-200 bg-gradient-to-b p-8 dark:from-neutral-800 dark:to-neutral-900">
        <h4 className="text-2xl font-medium">Join our newsletter</h4>
        <div className="flex gap-4">
          <input
            type="text"
            className="w-full rounded-xl bg-neutral-300 p-3 outline-none dark:bg-neutral-600"
            placeholder="Enter your email"
          />
          <button className="rounded-xl bg-neutral-300 p-3 dark:bg-neutral-600">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailNewsletter;
