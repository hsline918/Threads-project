import { Trophy, UsersRound } from "lucide-react";

export default function StatsGrid() {
  return (
    <section className="grid gap-4 mb-6 grid-cols-[356px_1fr] max-md:grid-cols-[1fr] max-sm:grid-cols-[1fr]">
      <StatCard
        type="followers"
        label="粉絲"
        value="600"
        change="+10% 相比上期"
        chart={true}
      />
      <BestThreadsCard
        type="featured"
        label="最佳串文"
        value="434"
        subtext="互動數"
        content="Threads 儀表板開發日記Day7 - 敏感資訊放在.env管理並使用.gitignore 今天整理了一下程式碼發現之前用的一些access token"
        date="2025-3-1 8:32 p.m."
      />
    </section>
  );
}

function StatCard({
  type,
  label,
  value,
  change,
  subtext,
  content,
  date,
  chart,
}) {
  return (
    <article className="p-4 rounded-xl bg-[#dff2fe]">
      <header className="flex items-center mb-[21.5px]">
        {type === "followers" ? (
          <UsersRound />
        ) : (
          <i className="ti ti-star mr-2 w-6 h-6" />
        )}
        <h3 className="ml-1 text-base font-medium text-gray-600">{label}</h3>
      </header>
      <div className="mt-6">
        <p className="text-2xl font-semibold">{value}</p>
        {change && (
          <span className="px-2 py-0 mt-1 text-xs bg-blue-100 rounded">
            {change}
          </span>
        )}
        {subtext && <p className="mt-1 text-sm text-gray-400">{subtext}</p>}
        {content && (
          <>
            <p className="mt-4 text-sm leading-5 text-white">{content}</p>
            <p className="mt-2 text-sm text-gray-400">{date}</p>
          </>
        )}
      </div>
    </article>
  );
}

function BestThreadsCard({ type, label, value, subtext, content, date }) {
  return (
    <div className="w-full h-[244px] px-4 pt-4 pb-6 bg-gradient-to-r from-[#312c85] to-[#2a2371] rounded-[10px] flex-col justify-start items-start gap-2 inline-flex">
      <div className="self-stretch h-[156px] flex-col justify-start items-start gap-2 flex">
        <div className="justify-start items-center gap-1 inline-flex">
          <Trophy color="white" />
          <div className="text-gray-200 text-base font-medium font-['Noto Sans CJK TC']">
            {label}
          </div>
        </div>
        <div className="self-stretch h-[124px] flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch h-[53px] flex-col justify-start items-start flex">
            <div className="self-stretch text-white text-2xl font-semibold font-['Poppins SemiBold'] ">
              {value}
            </div>
            <div className="text-[#99a1af] text-sm font-normal font-['Poppins']">
              {subtext}
            </div>
          </div>
          <div className="self-stretch h-[63px] flex-col justify-start items-start flex">
            <div className="self-stretch h-[42px] flex-col justify-start items-start gap-1 flex">
              <div className="text-white text-sm font-normal font-['Noto Sans CJK TC'] leading-[21px] w-[450px]">
                {content}
              </div>
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="text-[#99a1af] text-sm font-normal font-['Poppins']">
                {date}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-10 px-6 py-2 bg-white rounded-[32px] border border-gray-200 justify-center items-center gap-1 inline-flex">
        <div className="text-gray-950 text-sm font-medium font-['Noto Sans CJK TC']">
          分析串文
        </div>
      </div>
    </div>
  );
}
