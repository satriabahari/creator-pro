import { InfoItemProps } from "@/common/types/info";
import { cn } from "@/lib/utils";
import { FaArrowTrendUp as ArrowIcon } from "react-icons/fa6";

const InfoCard = ({
  title,
  count,
  unit,
  percent,
  backgroundPercent,
  icon,
  ...others
}: InfoItemProps) => {
  return (
    <div
      className="lg:col-span-2 space-y-4 rounded-xl border-2 border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 p-4 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900"
      {...others}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">
          {title}
        </span>
        <div>
          <div
            className={cn(
              "flex items-center gap-1 rounded-lg px-2 py-1",
              backgroundPercent,
            )}
          >
            <span className="text-xs text-neutral-700 dark:text-neutral-300">
              {percent}%
            </span>
            <ArrowIcon size={16} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-end gap-2">
          <span className="text-xl font-medium text-neutral-900 dark:text-neutral-50">{count}</span>
          <span className="text-sm text-neutral-500">{unit}</span>
        </div>
        <div className="bg-gradient-color rounded-lg p-2">{icon}</div>
      </div>
    </div>
  );
};

export default InfoCard;
