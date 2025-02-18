import { useState } from "react";
import {
  LayoutDashboard,
  BarChart2,
  FileText,
  Users,
  MessageSquare,
  ChevronRight,
  Settings,
  HelpCircle,
  Book,
  Star,
} from "lucide-react";

const DashboardLayout = () => {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const mainMenuItems = [
    {
      icon: LayoutDashboard,
      label: "儀表板",
      active: true,
      subItems: [],
      // "概觀", "重要指標", "自訂報表"
    },
    {
      icon: BarChart2,
      label: "分析",
      subItems: [],
      // "互動分析", "成長趨勢", "受眾分析"
    },
    {
      icon: FileText,
      label: "串文",
      subItems: [],
      // "所有串文", "草稿", "已排程"
    },
    {
      icon: Users,
      label: "追蹤者",
      subItems: [],
      // "活躍用戶", "新追蹤者", "互動排行"
    },
    {
      icon: MessageSquare,
      label: "反饋",
      subItems: [],
      // "所有評論", "待回覆", "已封存"
    },
  ];

  return (
    <div className="flex h-screen bg-slate-50">
      {/* 主要側邊欄 */}
      <nav className="w-64 bg-white border-r border-slate-200">
        {/* Logo 區域 */}
        <div className="p-4 border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold">TD</span>
            </div>
            <span className="text-xl font-bold">Threads</span>
          </div>
          <div className="text-sm text-slate-500 mt-1">Dashboard</div>
        </div>

        {/* 主要選單 */}
        <div className="py-4">
          {mainMenuItems.map((item, index) => (
            <div key={index}>
              <div
                className={`flex items-center justify-between px-4 py-2 cursor-pointer
                  ${item.active ? "bg-slate-50" : "hover:bg-slate-50"}
                  ${expandedMenu === index ? "bg-slate-50" : ""}`}
                onClick={() =>
                  setExpandedMenu(expandedMenu === index ? null : index)
                }
              >
                <div className="flex items-center space-x-3">
                  <item.icon
                    className={`w-5 h-5 ${
                      item.active ? "text-blue-600" : "text-slate-600"
                    }`}
                  />
                  <span
                    className={
                      item.active
                        ? "text-blue-600 font-medium"
                        : "text-slate-600"
                    }
                  >
                    {item.label}
                  </span>
                </div>
                <ChevronRight
                  className={`w-4 h-4 text-slate-400 transform transition-transform
                  ${expandedMenu === index ? "rotate-90" : ""}`}
                />
              </div>

              {/* 子選單 */}
              {/* {expandedMenu === index && (
                <div className="bg-slate-50 py-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className="flex items-center space-x-2 px-12 py-2 text-sm text-slate-600 hover:text-blue-600 cursor-pointer"
                    >
                      <span>{subItem}</span>
                    </div>
                  ))}
                </div>
              )} */}
            </div>
          ))}
        </div>

        {/* 底部選單 */}
        <div className="absolute bottom-0 w-64 border-t border-slate-200 bg-white">
          <div className="p-4 space-y-2">
            <div className="flex items-center space-x-3 px-2 py-2 text-slate-600 hover:bg-slate-50 rounded-lg cursor-pointer">
              <Settings className="w-5 h-5" />
              <span>設定</span>
            </div>
            <div className="flex items-center space-x-3 px-2 py-2 text-slate-600 hover:bg-slate-50 rounded-lg cursor-pointer">
              <HelpCircle className="w-5 h-5" />
              <span>說明中心</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 次要側邊欄 */}
      {/* <div className="w-64 bg-white border-r border-slate-200 p-4">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">快速操作</h2>
          <div className="space-y-2">
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              新增串文
            </button>
            <button className="w-full px-4 py-2 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50">
              查看分析
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">最近瀏覽</h2>
          <div className="space-y-3">
            {["串文分析報告", "追蹤者成長趨勢", "熱門話題分析"].map(
              (item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-sm text-slate-600 hover:text-blue-600 cursor-pointer"
                >
                  <Book className="w-4 h-4" />
                  <span>{item}</span>
                </div>
              )
            )}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">重要指標</h2>
          <div className="space-y-3">
            {[
              { label: "本週最佳貼文", value: "279 互動" },
              { label: "追蹤者成長", value: "+15.4%" },
              { label: "平均回應時間", value: "2.3 小時" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-slate-50 rounded-lg"
              >
                <span className="text-sm text-slate-600">{item.label}</span>
                <span className="text-sm font-medium text-slate-800">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* 主要內容區域 */}
      <main className="flex-1 overflow-auto">{/* 主要內容放這裡 */}</main>
    </div>
  );
};

export default DashboardLayout;
