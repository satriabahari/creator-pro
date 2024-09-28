import Link from "next/link";
import { SiContentstack as LogoIcon } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5 px-16 md:px-32">
      <div
        className="w-fit rounded-lg bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-400 p-1.5"
        data-aos="zoom-in"
        data-aos-anchor="#login"
        data-aos-delay="400"
      >
        <LogoIcon size={32} />
      </div>
      <div className="space-y-2 text-center">
        <h2
          className="text-xl font-semibold text-neutral-700 dark:text-neutral-300"
          data-aos="fade-down"
          data-aos-delay="400"
          data-aos-anchor="#login"
        >
          Login to Your Account
        </h2>
        <p
          className="text-sm text-neutral-500"
          data-aos="fade-down"
          data-aos-delay="600"
          data-aos-anchor="#login"
        >
          Enter your credentials to access your account and manage your content.
        </p>
      </div>
      <div className="w-full space-y-1">
        <p
          className="font-medium text-neutral-700 dark:text-neutral-300"
          data-aos="zoom-out"
          data-aos-delay="800"
          data-aos-anchor="#login"
        >
          Email
        </p>
        <input
          type="email"
          className="w-full rounded-lg border-none bg-neutral-200 px-4 py-2 outline-none placeholder:text-neutral-500 dark:bg-neutral-800"
          placeholder="Enter your email address"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-anchor="#login"
        />
      </div>
      <div className="w-full space-y-1">
        <p
          className="font-medium text-neutral-700 dark:text-neutral-300"
          data-aos="zoom-out"
          data-aos-delay="800"
          data-aos-anchor="#login"
        >
          Password
        </p>
        <input
          type="password"
          className="w-full rounded-lg border-none bg-neutral-200 px-4 py-2 outline-none placeholder:text-neutral-500 dark:bg-neutral-800"
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
          className="text-sm font-semibold text-neutral-700 dark:text-neutral-300"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-anchor="#login"
        >
          Forgot Password
        </p>
      </div>
      <button
        className="card-hover w-full rounded-lg border-2 bg-gradient-to-b from-neutral-200 to-neutral-100 px-4 py-2 font-medium dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900"
        data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-anchor="#login"
      >
        <span className="text-gradient-color">Sign in</span>
      </button>
      <div className="flex w-full items-center gap-2">
        <div
          className="h-1 w-full border-b border-neutral-500"
          data-aos="fade-right"
          data-aos-delay="800"
          data-aos-anchor="#login"
        />
        <p
          className="w-full text-center text-xs font-medium text-neutral-500"
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-anchor="#login"
        >
          Or login with
        </p>
        <div
          className="h-1 w-full border-b border-neutral-500"
          data-aos="fade-left"
          data-aos-delay="800"
          data-aos-anchor="#login"
        />
      </div>
      <button
        className="card-hover flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-200 px-4 py-2 font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-anchor="#login"
      >
        <FaGoogle />
        <span>Google</span>
      </button>
      <p
        className="text-sm font-medium text-neutral-500"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-anchor="#login"
      >
        Dont have an account?{" "}
        <Link
          href="/auth/register"
          className="font-semibold text-neutral-700 dark:text-neutral-300"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
