import { useState } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import {
  Layout,
  BarChart2,
  FileText,
  Users,
  MessageSquare,
  ChevronDown,
  Settings,
  Bell,
  Sun,
} from "lucide-react";

const ThreadsDashboard = () => {
  const [data] = useState([
    { value: 4000 },
    { value: 3000 },
    { value: 5000 },
    { value: 2780 },
    { value: 4890 },
    { value: 3390 },
    { value: 6000 },
    { value: 2390 },
    { value: 3800 },
  ]);

  return (
    <div className="flex h-screen bg-slate-50">
      {/* 左側導航 */}
      <nav className="w-64 bg-white border-r border-slate-200 p-4">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold">TD</span>
          </div>
          <span className="text-xl font-bold">Threads Dashboard</span>
        </div>

        <div className="space-y-1">
          {[
            { icon: Layout, label: "儀表板", active: true },
            { icon: BarChart2, label: "分析" },
            { icon: FileText, label: "串文" },
            { icon: Users, label: "追蹤者" },
            { icon: MessageSquare, label: "反饋" },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg cursor-pointer
                ${
                  item.active
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </nav>

      {/* 主要內容區 */}
      <main className="flex-1 overflow-auto">
        {/* 頂部導航 */}
        <div className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">嗨，歡迎回來 👋</h1>
            <p className="text-slate-600">這是您的內容數據概覽</p>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="w-5 h-5 text-slate-600" />
            <Sun className="w-5 h-5 text-slate-600" />
            <div className="w-8 h-8 bg-blue-500 rounded-full" />
          </div>
        </div>

        <div className="p-8">
          {/* 關鍵指標卡片 */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl text-white">
              <div className="flex justify-between mb-4">
                <h3 className="text-slate-400 text-sm">瀏覽量</h3>
                <span className="bg-slate-700/50 p-2 rounded-lg">
                  <BarChart2 className="w-4 h-4" />
                </span>
              </div>
              <div className="text-3xl font-bold mb-2">0</div>
              <div className="text-sm text-green-400">
                ↑ 15.4% increase this month
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-xl text-white">
              <div className="flex justify-between mb-4">
                <h3 className="text-blue-200 text-sm">讚</h3>
                <span className="bg-white/10 p-2 rounded-lg">
                  <Users className="w-4 h-4" />
                </span>
              </div>
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-sm text-blue-200">↑ 7.4% same as before</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-6 rounded-xl text-white">
              <div className="flex justify-between mb-4">
                <h3 className="text-indigo-200 text-sm">轉發</h3>
                <span className="bg-white/10 p-2 rounded-lg">
                  <MessageSquare className="w-4 h-4" />
                </span>
              </div>
              <div className="text-3xl font-bold mb-2">0</div>
              <div className="text-sm text-red-400">↓ 15.4% less activity</div>
            </div>
          </div>

          {/* 數據圖表區 */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="flex justify-between items-center mb-6">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">互動趨勢</h3>
                  <p className="text-sm text-slate-500">
                    Last 7 days analytics data
                  </p>
                </div>
                <button className="flex items-center space-x-2 text-sm text-slate-600">
                  <span>This week</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
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

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">最近串文</h3>
                <Settings className="w-5 h-5 text-slate-400" />
              </div>
              <div className="space-y-4">
                {[1, 2].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-50"
                  >
                    <div className="w-10 h-10 bg-slate-200 rounded-full flex-shrink-0" />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">
                          今天在寫程式又發現一件有趣的事
                        </p>
                        <span className="text-sm text-slate-500">2h ago</span>
                      </div>
                      <p className="text-sm text-slate-600 line-clamp-2">
                        常弄把一個主要功能寫好之後，我發現我卡在UI畫面的呈現很久，我知道可以用
                        tailwind UI的漂亮樣板來做...
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <span>0 瀏覽</span>
                        <span>5 讚</span>
                        <span>0 轉發</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThreadsDashboard;
