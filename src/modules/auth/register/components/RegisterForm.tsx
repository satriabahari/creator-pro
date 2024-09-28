import React from "react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { SiContentstack as LogoIcon } from "react-icons/si";

const RegisterForm = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-16 md:px-32">
      <div
        className="w-fit rounded-lg bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-400 p-1.5"
        data-aos="zoom-in"
        data-aos-anchor="#register"
        data-aos-delay="400"
      >
        <LogoIcon size={32} />
      </div>
      <div className="space-y-2 text-center">
        <h2
          className="text-xl font-semibold text-neutral-700 dark:text-neutral-300"
          data-aos="fade-down"
          data-aos-delay="400"
          data-aos-anchor="#register"
        >
          Create Your Account
        </h2>
        <p
          className="text-sm text-neutral-500"
          data-aos="fade-down"
          data-aos-delay="600"
          data-aos-anchor="#register"
        >
          Sign up to create an account and start sharing your content with the
          community.
        </p>
      </div>
      <div className="flex w-full justify-between gap-4">
        <div className="w-full space-y-1">
          <p
            className="font-medium text-neutral-700 dark:text-neutral-300"
            data-aos="zoom-out"
            data-aos-delay="800"
            data-aos-anchor="#register"
          >
            First name
          </p>
          <input
            type="text"
            className="w-full rounded-lg border-none bg-neutral-200 px-4 py-2 outline-none placeholder:text-neutral-500 dark:bg-neutral-800"
            placeholder="First name"
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-anchor="#register"
          />
        </div>
        <div className="w-full space-y-1">
          <p
            className="font-medium text-neutral-700 dark:text-neutral-300"
            data-aos="zoom-out"
            data-aos-delay="800"
            data-aos-anchor="#register"
          >
            Last name
          </p>
          <input
            type="text"
            className="w-full rounded-lg border-none bg-neutral-200 px-4 py-2 outline-none placeholder:text-neutral-500 dark:bg-neutral-800"
            placeholder="Last name"
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-anchor="#register"
          />
        </div>
      </div>
      <div className="w-full space-y-1">
        <p
          className="font-medium text-neutral-700 dark:text-neutral-300"
          data-aos="zoom-out"
          data-aos-delay="800"
          data-aos-anchor="#register"
        >
          Email
        </p>
        <input
          type="email"
          className="w-full rounded-lg border-none bg-neutral-200 px-4 py-2 outline-none placeholder:text-neutral-500 dark:bg-neutral-800"
          placeholder="Enter your email address"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-anchor="#register"
        />
      </div>
      <div className="w-full space-y-1">
        <p
          className="font-medium text-neutral-700 dark:text-neutral-300"
          data-aos="zoom-out"
          data-aos-delay="800"
          data-aos-anchor="#register"
        >
          Password
        </p>
        <input
          type="password"
          className="w-full rounded-lg border-none bg-neutral-200 px-4 py-2 outline-none placeholder:text-neutral-500 dark:bg-neutral-800"
          placeholder="Enter your password"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-anchor="#register"
        />
      </div>
      <div className="flex w-full gap-2">
        <input
          type="checkbox"
          data-aos="zoom-in"
          data-aos-delay="800"
          data-aos-anchor="#register"
        />
        <p
          className="text-sm text-neutral-500"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-anchor="#register"
        >
          I agree to the{" "}
          <span className="cursor-pointer text-neutral-700 underline dark:text-neutral-300">
            Terms & Conditions
          </span>
        </p>
      </div>
      <button
        className="card-hover w-full rounded-lg border-2 border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 px-4 py-2 font-medium dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900"
        data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-anchor="#register"
      >
        <span className="text-gradient-color">Sign up</span>
      </button>
      <div className="flex w-full items-center gap-2">
        <div
          className="h-1 w-full border-b border-neutral-500"
          data-aos="fade-right"
          data-aos-delay="800"
          data-aos-anchor="#register"
        />
        <p
          className="w-full text-center text-xs font-medium text-neutral-500"
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-anchor="#register"
        >
          Or register with
        </p>
        <div
          className="h-1 w-full border-b border-neutral-500"
          data-aos="fade-left"
          data-aos-delay="800"
          data-aos-anchor="#register"
        />
      </div>
      <div className="flex w-full gap-4">
        <button
          className="card-hover flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-200 px-4 py-2 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-anchor="#register"
        >
          <FaGoogle />
          <span>Google</span>
        </button>
      </div>
      <p
        className="text-sm font-medium text-neutral-500"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-anchor="#register"
      >
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="font-semibold text-neutral-500 dark:text-neutral-300"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
