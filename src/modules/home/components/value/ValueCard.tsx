interface ValueCardProps {
  icon: JSX.Element;
  title?: string;
  description?: string;
  [propname: string]: React.ReactNode | string | undefined;
}

const ValueCard = ({ icon, title, description, ...others }: ValueCardProps) => {
  return (
    // <div className="rounded-2xl bg-gradient-to-br p-0.5 dark:from-purple-500 dark:via-pink-500 dark:to-yellow-500 hover:scale-105 duration-300 transition">
    <div
      className="card-hover flex flex-col gap-5 rounded-2xl border-2 border-neutral-300 bg-neutral-200 bg-gradient-to-b from-neutral-200 to-neutral-100 p-8 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900"
      {...others}
    >
      <div className="w-fit rounded-lg bg-gradient-to-br p-2 from-purple-500 via-pink-500 to-yellow-500">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
          {title}
        </h3>
        <p className="text-sm  text-neutral-500">
          {description}
        </p>
      </div>
    </div>
    // </div>
  );
};

export default ValueCard;
