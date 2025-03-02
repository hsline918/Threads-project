export default function FansCard() {
  return (
    <div className="flex flex-col p-4 bg-[#DFF2FE] rounded-[10px] gap-5 h-full">
      {/* 標題區域 */}
      <div className="flex items-center gap-1">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="iconset1/users-round">
            <path
              id="Vector"
              d="M18 21C18 18.8783 17.1571 16.8434 15.6569 15.3431C14.1566 13.8429 12.1217 13 10 13M10 13C7.87827 13 5.84344 13.8429 4.34315 15.3431C2.84285 16.8434 2 18.8783 2 21M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13ZM22 20C22 16.63 20 13.5 18 12C18.6574 11.5068 19.1831 10.8591 19.5306 10.1143C19.878 9.36945 20.0365 8.55047 19.992 7.7298C19.9475 6.90913 19.7014 6.11209 19.2755 5.4092C18.8495 4.70631 18.2569 4.11926 17.55 3.7"
              stroke="#030712"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
        <span className="text-[#030712]">粉絲</span>
      </div>

      {/* 內容區域 */}
      <div className="flex gap-2 flex-1">
        {/* 左側數據 */}
        <div className="flex flex-col gap-1">
          <div className="text-[32px] text-[#030712] font-bold">600</div>
          <div className="bg-[#DBE9FE] px-2 py-1 rounded text-[#030712] text-sm">
            +50% 相比上個月
          </div>
        </div>

        {/* 右側圖表 */}
        {/* <div className="flex-1"> */}
        {/* <div className="h-[80px] w-full border-[#D1D5DC] relative"> */}
        {/* 水平線 */}
        {/* <div className="absolute top-1/3 w-full border-t border-[#4A556A]" />
            <div className="absolute top-2/3 w-full border-t border-[#4A556A]" /> */}

        {/* 趨勢線，這裡需要用recharts */}
        {/* <div className="absolute inset-0 p-1">
              <svg width="100%" height="100%" preserveAspectRatio="none">
                <path
                  d="M1 70 Q 55 20, 110 40 T 220 10"
                  stroke="#8EC4FF"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div> */}
        {/* </div> */}
      </div>
    </div>
    // </div>
  );
}
