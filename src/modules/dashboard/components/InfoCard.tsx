import { InfoItemProps } from "@/common/types/info";
import { FaArrowTrendUp as ArrowIcon } from "react-icons/fa6";
const InfoCard = ({ title, count, unit, percent, icon }: InfoItemProps) => {
  return (
    <div className="space-y-4 rounded-2xl bg-neutral-200 p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm">{title}</span>
        <div>
          <div className="flex items-center gap-1 bg-purple-600/15 rounded-lg py-1 px-2">
            <span className="text-xs">{percent}%</span>
            <ArrowIcon size={16}/>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-end gap-2">
          <span className="text-xl font-medium">{count}</span>
          <span className="text-sm text-neutral-500">{unit}</span>
        </div>
        <div className="bg-neutral-50 rounded-lg p-2">{icon}</div>
      </div>
    </div>
  );
};

export default InfoCard;
