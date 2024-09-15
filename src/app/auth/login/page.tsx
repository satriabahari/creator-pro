import ThemeSwitcher from "@/common/components/elements/ThemeSwitcher";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaGithub, FaGoogle } from "react-icons/fa";
import { SiContentstack as LogoIcon } from "react-icons/si";

const LoginPage = () => {
  return (
    <section
      id="login"
      className="relative grid h-screen grid-cols-2 overflow-hidden"
    >
      {/* Back Button */}
      <Link
        href="/"
        className="card-hover absolute left-4 top-4 rounded-full border-2 bg-gradient-to-b p-2 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900"
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-anchor="#login"
      >
        <FaArrowLeft />
      </Link>

      <ThemeSwitcher
        className="absolute right-4 top-4 rounded-full"
        data-aos="fade-right"
        data-aos-delay="400"
        data-aos-anchor="#login"
      />

      {/* Login */}
      <div className="flex flex-col items-center justify-center gap-5 px-32">
        <div
          className="w-fit rounded-lg bg-gradient-to-br p-1.5 dark:from-purple-400 dark:via-pink-400 dark:to-yellow-400"
          data-aos="zoom-in"
          data-aos-anchor="#login"
          data-aos-delay="400"
        >
          <LogoIcon size={32} />
        </div>
        <div className="space-y-2 text-center">
          <h2
            className="text-xl font-semibold"
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-anchor="#login"
          >
            Welcome back to content creators AI
          </h2>
          <p
            className="text-sm dark:text-neutral-500"
            data-aos="fade-down"
            data-aos-delay="600"
            data-aos-anchor="#login"
          >
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="w-full space-y-1">
          <p
            className="font-medium dark:text-neutral-300"
            data-aos="zoom-out"
            data-aos-delay="800"
            data-aos-anchor="#login"
          >
            Email
          </p>
          <input
            type="email"
            className="w-full rounded-lg border-none px-4 py-2 outline-none placeholder:text-neutral-500 dark:bg-neutral-800"
            placeholder="Enter your email address"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-anchor="#login"
          />
        </div>
        <div className="w-full space-y-1">
          <p
            className="font-medium dark:text-neutral-300"
            data-aos="zoom-out"
            data-aos-delay="800"
            data-aos-anchor="#login"
          >
            Password
          </p>
          <input
            type="password"
            className="w-full rounded-lg border-none px-4 py-2 outline-none placeholder:text-neutral-500 dark:bg-neutral-800"
            placeholder="Enter your password"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-anchor="#login"
          />
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-2">
            <input
              type="checkbox"
              data-aos="zoom-in"
              data-aos-delay="800"
              data-aos-anchor="#login"
            />
            <p
              className="text-sm text-neutral-500"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-anchor="#login"
            >
              Remember me
            </p>
          </div>
          <p
            className="text-sm font-semibold dark:text-neutral-300"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-anchor="#login"
          >
            Forgot Password
          </p>
        </div>
        <button
          className="card-hover w-full rounded-lg border-2 bg-gradient-to-b px-4 py-2 font-medium dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900"
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-anchor="#login"
        >
          <span className="text-gradient-color">Sign in</span>
        </button>
        <div className="flex w-full items-center gap-2">
          <div
            className="h-1 w-full border-b dark:border-neutral-500"
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-anchor="#login"
          />
          <p
            className="w-full text-center text-xs font-medium dark:text-neutral-500"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-anchor="#login"
          >
            Or login with
          </p>
          <div
            className="h-1 w-full border-b dark:border-neutral-500"
            data-aos="fade-left"
            data-aos-delay="800"
            data-aos-anchor="#login"
          />
        </div>
        <div className="flex w-full gap-4">
          <button
            className="card-hover flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 dark:bg-neutral-800"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-anchor="#login"
          >
            <FaGoogle />
            <span>Google</span>
          </button>
          <button
            className="card-hover flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 dark:bg-neutral-800"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-anchor="#login"
          >
            <FaGithub />
            <span>Github</span>
          </button>
        </div>
        <p
          className="text-sm font-medium dark:text-neutral-500"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-anchor="#login"
        >
          Dont have an account?{" "}
          <Link
            href="/auth/register"
            className="font-semibold dark:text-neutral-300"
          >
            Register
          </Link>
        </p>
      </div>

      {/* Visual */}
      <div className="flex flex-col justify-center gap-16 bg-gradient-to-b p-16 dark:from-neutral-800 dark:to-neutral-900">
        <div className="flex flex-col gap-2 text-center">
          <h2
            className="text-2xl font-semibold"
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-anchor="#login"
          >
            The simplest way to manage your content
          </h2>
          <p
            className="text-sm dark:text-neutral-500"
            data-aos="fade-down"
            data-aos-delay="600"
            data-aos-anchor="#login"
          >
            Enter your credential to accsess your account
          </p>
        </div>

        <div className="relative">
          <Image
            src="/images/dashboard.png"
            width={500}
            height={500}
            alt="login"
            className="rounded-2xl border-2 dark:border-neutral-700"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-anchor="#login"
          />
          <Image
            src="/images/dashboard.png"
            width={250}
            height={250}
            alt="login"
            className="absolute -right-6 top-8 translate-y-1/2"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-anchor="#login"
          />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
