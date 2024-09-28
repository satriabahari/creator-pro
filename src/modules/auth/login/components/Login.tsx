import React from "react";
import LoginForm from "./LoginForm";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import ThemeSwitcher from "@/common/components/elements/ThemeSwitcher";
import LoginInfo from "./LoginInfo";

const Login = () => {
  return (
    <section
      id="login"
      className="relative grid min-h-screen grid-cols-1 grid-rows-2 overflow-hidden lg:grid-cols-2 lg:grid-rows-1"
    >
      <Link
        href="/"
        className="card-hover absolute left-4 top-4 rounded-full border-2 border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 p-2 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900"
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
      <LoginForm />
      <LoginInfo/>
    </section>
  );
};

export default Login;
