interface ValueCardProps {
  icon: JSX.Element;
  title?: string;
  description?: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-neutral-200 p-8">
      <div className="w-fit rounded-lg bg-neutral-400 p-2">{icon}</div>
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-neutral-800">{title}</h3>
        <p className="text-neutral-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
