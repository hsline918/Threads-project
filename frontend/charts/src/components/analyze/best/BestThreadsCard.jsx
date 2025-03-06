import {
  Trophy,
  ChevronDown,
  Eye,
  MessageCircle,
  Heart,
  Repeat2,
  MessageSquareQuote,
  PlusCircle,
} from "lucide-react";

const BestThreadsCard = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-white rounded-[10px] border border-[#E5E7EB] p-4">
        <div className="flex items-center gap-2 mb-6">
          <div className="flex items-center gap-2">
            <Trophy size={24} color="#030712" />
            <span className="font-semibold text-[#030712]">最佳串文</span>
          </div>

          <button className="h-9 px-4 py-2 bg-white rounded-[10px] border border-gray-200 justify-center items-center gap-1 inline-flex">
            <span className="text-gray-950 text-sm font-medium font-['Noto Sans CJK TC']">
              最多瀏覽
            </span>
            <ChevronDown size={20} color="#030712" />
          </button>
        </div>

        <div className="border-b border-[#E5E7EB] pb-4 mb-4">
          <div className="h-[26px] px-2 py-1 bg-gray-200 rounded justify-start items-center gap-1 inline-flex mb-2">
            <div className="text-gray-950 text-xs font-normal font-['Poppins']">
              心情
            </div>
          </div>
          <div className="text-[#4a5565] text-base font-normal font-['Noto Sans CJK TC'] leading-normal">
            Threads 儀表板開發日記Day7 - 敏感資訊放在.env管理並使用.gitignore
            <br />
            今天整理了一下程式碼發現之前用的一些access token
          </div>
        </div>

        <div className="flex gap-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <Eye size={20} color="#4A5565" />
              <span className="text-[#4a5565] text-base font-medium font-['Noto Sans CJK TC']">
                瀏覽數
              </span>
            </div>
            <div className="text-gray-950 text-2xl font-semibold font-['Poppins SemiBold'] ">
              320,000
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <MessageCircle size={20} color="#4A5565" />
              <span className="text-[#4a5565] text-base font-medium font-['Noto Sans CJK TC']">
                留言
              </span>
            </div>
            <div className="text-gray-950 text-2xl font-semibold font-['Poppins SemiBold'] ">
              888
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <Heart size={20} color="#4A5565" />
              <span className="text-[#4a5565] text-base font-medium font-['Noto Sans CJK TC']">
                回覆數
              </span>
            </div>
            <div className="text-gray-950 text-2xl font-semibold font-['Poppins SemiBold'] ">
              96
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <Repeat2 size={20} color="#4A5565" />
              <span className="text-[#4a5565] text-base font-medium font-['Noto Sans CJK TC']">
                轉發
              </span>
            </div>
            <div className="text-gray-950 text-2xl font-semibold font-['Poppins SemiBold'] ">
              96
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <MessageSquareQuote size={20} color="#4A5565" />
              <span className="text-[#4a5565] text-base font-medium font-['Noto Sans CJK TC']">
                引用
              </span>
            </div>
            <div className="text-gray-950 text-2xl font-semibold font-['Poppins SemiBold']">
              96
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[10px] border border-[#E5E7EB] py-3 flex justify-center">
        <button className="flex items-center gap-1 cursor-pointer bg-transparent border-0">
          <PlusCircle size={24} color="#030712" />
          <span className="text-gray-950 text-sm font-medium font-['Noto Sans CJK TC']">
            增加觀察串文
          </span>
        </button>
      </div>
    </div>
  );
};

export default BestThreadsCard;
