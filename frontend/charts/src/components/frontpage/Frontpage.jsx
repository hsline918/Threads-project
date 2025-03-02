import StatisticsCards from "./StatisticsCard";
import StatisticCards2 from "./StatisticCard2";
import Header from "./Header";
import NavBar from "./NavBar";
import Welcome from "./Welcome";

export default function FrontPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <Header />

      {/* 主要內容區 - 使用 flex 布局 */}
      <div className="flex">
        {/* 左側導航欄 */}
        <NavBar />

        {/* 右側內容區 */}
        <div className="flex-1 p-8">
          {/* 歡迎語區塊 */}
          <Welcome />

          {/* 總覽標題 */}
          <div className="mt-12 text-[#030712] text-[16px]">總覽</div>

          {/* 統計卡片區 */}
          <div className="mt-6">
            <StatisticsCards />
            <StatisticCards2 />
          </div>
        </div>
      </div>
    </div>
  );
}
