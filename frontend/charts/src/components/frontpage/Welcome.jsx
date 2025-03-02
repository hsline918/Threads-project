export default function Welcome() {
  return (
    <div className=" w-[288px]">
      {/* 用戶資訊區塊 */}
      <div className="flex items-center gap-2 w-[220px] h-[40px]">
        {/* 頭像 */}
        <div className="relative w-[40px] h-[40px]">
          <div className="w-[40px] h-[40px] rounded-full bg-[#BEDCFF]" />
          <span className="absolute top-[8px] left-[16px] text-[#030712]">
            J
          </span>
        </div>

        {/* 用戶名稱 */}
        <span className="text-[#030712] text-[16px]">James Fok</span>
      </div>

      {/* 歡迎文字 */}
      <h1 className="mt-[8px] text-[#030712] text-[24px] font-medium">
        哈囉，歡迎回來！
      </h1>
    </div>
  );
}
