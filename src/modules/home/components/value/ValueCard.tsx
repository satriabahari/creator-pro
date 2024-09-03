interface ValueCardProps {
  icon: JSX.Element;
  title?: string;
  description?: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <div className="rounded-2xl bg-gradient-to-br p-0.5 dark:from-purple-500 dark:via-pink-500 dark:to-yellow-500 hover:scale-105 duration-300 transition">
      <div className="flex flex-col gap-5 rounded-2xl bg-neutral-200 bg-gradient-to-b p-8 dark:from-neutral-800 dark:to-neutral-900">
        <div className="w-fit rounded-lg bg-neutral-400 bg-gradient-to-br p-2 dark:from-purple-500 dark:via-pink-500 dark:to-yellow-500">
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-300">
            {title}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValueCard;
