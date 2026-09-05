"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();
  const [activeMenuId, setActiveMenuId] = useState<number | null>(null);
  
  const [recents, setRecents] = useState([
    { id: 1, title: "AI Project Platform Prompt" },
    { id: 2, title: "Relational Database Answer" },
    { id: 3, title: "Design letter pad" },
    { id: 4, title: "Identify region" },
    { id: 5, title: "Secure Google Cloud Networks" }
  ]);

  const navItems = [
    { name: "Home", href: "/", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg> },
    { name: "Generate Project", href: "/onboarding", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg> },
    { name: "Project Ideas", href: "/projects/results", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg> },
    { name: "Dashboard", href: "/dashboard", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg> },
    { name: "AI Mentor", href: "/dashboard/mentor", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg> },
  ];

  const handleDelete = (id: number) => {
    setRecents(recents.filter(item => item.id !== id));
    setActiveMenuId(null);
  };

  const handleAction = (action: string) => {
    alert(`${action} successfully!`);
    setActiveMenuId(null);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setActiveMenuId(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 h-screen w-64 bg-[#171717] text-[#ececec] border-r border-[#303030] shadow-sm z-40 flex flex-col transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 flex items-center justify-between mt-2">
        <Link href="/" className="flex items-center gap-3 px-2 rounded-lg hover:bg-[#2f2f2f] transition-colors py-2 w-full">
          <div className="w-8 h-8 rounded-full overflow-hidden relative shrink-0">
             <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
          </div>
          <h1 className="font-semibold text-[15px] tracking-wide text-white">
            ProjectSphere
          </h1>
        </Link>
        <button 
          onClick={() => setIsOpen(false)}
          className="p-1.5 ml-2 rounded-md text-gray-400 hover:text-white hover:bg-[#2f2f2f] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-2 px-3 space-y-1 scrollbar-hide">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-[14px] ${
                isActive 
                  ? "bg-[#2f2f2f] text-white font-medium" 
                  : "text-[#c5c5d2] hover:bg-[#2f2f2f] hover:text-white"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}

        <div className="pt-6 pb-2 px-3">
          <p className="text-xs font-semibold text-[#8e8ea0] mb-3">Recents</p>
          <div className="space-y-0.5">
            {recents.map((activity) => (
              <div 
                key={activity.id} 
                className="relative group flex items-center justify-between text-[13px] text-[#c5c5d2] hover:bg-[#2f2f2f] hover:text-white px-3 py-2 rounded-lg cursor-pointer transition-colors"
              >
                <div className="truncate pr-6">{activity.title}</div>
                
                {/* 3 Dots Icon - Visible on hover or when active */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveMenuId(activeMenuId === activity.id ? null : activity.id);
                  }}
                  className={`absolute right-2 p-1 text-gray-400 hover:text-white rounded transition-opacity ${activeMenuId === activity.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {activeMenuId === activity.id && (
                  <div 
                    onClick={(e) => e.stopPropagation()}
                    className="absolute left-full ml-2 top-0 w-48 bg-[#2f2f2f] border border-[#404040] rounded-lg shadow-2xl py-1 z-50 overflow-hidden"
                  >
                    <button onClick={() => handleAction("Pinned")} className="w-full text-left px-4 py-2.5 text-sm text-[#ececec] hover:bg-[#404040] flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" /></svg>
                      Pin to top
                    </button>
                    <button onClick={() => handleAction("Renamed")} className="w-full text-left px-4 py-2.5 text-sm text-[#ececec] hover:bg-[#404040] flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>
                      Rename
                    </button>
                    <button onClick={() => handleAction("Shared to WhatsApp")} className="w-full text-left px-4 py-2.5 text-sm text-[#ececec] hover:bg-[#404040] flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" /></svg>
                      Share (WhatsApp / Link)
                    </button>
                    <div className="h-px bg-[#404040] my-1"></div>
                    <button onClick={() => handleDelete(activity.id)} className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:bg-[#404040] flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* User Profile Section at Bottom */}
      <div className="p-3 border-t border-[#303030]">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#2f2f2f] cursor-pointer transition-colors text-[#c5c5d2] hover:text-white">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
          <span className="text-[14px] font-medium">Alex Student</span>
        </div>
      </div>
    </div>
  );
}
