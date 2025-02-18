import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import {
  TrendingUp,
  TrendingDown,
  AlertCircle,
  CheckCircle,
  Users,
  MessageSquare,
} from "lucide-react";

const InsightsDashboard = () => {
  const data = [
    { value: 4000 },
    { value: 3000 },
    { value: 5000 },
    { value: 2780 },
    { value: 4890 },
    { value: 3390 },
    { value: 6000 },
  ];

  return (
    <div className="p-6 bg-slate-50">
      {/* 主要洞察區 */}
      <div className="mb-8 bg-white rounded-xl p-6 border border-slate-200">
        <h2 className="text-xl font-semibold mb-4">本週重要發現</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-100">
              <TrendingUp className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <h3 className="font-medium text-green-900">週度增長創新高</h3>
                <p className="text-green-700 text-sm">
                  本週串文互動率達到 15.4%，比上週提升
                  5.2%。主要來自於技術文章的分享。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-amber-50 rounded-lg border border-amber-100">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-1" />
              <div>
                <h3 className="font-medium text-amber-900">需要關注的地方</h3>
                <p className="text-amber-700 text-sm">
                  深夜發文（22-24時）的互動率偏低，建議調整發文時間至 9-11
                  時效果會更好。
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium text-blue-900">內容優化建議</h3>
                <p className="text-blue-700 text-sm">
                  加入程式碼範例的文章平均獲得比一般文章多 2.3
                  倍的互動，建議持續此策略。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg border border-purple-100">
              <Users className="w-5 h-5 text-purple-600 mt-1" />
              <div>
                <h3 className="font-medium text-purple-900">讀者群洞察</h3>
                <p className="text-purple-700 text-sm">
                  最活躍的讀者群來自前端開發社群，對 React 和 UI
                  設計主題特別感興趣。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 行動建議區 */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">本週最佳表現串文</h2>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
              279 互動
            </span>
          </div>
          <div className="space-y-3">
            <p className="text-slate-600">今天發現setTimeInterval的坑....</p>
            <div className="flex items-center space-x-4 text-sm text-slate-500">
              <span className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>279 瀏覽</span>
              </span>
              <span className="flex items-center space-x-1">
                <MessageSquare className="w-4 h-4" />
                <span>2 評論</span>
              </span>
            </div>
            <div className="text-sm text-slate-600">
              <span className="font-medium">成功因素：</span>
              具體的問題描述 + 清晰的解決方案 + 適當的程式碼範例
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-lg font-semibold mb-4">下週建議行動方向</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-slate-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>在上午 9-11 點發布技術相關文章</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>增加 React Hooks 相關的實戰案例分享</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>對熱門文章進行系列化擴展</span>
            </div>
          </div>
        </div>
      </div>

      {/* 趨勢圖表區 */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold">互動趨勢</h2>
            <p className="text-sm text-slate-500">整體呈現穩定上升趨勢</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-green-600">+12.3%</span>
            <TrendingUp className="w-4 h-4 text-green-600" />
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
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
      </div>
    </div>
  );
};

export default InsightsDashboard;
