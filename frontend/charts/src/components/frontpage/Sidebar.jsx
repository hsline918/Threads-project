"use client";

import {
  LayoutDashboard,
  LineChart,
  CalendarClock,
  Users,
  MessageSquare,
  ChevronDown,
} from "lucide-react";

export default function Sidebar() {
  return (
    <nav className="flex flex-col px-6 py-8 bg-white w-[258px] max-sm:hidden">
      <NavItem icon={<LayoutDashboard size={24} />} text="儀表板" active />
      <NavItem icon={<LineChart size={24} />} text="分析" hasDropdown />
      <NavItem icon={<CalendarClock size={24} />} text="排程串文" />
      <NavItem icon={<Users size={24} />} text="追蹤者" />
      <FeedbackItem />
    </nav>
  );
}

function NavItem({ icon, text, active, hasDropdown }) {
  return (
    <div
      className={`flex items-center px-2 py-4 mb-2 rounded-xl cursor-pointer ${
        active ? "bg-indigo-50" : ""
      }`}
    >
      {/* Replace dangerouslySetInnerHTML with the passed icon component */}
      <span className="text-gray-950">{icon}</span>
      <span className="text-sm font-medium text-gray-950 ml-2">{text}</span>
      {hasDropdown && (
        <ChevronDown size={18} className="ml-auto text-gray-950" />
      )}
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
