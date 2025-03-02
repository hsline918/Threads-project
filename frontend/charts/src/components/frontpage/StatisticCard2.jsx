import React from "react";

const StatisticCard2 = () => {
  return (
    <div className="flex flex-col gap-6 p-4 bg-white border border-[#E5E7EB] rounded-[10px]">
      {/* 上方統計數據區 */}
      <div className="flex gap-4">
        {/* 主頁瀏覽數 */}
        <div className="flex-1 p-4 bg-white border border-[#E5E7EB] rounded-[10px]">
          <div className="flex flex-col gap-2">
            <div className="text-[#4A556A] text-base">主頁瀏覽數</div>
            <div className="flex flex-col gap-1">
              <div className="text-[#03071C] text-2xl font-medium">12,240</div>
              <div className="inline-flex gap-1 px-2 py-0.5 bg-[#DBEAFF] rounded">
                <span className="text-[#03071C] text-sm">+10%</span>
                <span className="text-[#03071C] text-sm">相比上期</span>
              </div>
            </div>
          </div>
        </div>

        {/* 連續發文數 */}
        <div className="flex-1 p-4 bg-white border border-[#E5E7EB] rounded-[10px]">
          <div className="flex flex-col gap-2">
            <div className="text-[#4A556A] text-base">連續發文數</div>
            <div className="flex flex-col gap-1">
              <div className="text-[#03071C] text-2xl font-medium">132</div>
              <div className="inline-flex gap-1 px-2 py-0.5 bg-[#DBEAFF] rounded">
                <span className="text-[#03071C] text-sm">+10%</span>
                <span className="text-[#03071C] text-sm">相比上期</span>
              </div>
            </div>
          </div>
        </div>

        {/* 總串文數 */}
        <div className="flex-1 p-4 bg-white border border-[#E5E7EB] rounded-[10px]">
          <div className="flex flex-col gap-2">
            <div className="text-[#4A556A] text-base">總串文數</div>
            <div className="flex flex-col gap-1">
              <div className="text-[#03071C] text-2xl font-medium">20</div>
              <div className="inline-flex gap-1 px-2 py-0.5 bg-[#DBEAFF] rounded">
                <span className="text-[#03071C] text-sm">+10%</span>
                <span className="text-[#03071C] text-sm">相比上期</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 下方互動指標區 */}
      <div className="flex justify-between p-4 border border-[#E5E7EB] rounded-[10px]">
        {["愛心", "留言", "轉發", "引用", "分享"].map((label) => (
          <div key={label} className="flex flex-col gap-2">
            <div className="text-[#4A556A] text-base">{label}</div>
            <div className="flex flex-col gap-1">
              <div className="text-[#03071C] text-2xl font-medium">96</div>
              <div className="flex gap-1 items-center">
                <span className="text-[#99A1B3] text-base">+10.00%</span>
                <span className="text-[#99A1B3] text-sm">比較上期</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticCard2;
