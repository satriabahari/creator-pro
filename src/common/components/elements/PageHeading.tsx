interface PageHeadingProps {
  title: string;
  description?: string;
}

const PageHeading = ({ title, description }: PageHeadingProps) => {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-5xl font-semibold" data-aos="zoom-in">{title}</h1>
      <p className="text-neutral-600" data-aos="fade-down" data-aos-delay="200">{description}</p>
    </div>
  );
};

export default PageHeading;
