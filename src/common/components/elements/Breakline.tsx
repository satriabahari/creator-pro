import cn from "@/common/libs/clsxm";

interface BreaklineProps {
  className?: string;
  [propName: string]: string | undefined;
}

const Breakline = ({ className = "", ...others }: BreaklineProps) => {
  return (
    <div
      className={cn("border border-neutral-300", className)}
      {...others}
    ></div>
  );
};

export default Breakline;
