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
      className="flex w-fit flex-col items-center justify-center space-y-6 text-center"
      {...others}
    >
      {/* <h1 className="bg-gradient-to-r bg-clip-text text-4xl font-semibold text-transparent dark:from-purple-500 dark:via-pink-500 dark:to-yellow-500"> */}
      {label && <ButtonLabel>{label}</ButtonLabel>}
      <h1 className="text-4xl font-semibold dark:text-neutral-300">{title}</h1>
      <p className="text-neutral-600 dark:text-neutral-500">{description}</p>
    </div>
  );
};

export default SectionHeading;
