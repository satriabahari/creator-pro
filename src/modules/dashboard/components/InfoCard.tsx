import { InfoItemProps } from "@/common/types/info";
import { cn } from "@/lib/utils";
import { FaArrowTrendUp as ArrowIcon } from "react-icons/fa6";

const InfoCard = ({
  title,
  count,
  unit,
  percent,
  textColor,
  backgroundPercent,
  icon,
  ...others
}: InfoItemProps) => {
  return (
    <div
      className="space-y-4 rounded-xl border-2 border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 p-4 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900 md:col-span-2"
      {...others}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {title}
        </span>
        <div>
          <div
            className={cn(
              "flex items-center gap-1 rounded-md border px-2 py-1",
              backgroundPercent,
            )}
          >
            <span className="text-xs">{percent}%</span>
            <ArrowIcon size={16} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-end gap-2">
          <span className="text-xl font-medium text-neutral-900 dark:text-neutral-50">
            {count}
          </span>
          <span className="text-sm text-neutral-500">{unit}</span>
        </div>
        <div className={cn("rounded-lg border p-2", backgroundPercent)}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
