export default function EngagementStats() {
  const stats = [
    { label: "愛心", value: "96", trend: "+10.00% ", trendText: "比較上期" },
    { label: "留言", value: "96", trend: "+10.00% ", trendText: "比較上期" },
    { label: "轉發", value: "96", trend: "+10.00% ", trendText: "比較上期" },
    { label: "引用", value: "96", trend: "+10.00% ", trendText: "比較上期" },
    { label: "分享", value: "96", trend: "+10.00% ", trendText: "比較上期" },
  ];

  return (
    <section className="grid gap-4 p-4  bg-white rounded-xl border border-gray-200 grid-cols-[repeat(5,1fr)] max-md:grid-cols-[repeat(3,1fr)] max-sm:grid-cols-[1fr]">
      {stats.map((stat, index) => (
        <div key={index} className="">
          <h3 className="mb-2 text-base font-medium text-gray-600">
            {stat.label}
          </h3>
          <p className="text-2xl font-semibold text-gray-950">{stat.value}</p>
          <p className="text-sm text-gray-400 font-normal">
            {stat.trend}
            <span className="text-xs text-gray-400">{stat.trendText}</span>
          </p>
        </div>
      ))}
    </section>
  );
}
