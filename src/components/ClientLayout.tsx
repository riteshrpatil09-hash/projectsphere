"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import FloatingChat from "./FloatingChat";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area */}
      <div 
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64 w-[calc(100%-16rem)]" : "ml-0 w-full"
        }`}
      >
        {/* Toggle Button for when sidebar is hidden */}
        {!isSidebarOpen && (
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        )}
        
        {children}
      </div>

      <FloatingChat />
    </div>
  );
}
