"use client";

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  LineChart,
  CalendarClock,
  Users,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  BarChartHorizontal,
  MessageCircle,
} from "lucide-react";

export default function Sidebar({ navItems, customFooter, className = "" }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [showAnalyzeDropdown, setShowAnalyzeDropdown] = useState(false);
  
  // 根據當前路徑判斷哪個項目應該激活
  const isActive = (path) => location.pathname === path;
  
  // 如果沒有提供 navItems，使用預設的導航項目
  const defaultNavItems = [
    { 
      icon: <LayoutDashboard size={20} />, 
      text: "儀表板", 
      active: isActive("/callback"), 
      onClick: () => navigate("/callback")
    },
    { 
      icon: <LineChart size={20} />, 
      text: "分析", 
      hasDropdown: true, 
      active: location.pathname.includes("/analyze"),
      onClick: () => setShowAnalyzeDropdown(!showAnalyzeDropdown)
    },
    { 
      icon: <CalendarClock size={20} />, 
      text: "排程串文", 
      active: isActive("/schedule"),
      onClick: () => navigate("/schedule")
    },
    { 
      icon: <Users size={20} />, 
      text: "追蹤者", 
      active: isActive("/followers"),
      onClick: () => navigate("/followers")
    },
  ];

  const analyzeSubItems = [
    {
      icon: <BarChartHorizontal size={18} />,
      text: "最佳串文",
      active: isActive("/analyze/best"),
      onClick: () => navigate("/analyze/best")
    },
    {
      icon: <MessageCircle size={18} />,
      text: "串文分析",
      active: isActive("/analyze/threads"),
      onClick: () => navigate("/analyze/threads")
    }
  ];

  const items = navItems || defaultNavItems;

  return (
    <nav
      className={`flex flex-col px-6 py-8 bg-white w-[258px] max-sm:hidden ${className}`}
    >
      {items.map((item, index) => (
        <div key={index}>
          <NavItem
            icon={item.icon}
            text={item.text}
            active={item.active}
            hasDropdown={item.hasDropdown}
            isOpen={showAnalyzeDropdown && item.hasDropdown}
            onClick={item.onClick}
          />
          
          {/* 顯示子項目 */}
          {item.hasDropdown && showAnalyzeDropdown && (
            <div className="ml-8 mt-1 mb-2">
              {analyzeSubItems.map((subItem, subIndex) => (
                <NavSubItem
                  key={subIndex}
                  icon={subItem.icon}
                  text={subItem.text}
                  active={subItem.active}
                  onClick={subItem.onClick}
                />
              ))}
            </div>
          )}
        </div>
      ))}

      {customFooter || <FeedbackItem />}
    </nav>
  );
}

function NavItem({ icon, text, active, hasDropdown, isOpen, onClick }) {
  return (
    <div
      className={`flex items-center px-2 py-4 mb-2 rounded-xl cursor-pointer ${
        active ? "bg-indigo-50" : ""
      }`}
      onClick={onClick}
    >
      <span className="text-gray-950">{icon}</span>
      <span className="text-sm font-medium text-gray-950 ml-2">{text}</span>
      {hasDropdown && (
        isOpen ? (
          <ChevronUp size={18} className="ml-auto text-gray-950" />
        ) : (
          <ChevronDown size={18} className="ml-auto text-gray-950" />
        )
      )}
    </div>
  );
}

function NavSubItem({ icon, text, active, onClick }) {
  return (
    <div
      className={`flex items-center px-2 py-2 rounded-xl cursor-pointer ${
        active ? "bg-indigo-50" : ""
      }`}
      onClick={onClick}
    >
      <span className="text-gray-950">{icon}</span>
      <span className="text-sm font-medium text-gray-950 ml-2">{text}</span>
    </div>
  );
}

function FeedbackItem() {
  return (
    <div className="flex items-center px-2 py-4 mt-auto gap-1">
      <MessageSquare size={24} className="text-gray-950" />
      <span className="text-sm font-medium text-gray-950 ml-1">意見回饋</span>
    </div>
  );
}
