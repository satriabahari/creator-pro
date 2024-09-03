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
      <div className="rounded-lg bg-gradient-to-br transition duration-300 hover:scale-110 active:scale-90 dark:from-purple-500 dark:via-pink-500 dark:to-yellow-500">
        <Button className="bg-gradient-to-b text-sm font-medium text-neutral-50 dark:from-neutral-800 dark:to-neutral-900">
          Login
        </Button>
      </div>
    </div>
  );
};

export default ActionButtons;
