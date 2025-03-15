"use client";

import { useState } from "react";
import { User, Bell, LogOut } from "lucide-react";
import Layout from "../layout/Layout";
import MainContent from "./MainContent";

export default function DashboardLayout() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  
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
      <MainContent />
    </Layout>
  );
}
