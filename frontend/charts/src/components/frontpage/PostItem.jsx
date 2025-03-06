import PostStats from "./PostStats";

export default function PostItem({ author, time, tag, content, stats }) {
  return (
    <article className="pb-3 font-['Noto-Sans-CJK-TC'] ">
      <header className="flex items-center mb-2">
        <h3 className="mr-2 text-base font-medium text-gray-950">{author}</h3>
        <time className="mr-2 text-base text-gray-400">{time}</time>
        <span className="px-2 py-1 text-xs bg-gray-200 rounded ">{tag}</span>
      </header>

      <div className="flex">
        <p className="mb-4 text-sm leading-5 text-gray-700 w-[462px]">
          {content}
        </p>
        <PostStats stats={stats} />
      </div>

      <button className="px-6 py-2 h-10 text-sm font-medium bg-white border border-gray-200 cursor-pointer rounded-[32px] text-gray-950">
        分析串文
      </button>
      <hr className="mx-0 my-3 h-px border-0 bg-gray-200" />
    </article>
  );
}
