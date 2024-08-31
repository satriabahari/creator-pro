interface PageHeadingProps {
  title: string;
  description?: string;
}

const PageHeading = ({ title, description }: PageHeadingProps) => {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-5xl font-semibold ">{title}</h1>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
};

export default PageHeading;
