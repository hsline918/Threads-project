"use client";

import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ 
  children, 
  headerLogo,
  headerContent,
  sidebarItems,
  sidebarFooter,
  sidebarClassName
}) {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header logo={headerLogo}>
        {headerContent}
      </Header>
      <div className="flex">
        <Sidebar 
          navItems={sidebarItems} 
          customFooter={sidebarFooter}
          className={sidebarClassName}
        />
        <div className="flex-1 p-8 max-sm:p-4">
          {children}
        </div>
      </div>
    </main>
  );
}