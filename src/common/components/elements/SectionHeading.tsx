import ButtonLabel from "./ButtonLabel";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  [propname: string]: React.ReactNode | string | undefined;
}

const SectionHeading = ({
  label,
  title,
  description,
  ...others
}: SectionHeadingProps) => {
  return (
    <div
      className="flex w-fit flex-col items-center justify-center space-y-3 text-center lg:space-y-6"
      {...others}
    >
      {/* <h1 className="bg-gradient-to-r bg-clip-text text-4xl font-semibold text-transparent dark:from-purple-500 dark:via-pink-500 dark:to-yellow-500"> */}
      {label && <ButtonLabel>{label}</ButtonLabel>}
      <div className="flex flex-col items-center justify-center space-y-2 lg:space-y-4">
        <h1 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 md:text-3xl lg:text-4xl">
          {title}
        </h1>
        <p className="text-sm text-neutral-500 md:w-3/4 lg:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeading;
