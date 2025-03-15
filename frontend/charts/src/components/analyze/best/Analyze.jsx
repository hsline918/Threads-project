import { useState } from "react";
import { User, Bell, LogOut, ChevronDown } from "lucide-react";
import Layout from "../../layout/Layout";
import PageHeader from "../../layout/PageHeader";
import Line from "../../layout/Line";
import BestThreadsCard from "./BestThreadsCard";

export default function Analyze() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [timeRange, setTimeRange] = useState("今天");
  const [showTimeMenu, setShowTimeMenu] = useState(false);
  
  // 模擬用戶數據，實際上應該從API獲取
  const user = {
    name: "使用者",
    avatar: null
  };
  
  const handleLogout = () => {
    // 登出邏輯
    console.log("登出");
    // 可以在此處理重定向回登入頁面
  };
  
  const timeRanges = ["今天", "昨天", "上週", "上個月"];
  
  const handleTimeChange = (time) => {
    setTimeRange(time);
    setShowTimeMenu(false);
  };
  
  const headerContent = (
    <div className="flex items-center gap-6">
      <div className="relative">
        <button 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setShowUserMenu(!showUserMenu)}
        >
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            {user.avatar ? (
              <img src={user.avatar} alt="User" className="w-full h-full rounded-full" />
            ) : (
              <User size={20} className="text-gray-600" />
            )}
          </div>
          <span className="text-sm font-medium text-gray-950">{user.name}</span>
        </button>
        
        {showUserMenu && (
          <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white z-10">
            <div className="py-1">
              <button 
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={handleLogout}
              >
                <LogOut size={16} className="mr-2" />
                登出
              </button>
            </div>
          </div>
        )}
      </div>
      
      <button className="relative">
        <Bell size={20} className="text-gray-950" />
        <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center rounded-full bg-red-500 text-white text-xs">
          3
        </span>
      </button>
    </div>
  );

  return (
    <Layout headerContent={headerContent}>
      <div className="flex-1">
        <PageHeader title="分析" />
        <Line />

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="text-gray-950 text-2xl font-medium font-['Noto Sans CJK TC']">
              最佳串文
            </div>
          </div>
          <div className="relative">
            <button 
              className="h-[37px] px-6 py-2 bg-white rounded-[10px] border border-gray-200 justify-center items-center gap-1 inline-flex"
              onClick={() => setShowTimeMenu(!showTimeMenu)}
            >
              <span className="text-gray-950 text-sm font-medium font-['Noto Sans CJK TC']">
                {timeRange}
              </span>
              <ChevronDown size={20} color="#030712" />
            </button>
            
            {showTimeMenu && (
              <div className="absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white z-10">
                <div className="py-1">
                  {timeRanges.map((time) => (
                    <button 
                      key={time}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => handleTimeChange(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6">
          <BestThreadsCard />
        </div>
      </div>
    </Layout>
  );
}
