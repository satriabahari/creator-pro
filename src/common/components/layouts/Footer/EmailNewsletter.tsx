import React from "react";

const EmailNewsletter = () => {
  return (
    <div className="p-8 bg-neutral-200 rounded-xl space-y-5">
      <h4 className="text-2xl font-medium">Join our newsletter</h4>
      <div className="flex gap-4">
        <input
          type="text"
          className="bg-neutral-300 rounded-xl p-3 w-full"
          placeholder="Enter your email"
        />
        <button className="rounded-xl bg-neutral-300 p-3">Subscribe</button>
      </div>
    </div>
  );
};

export default EmailNewsletter;
