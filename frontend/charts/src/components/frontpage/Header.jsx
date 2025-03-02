export default function Header() {
  return (
    <div className="flex items-center gap-2 p-4">
      {/* Logo圓圈和文字組合 */}
      <div className="flex items-center gap-2">
        {/* Logo圓圈 */}
        <div className="w-6 h-6 rounded-full bg-[#030712]" />

        {/* 標題文字 */}
        <span className="text-[#030712] text-lg font-medium">Enthread</span>
      </div>
    </div>
  );
}
