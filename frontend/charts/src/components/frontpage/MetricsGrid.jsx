export default function MetricsGrid() {
  return (
    <section className="grid gap-4 mb-6 grid-cols-[repeat(3,1fr)] max-md:grid-cols-[1fr] max-sm:grid-cols-[1fr]">
      <MetricCard label="主頁瀏覽數" value="12,240" change="+10% 相比上期" />
      <MetricCard label="連續發文數" value="132" change="+10% 相比上期" />
      <MetricCard label="總串文數" value="20" change="+10% 相比上期" />
    </section>
  );
}

function MetricCard({ label, value, change }) {
  return (
    <article className="p-4 bg-white rounded-xl border border-gray-200">
      <h3 className="text-base font-medium text-gray-600">{label}</h3>
      <div className="">
        <p className="mt-2 text-2xl text-gray-950 font-semibold font-['Poppins-SemiBold'] ">
          {value}
        </p>
        <span className="text-gray-950 text-xs font-normal font-['Noto Sans CJK TC'] bg-blue-100 px-2 py-1 rounded">
          {change}
        </span>
      </div>
    </article>
  );
}
