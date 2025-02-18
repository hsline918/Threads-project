import { LineChart, Line, ResponsiveContainer } from "recharts";
import {
  Clock,
  Users,
  MessageSquare,
  Share2,
  TrendingUp,
  ArrowRight,
  Star,
  Activity,
} from "lucide-react";

const PostInsights = () => {
  const performanceData = [
    { value: 30 },
    { value: 45 },
    { value: 80 },
    { value: 120 },
    { value: 150 },
    { value: 180 },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      {/* 貼文預覽 */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex-shrink-0" />
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h2 className="font-semibold text-lg">
                今天在寫程式又發現一件有趣的事
              </h2>
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                表現優異
              </span>
            </div>
            <p className="text-slate-600 mb-3">
              常弄把一個主要功能寫好之後，我發現我卡在UI畫面的呈現很久...
            </p>
            <div className="flex items-center space-x-4 text-sm text-slate-500">
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>2小時前</span>
              </span>
              <span className="flex items-center space-x-1">
                <Activity className="w-4 h-4" />
                <span>高於平均 45%</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 關鍵表現指標 */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          {
            icon: Users,
            label: "觸及人數",
            value: "2,345",
            change: "+15.4%",
            positive: true,
          },
          {
            icon: Star,
            label: "互動率",
            value: "8.7%",
            change: "+2.3%",
            positive: true,
          },
          {
            icon: MessageSquare,
            label: "留言數",
            value: "28",
            change: "-5.4%",
            positive: false,
          },
          {
            icon: Share2,
            label: "分享數",
            value: "15",
            change: "+12.8%",
            positive: true,
          },
        ].map((metric, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl border border-slate-200"
          >
            <div className="flex items-start justify-between mb-2">
              <metric.icon className="w-5 h-5 text-slate-600" />
              <span
                className={`text-sm ${
                  metric.positive ? "text-green-600" : "text-red-600"
                }`}
              >
                {metric.change}
              </span>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="text-sm text-slate-600">{metric.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* 內容洞察 */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold mb-4">內容表現洞察</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <TrendingUp className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <p className="text-slate-800 mb-1">高互動原因分析</p>
                <p className="text-sm text-slate-600">
                  文章前半段的程式碼示例獲得最多互動，顯示讀者對實作細節特別有興趣。
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="text-slate-800 mb-1">最佳發文時間</p>
                <p className="text-sm text-slate-600">
                  這篇在早上 10:30 發布，正好是讀者活躍度最高的時段。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold mb-4">互動趨勢</h3>
          <div className="h-48 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#6366F1"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">發布後 6 小時的互動趨勢</span>
            <span className="text-green-600 font-medium">持續上升中</span>
          </div>
        </div>
      </div>

      {/* 優化建議 */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h3 className="text-lg font-semibold mb-4">內容優化建議</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            {
              title: "加入更多程式碼示例",
              description: "讀者對實作細節的互動率高出平均值 45%",
            },
            {
              title: "增加討論串的深度",
              description: "回覆留言可提升 25% 的後續互動機會",
            },
            {
              title: "考慮系列化發展",
              description: "相似主題的系列文章平均可獲得 2 倍觸及",
            },
          ].map((tip, index) => (
            <div key={index} className="p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <ArrowRight className="w-4 h-4 text-blue-600" />
                <h4 className="font-medium text-slate-800">{tip.title}</h4>
              </div>
              <p className="text-sm text-slate-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostInsights;
