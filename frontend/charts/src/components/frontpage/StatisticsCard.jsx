import FansCard from "./FansCard";
import BestThreads from "./BestThreads";

export default function StatisticsCards() {
  return (
    <div className="flex gap-4">
      {/* 左側粉絲卡片 */}
      <div className="w-[356px] h-[244px]">
        <FansCard />
      </div>

      {/* 右側最佳串文卡片 */}
      <div className="w-[762px] h-[244px]">
        <BestThreads />
      </div>
    </div>
  );
}
