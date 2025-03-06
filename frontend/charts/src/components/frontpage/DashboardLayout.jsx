"use client";

import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

export default function DashboardLayout() {
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex">
          <Sidebar />
          <MainContent />
        </div>
      </main>
    </>
  );
}
