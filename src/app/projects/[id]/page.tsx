"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem('projectSphereResults');
    if (stored) {
      const projects = JSON.parse(stored);
      const found = projects.find((p: any) => p.id.toString() === params.id);
      if (found) {
        setProject(found);
      }
    }
  }, [params.id]);

  if (!project) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-bold text-gray-700">Loading project details...</h2>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col pb-20">
      
      {/* Hero Header Section */}
      <div className="bg-white border-b sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/projects/results" className="text-gray-500 hover:text-gray-900 font-medium flex items-center gap-2 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Results
          </Link>
          <div className="flex gap-3">
            <button className="text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
              </svg>
              Share
            </button>
            <button className="text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
              </svg>
              Save Idea
            </button>
            <Link href="/dashboard" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all text-sm shadow-md">
              Start This Project
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${project.color || 'from-emerald-400 to-teal-500'}`}></div>
            
            <div className="flex items-center gap-3 mb-4">
              <span className={`bg-gradient-to-r ${project.color || 'from-emerald-400 to-teal-500'} text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide`}>
                {project.match || '98% Match'}
              </span>
              <span className="text-sm font-medium text-gray-500">Suggested For You</span>
            </div>

            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">{project.title}</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
              {project.desc}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Target Audience</p>
                  <p className="text-gray-900 font-medium">Students, Professionals, Businesses</p>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Career Relevance</p>
                  <p className="text-gray-900 font-medium">Software Engineer, Project Lead</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
              Problem Statement
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Based on your area of interest, this project addresses the need for robust, scalable solutions in modern tech environments. It solves critical pain points through automation and advanced programming concepts.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-purple-500 rounded-full"></span>
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Scalable Architecture",
                "Real-time Data Processing",
                "Intuitive Dashboard",
                "Secure API Integrations",
                "Automated Reporting",
                "Cross-platform compatibility"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                  <svg className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Development Roadmap</h2>
            <div className="relative border-l-2 border-gray-100 ml-4 space-y-8 pb-4">
              
              <div className="relative pl-8">
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-blue-100 border-4 border-white flex items-center justify-center text-blue-600 font-bold shadow-sm">1</div>
                <h3 className="font-bold text-gray-900 text-lg">Phase 1: Research & Planning (Weeks 1-2)</h3>
                <p className="text-gray-600 mt-1">Gather requirements, sketch out the architecture, and set up the foundational repository and database schemas.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-gray-100 border-4 border-white flex items-center justify-center text-gray-500 font-bold shadow-sm">2</div>
                <h3 className="font-bold text-gray-900 text-lg">Phase 2: Core Development (Weeks 3-5)</h3>
                <p className="text-gray-600 mt-1">Implement the primary backend APIs and core business logic according to your selected technology stack.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-gray-100 border-4 border-white flex items-center justify-center text-gray-500 font-bold shadow-sm">3</div>
                <h3 className="font-bold text-gray-900 text-lg">Phase 3: Frontend Integration (Weeks 6-7)</h3>
                <p className="text-gray-600 mt-1">Build the user interface and connect it to the backend services. Focus on responsive design and user experience.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-gray-100 border-4 border-white flex items-center justify-center text-gray-500 font-bold shadow-sm">4</div>
                <h3 className="font-bold text-gray-900 text-lg">Phase 4: Testing & Deployment (Weeks 8-10)</h3>
                <p className="text-gray-600 mt-1">Conduct thorough unit and integration testing. Deploy the final application to a cloud provider like Vercel or AWS.</p>
              </div>

            </div>
          </section>
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Action Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 bg-gradient-to-br from-white to-blue-50/50">
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Ready to build?</h3>
            <p className="text-sm text-gray-600 mb-6">Start this project now to get access to your personalized AI mentor, task tracker, and Git integration.</p>
            <Link href="/dashboard" className="w-full block text-center bg-blue-600 text-white px-4 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-sm">
              Initialize Project Space
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Project Overview</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium">Difficulty</span>
                <span className="font-bold text-gray-900 bg-gray-100 px-2 py-1 rounded">{project.difficulty || 'Advanced'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium">Est. Time</span>
                <span className="font-bold text-gray-900 bg-gray-100 px-2 py-1 rounded">{project.time || '3 Months'}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-gray-500 font-medium">Feasibility</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-green-500"></div>
                  </div>
                  <span className="font-bold text-green-600">8.5</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium">Innovation</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-[90%] h-full bg-blue-500"></div>
                  </div>
                  <span className="font-bold text-blue-600">9.0</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag: string) => (
                <span key={tag} className="bg-slate-100 text-slate-700 text-xs px-3 py-1.5 rounded-lg font-bold border border-slate-200">
                  {tag}
                </span>
              )) || <span className="text-gray-500">Any Language</span>}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
