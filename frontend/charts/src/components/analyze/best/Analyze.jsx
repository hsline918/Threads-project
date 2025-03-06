import Layout from "../../layout/Layout";
import PageHeader from "../../layout/PageHeader";
import BestThreadsCard from "./BestThreadsCard";
// import Line from "../../layout/Line";
import { ChevronDown } from "lucide-react";

export default function Analyze() {
  return (
    <Layout>
      <div className="flex-1">
        <PageHeader title="分析" />
        <Line />

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="text-gray-950 text-2xl font-medium font-['Noto Sans CJK TC']">
              最佳串文
            </div>
          </div>
          <button className="h-[37px] px-6 py-2 bg-white rounded-[10px] border border-gray-200 justify-center items-center gap-1 inline-flex">
            <span className="text-gray-950 text-sm font-medium font-['Noto Sans CJK TC']">
              今天
            </span>
            <ChevronDown size={20} color="#030712" />
          </button>
        </div>

        <div className="mt-6">
          <BestThreadsCard />
        </div>
      </div>
    </Layout>
  );
}
