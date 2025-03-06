"use client";

import UserInfo from "./UserInfo";
import StatsGrid from "./StatsGrid";
import MetricsGrid from "./MetricsGrid";
import EngagementStats from "./EngagementStats";
import RecentPosts from "./RecentPosts";

export default function MainContent() {
  return (
    <main className="p-8  max-md:p-4">
      <UserInfo />
      <hr className="mx-0 my-5 h-px border-0 bg-gray-200" />
      <h2 className="mb-5 text-2xl font-medium text-gray-950">總覽</h2>
      <StatsGrid />
      <div className="p-4 border border-gray-200 my-4 rounded-xl ">
        <MetricsGrid />
        <EngagementStats />
      </div>
      <RecentPosts />
    </main>
  );
}
