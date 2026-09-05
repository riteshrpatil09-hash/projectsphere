"use client";

import { useState } from "react";
import Link from "next/link";

export default function MentorPage() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi Alex! I'm your AI Mentor. I see you're working on the 'AI-Powered Smart Health Diagnoser'. You're currently in Phase 2: ML Model Training. What do you need help with today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setMessages([...newMessages, { role: "assistant", content: "That's a great question about handling missing data in your dataset. Since you're using Scikit-learn, I recommend using the `SimpleImputer` class. For numerical data like age or blood pressure, replacing missing values with the 'mean' or 'median' is usually best. Do you want me to show you a quick code snippet for that?" }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar (simplified for brevity) */}
      <aside className="w-64 bg-white border-r min-h-screen p-4 flex flex-col hidden md:flex">
        <div className="mb-8 px-2">
          <Link href="/dashboard" className="text-xl font-bold text-gray-900">ProjectMentor</Link>
        </div>
        <nav className="flex-grow space-y-2">
          <Link href="/dashboard" className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md font-medium">Overview</Link>
          <Link href="/dashboard/mentor" className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-md font-medium">AI Mentor</Link>
        </nav>
      </aside>

      {/* Chat Interface */}
      <main className="flex-grow flex flex-col h-screen">
        <header className="bg-white border-b px-6 py-4 flex justify-between items-center shrink-0">
          <div>
            <h1 className="font-bold text-gray-900">AI Mentor</h1>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
              Online
            </p>
          </div>
        </header>

        <div className="flex-grow p-6 overflow-y-auto bg-gray-50 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[70%] rounded-2xl px-5 py-3 ${
                msg.role === "user" 
                  ? "bg-blue-600 text-white rounded-br-none" 
                  : "bg-white border text-gray-800 rounded-bl-none shadow-sm"
              }`}>
                <p className="text-sm leading-relaxed">{msg.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-white border-t shrink-0">
          <form onSubmit={handleSend} className="max-w-4xl mx-auto flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about code, debugging, or next steps..." 
              className="flex-grow border-gray-300 rounded-full shadow-sm border px-6 py-3 text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <button 
              type="submit"
              className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
