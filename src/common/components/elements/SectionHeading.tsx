interface SectionHeadingProps {
  title: string;
  description?: string;
}

const SectionHeading = ({ title, description }: SectionHeadingProps) => {
  return (
    <div className="m-auto w-fit space-y-4 text-center">
      {/* <h1 className="bg-gradient-to-r bg-clip-text text-4xl font-semibold text-transparent dark:from-purple-500 dark:via-pink-500 dark:to-yellow-500"> */}
      <h1 className="text-4xl font-semibold dark:text-neutral-300">{title}</h1>
      <p className="text-neutral-600 dark:text-neutral-500">{description}</p>
    </div>
  );
};

export default SectionHeading;
