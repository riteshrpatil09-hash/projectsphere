import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-hidden relative selection:bg-purple-200">
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-100/60 to-transparent pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-40 -left-40 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10 flex flex-col items-center">
        
        {/* Sleek Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span className="text-xs font-bold text-gray-700 tracking-wider uppercase">Explore. Plan. Build.</span>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col items-center text-center max-w-4xl">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-8 bg-white">
            <Image 
              src="/logo.jpg" 
              alt="ProjectSphere Logo" 
              width={160} 
              height={160} 
              priority
              className="object-cover w-full h-full"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
            The Ultimate <br className="hidden md:block"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              AI Project Ecosystem
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed font-light">
            Stop searching for ideas. ProjectSphere uses AI to instantly generate, plan, and guide you through a professional-grade academic project tailored to your exact skills and career goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/onboarding" className="px-8 py-4 bg-gray-900 text-white rounded-xl text-lg font-bold shadow-xl shadow-gray-900/20 hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center">
              Generate My Project
            </Link>
            <Link href="/dashboard" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl text-lg font-bold shadow-sm hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2">
              Open Workspace
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Statistics / Social Proof Bar */}
      <div className="w-full border-y border-gray-200 bg-white/50 backdrop-blur-sm py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <p className="text-3xl font-black text-gray-900">10,000+</p>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-1">Ideas Generated</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-gray-200"></div>
          <div>
            <p className="text-3xl font-black text-gray-900">98%</p>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-1">Approval Rate</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-gray-200"></div>
          <div>
            <p className="text-3xl font-black text-gray-900">24/7</p>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-1">AI Mentor Access</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-gray-200"></div>
          <div className="flex items-center gap-3">
             <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="user" />
                  </div>
                ))}
             </div>
             <div className="text-left">
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
                <p className="text-xs font-semibold text-gray-600 mt-0.5">Loved by students</p>
             </div>
          </div>
        </div>
      </div>

      {/* Feature Grid Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Everything you need to succeed.</h2>
          <p className="text-gray-500 mt-4 text-lg">A complete ecosystem from ideation to final submission.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Hyper-Personalized",
              desc: "Ideas are generated specifically for your tech stack, skill level, and career aspirations.",
              icon: "🎯",
              color: "bg-red-50 text-red-600 border-red-100"
            },
            {
              title: "Detailed Roadmaps",
              desc: "Get week-by-week execution plans so you never feel lost or overwhelmed during development.",
              icon: "🗺️",
              color: "bg-blue-50 text-blue-600 border-blue-100"
            },
            {
              title: "AI Mentor",
              desc: "Stuck on a bug? Your personal AI tutor is always available in your dashboard to help you debug.",
              icon: "🤖",
              color: "bg-purple-50 text-purple-600 border-purple-100"
            },
            {
              title: "Improvement Engine",
              desc: "Have an existing idea? Our AI will refine it to meet high academic grading standards.",
              icon: "⚙️",
              color: "bg-emerald-50 text-emerald-600 border-emerald-100"
            }
          ].map((feat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6 border ${feat.color}`}>
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feat.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}