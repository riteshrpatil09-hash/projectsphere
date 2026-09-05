"use client";

import Link from "next/link";
import { useState } from "react";

export default function DashboardPage() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Clean Kaggle disease dataset",
      priority: "High Priority",
      priorityColor: "bg-red-100 text-red-700",
      due: "Due in 2 days",
      completed: false
    },
    {
      id: 2,
      title: "Train Random Forest baseline",
      priority: "Medium Priority",
      priorityColor: "bg-amber-100 text-amber-700",
      due: "Due next week",
      completed: false
    },
    {
      id: 3,
      title: "Setup Python virtual environment",
      priority: "Done",
      priorityColor: "bg-gray-100 text-gray-500",
      due: "Completed yesterday",
      completed: true
    }
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  // Let's pretend there are 10 total tasks for the 35% progress bar (roughly 3/10)
  const progressPercent = Math.round((completedCount / tasks.length) * 100);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-8 pb-20">
      
      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase mb-3 shadow-sm border border-blue-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Active Workspace
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Welcome back, Alex! 👋</h1>
            <p className="text-gray-500 mt-1">Here is your project's command center.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/dashboard/improve" className="text-sm bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg font-bold hover:bg-gray-50 shadow-sm transition-colors">
              AI Review
            </Link>
            <Link href="/dashboard/mentor" className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-lg font-bold hover:shadow-md transition-all">
              Chat with Mentor
            </Link>
          </div>
        </header>

        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Main Progress Card */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 to-purple-500"></div>
            
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Current Project</p>
                <h2 className="text-2xl font-bold text-gray-900">AI-Powered Smart Health Diagnoser</h2>
              </div>
              <span className="bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">Phase 2 / 4</span>
            </div>
            
            <p className="text-gray-600 text-sm mb-8 leading-relaxed max-w-2xl">
              You are currently working on <strong className="text-gray-900">ML Model Training</strong>. You've completed the data gathering phase and are now focused on building the Random Forest baseline.
            </p>
            
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
              <div className="mb-3 flex justify-between items-end">
                <div>
                  <span className="block font-bold text-gray-900">Task Completion</span>
                  <span className="text-xs text-gray-500">Target completion: Nov 15</span>
                </div>
                <span className="text-blue-600 font-extrabold text-2xl">{progressPercent}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-500 ease-out" style={{ width: `${progressPercent}%` }}></div>
              </div>
            </div>
          </div>

          {/* Quick Stats / Gamification */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-md p-6 text-white relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              <h3 className="font-semibold text-indigo-100 mb-1 text-sm">Productivity Streak</h3>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-black">12</span>
                <span className="text-indigo-200 pb-1 font-medium">Days</span>
              </div>
              <p className="text-xs text-indigo-100 mt-3 opacity-80">You're in the top 10% of students!</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-center">
              <h3 className="font-bold text-gray-900 mb-1">GitHub Integration</h3>
              <p className="text-xs text-gray-500 mb-4">Sync your code for AI analysis.</p>
              <button className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white text-sm font-bold py-2.5 rounded-lg hover:bg-gray-800 transition-colors shadow-sm">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                Connect Repository
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Tasks */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h2 className="text-lg font-bold text-gray-900">Upcoming Tasks</h2>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">View All</button>
            </div>
            <ul className="divide-y divide-gray-100 flex-grow">
              {tasks.map((task) => (
                <li key={task.id} className={`p-5 flex items-start gap-4 transition-colors group cursor-pointer ${task.completed ? 'opacity-60 bg-gray-50/50' : 'hover:bg-blue-50/30'}`} onClick={() => toggleTask(task.id)}>
                  <input 
                    type="checkbox" 
                    checked={task.completed} 
                    onChange={() => toggleTask(task.id)}
                    className="mt-1 w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer pointer-events-none" 
                  />
                  <div className="flex-grow">
                    <p className={`font-bold transition-colors ${task.completed ? 'text-gray-500 line-through' : 'text-gray-900 group-hover:text-blue-700'}`}>
                      {task.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      {!task.completed && (
                        <span className={`${task.priorityColor} text-[10px] font-bold px-2 py-0.5 rounded uppercase`}>
                          {task.priority}
                        </span>
                      )}
                      <span className="text-xs text-gray-500 font-medium">
                        {task.completed ? 'Completed just now' : task.due}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Suggestions / Resources */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-white flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4z"></path></svg>
                Mentor Insights
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center shrink-0 text-blue-700">💡</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Data Cleaning Tip</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">I noticed you're about to clean the Kaggle dataset. Make sure to check for class imbalances—medical datasets often have way more healthy records than diseased ones. Try using SMOTE!</p>
                </div>
              </div>
              
              <div className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer flex justify-between items-center group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl group-hover:bg-purple-100 transition-colors">📚</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Random Forest Tutorial</h4>
                    <p className="text-xs text-gray-500">Suggested reading (10 min)</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </div>

              <div className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer flex justify-between items-center group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl group-hover:bg-blue-100 transition-colors">🛠️</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Scikit-Learn Cheatsheet</h4>
                    <p className="text-xs text-gray-500">Quick reference guide</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
