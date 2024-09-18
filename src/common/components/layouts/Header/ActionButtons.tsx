import Link from "next/link";
import Button from "../../elements/Button";
import LocaleSwitcher from "../../elements/LocaleSwitcher";
import ThemeSwitcher from "../../elements/ThemeSwitcher";

const ActionButtons = () => {
  return (
    <div className="flex items-center justify-center gap-8">
      <div className="flex items-center gap-4">
        <LocaleSwitcher />
        <ThemeSwitcher />
      </div>
      <Button className="border-2 border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 py-1 font-semibold text-neutral-50 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900">
        <Link href="/auth/login" className="text-gradient-color">
          Login
        </Link>
      </Button>
    </div>
  );
};

export default ActionButtons;
