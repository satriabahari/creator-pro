import Link from "next/link";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { SiContentstack as LogoIcon } from "react-icons/si";

const RegisterPage = () => {
  return (
    <div className="grid h-screen grid-cols-2">
      {/* Visual */}
      <div>Visual</div>

      {/* Login */}
      <div className="flex flex-col items-center justify-center gap-4 px-32">
        <div className="w-fit rounded-lg bg-gradient-to-br p-1.5 dark:from-purple-400 dark:via-pink-400 dark:to-yellow-400">
          {/* <Image src="/images/logo/logo.png" width={20} height={20} alt="logo" /> */}
          <LogoIcon size={32} />
        </div>
        <div className="space-y-2 text-center">
          <h2 className="text-xl font-semibold">
            Create account for content creators AI
          </h2>
          <p className="text-sm dark:text-neutral-500">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="flex w-full justify-between gap-4">
          <div className="w-full space-y-1">
            <p className="font-medium dark:text-neutral-300">First name</p>
            <input
              type="text"
              className="w-full rounded-lg border-none px-4 py-2 outline-none placeholder:text-neutral-500 dark:bg-neutral-800"
              placeholder="First name"
            />
          </div>
          <div className="w-full space-y-1">
            <p className="font-medium dark:text-neutral-300">Last name</p>
            <input
              type="text"
              className="w-full rounded-lg border-none px-4 py-2 outline-none placeholder:text-neutral-500 dark:bg-neutral-800"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="w-full space-y-1">
          <p className="font-medium dark:text-neutral-300">Email</p>
          <input
            type="email"
            className="w-full rounded-lg border-none px-4 py-2 outline-none placeholder:text-neutral-500 dark:bg-neutral-800"
            placeholder="Enter your email address"
          />
        </div>
        <div className="w-full space-y-1">
          <p className="font-medium dark:text-neutral-300">Password</p>
          <input
            type="password"
            className="w-full rounded-lg border-none px-4 py-2 outline-none placeholder:text-neutral-500 dark:bg-neutral-800"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex w-full gap-2">
          <input type="checkbox" />
          <p className="text-sm text-neutral-500">
            I agree to the{" "}
            <span className="cursor-pointer underline dark:text-neutral-300">
              Terms & Conditions
            </span>
          </p>
        </div>
        <button className="card-hover w-full rounded-lg border-2 bg-gradient-to-b px-4 py-2 font-medium dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900">
          <span className="text-gradient-color">Create Account</span>
        </button>
        <div className="flex w-full items-center gap-2">
          <div className="h-1 w-full border-b dark:border-neutral-500" />
          <p className="w-full text-center text-xs font-medium dark:text-neutral-500">
            Or register with
          </p>
          <div className="h-1 w-full border-b dark:border-neutral-500" />
        </div>
        <div className="flex w-full gap-4">
          <button className="card-hover flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 dark:bg-neutral-800">
            <FaGoogle />
            <span>Google</span>
          </button>
          <button className="card-hover flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 dark:bg-neutral-800">
            <FaGithub />
            <span>Github</span>
          </button>
        </div>
        <p className="text-sm font-medium dark:text-neutral-500">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-semibold dark:text-neutral-300"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
