import Button from "../../elements/Button";

import ThemeSwitcher from "./ThemeSwitcher";
import LocaleSwitcher from "./LocaleSwitcher";

const ActionButtons = () => {
  return (
    <div className="flex items-center justify-center gap-8">
      <div className="flex gap-4 items-center">
        <LocaleSwitcher />
        <ThemeSwitcher />
      </div>
      <Button className="bg-purple-600 text-sm font-medium text-neutral-50">Login</Button>
    </div>
  );
};

export default ActionButtons;
