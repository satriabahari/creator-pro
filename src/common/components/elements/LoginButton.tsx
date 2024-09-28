import Link from "next/link";

import Button from "./Button";

const LoginButton = () => {
  return (
    <Button className="border-2 border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 py-1 font-semibold text-neutral-50 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900 lg:block">
      <Link href="/auth/login" className="text-gradient-color">
        Login
      </Link>
    </Button>
  );
};

export default LoginButton;
