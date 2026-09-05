"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OnboardingPage() {
  const router = useRouter();
  const [areaOfInterest, setAreaOfInterest] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [showOtherLanguage, setShowOtherLanguage] = useState(false);
  const [otherLanguage, setOtherLanguage] = useState("");
  const [complexity, setComplexity] = useState("Intermediate (Practical)");
  const [collaboration, setCollaboration] = useState("Solo Project");
  const [goal, setGoal] = useState("");
  const [personalIdea, setPersonalIdea] = useState("");

  const commonLanguages = [
    "Python", "JavaScript", "TypeScript", "Java", "C++", 
    "C#", "Go", "Rust", "PHP", "Ruby", "Swift", "Kotlin"
  ];

  const handleLanguageToggle = (lang: string) => {
    if (selectedLanguages.includes(lang)) {
      setSelectedLanguages(selectedLanguages.filter((l) => l !== lang));
    } else {
      setSelectedLanguages([...selectedLanguages, lang]);
    }
  };

  const handleOtherLanguageToggle = () => {
    setShowOtherLanguage(!showOtherLanguage);
    if (showOtherLanguage) setOtherLanguage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalLanguages = [...selectedLanguages];
    if (showOtherLanguage && otherLanguage) {
      finalLanguages.push(...otherLanguage.split(',').map(l => l.trim()));
    }

    const formData = {
      areaOfInterest,
      languages: finalLanguages,
      complexity,
      collaboration,
      goal,
      personalIdea
    };

    localStorage.setItem("projectSpherePrefs", JSON.stringify(formData));
    router.push("/projects/results");
  };

  return (
    <main className="min-h-screen relative flex items-center justify-center p-4 py-12 overflow-hidden bg-slate-50">
      {/* Premium Background Decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-400/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-2xl w-full p-8 md:p-10 relative z-10">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-600 tracking-tight">
            Craft Your Vision
          </h1>
          <p className="text-gray-500 mt-3 text-lg font-light">Tell us your strengths, and we'll engineer the perfect project for you.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-8">
            
            {/* Area of Interest */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Area of Interest</label>
              <select 
                value={areaOfInterest}
                onChange={(e) => setAreaOfInterest(e.target.value)}
                className="w-full border-gray-200 rounded-xl shadow-sm border p-3.5 text-gray-900 bg-white/50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Choose a domain...</option>
                <option value="Artificial Intelligence / ML">Artificial Intelligence & Machine Learning</option>
                <option value="Web Development">Full-Stack Web Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Data Science">Data Science & Analytics</option>
                <option value="Cybersecurity">Cybersecurity & Networking</option>
                <option value="Other">Other (Custom)</option>
              </select>
            </div>

            {/* Conditional "Other" Input */}
            {areaOfInterest === "Other" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="block text-sm font-medium text-gray-700 mb-2">Specify your custom domain</label>
                <input 
                  type="text" 
                  placeholder="e.g. Robotics, Embedded Systems, Blockchain..." 
                  className="w-full border-gray-200 rounded-xl shadow-sm border p-3.5 text-gray-900 bg-white/50 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" 
                />
              </div>
            )}

            {/* Programming Languages Pill Checklist */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Tech Stack Experience (Select all that apply)</label>
              <div className="flex flex-wrap gap-2">
                {commonLanguages.map((lang) => (
                  <label key={lang} className="relative cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedLanguages.includes(lang)}
                      onChange={() => handleLanguageToggle(lang)}
                      className="peer sr-only"
                    />
                    <div className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 transition-all peer-checked:bg-blue-600 peer-checked:text-white peer-checked:border-blue-600 hover:border-blue-300 hover:bg-blue-50">
                      {lang}
                    </div>
                  </label>
                ))}
                
                {/* Other Language Pill */}
                <label className="relative cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={showOtherLanguage}
                    onChange={handleOtherLanguageToggle}
                    className="peer sr-only"
                  />
                  <div className="px-4 py-2 rounded-full border border-dashed border-gray-300 text-sm font-medium text-gray-600 transition-all peer-checked:bg-purple-600 peer-checked:text-white peer-checked:border-purple-600 hover:border-purple-300 hover:bg-purple-50">
                    + Custom
                  </div>
                </label>
              </div>

              {/* Conditional "Other Language" Input */}
              {showOtherLanguage && (
                <div className="mt-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <input 
                    type="text" 
                    value={otherLanguage}
                    onChange={(e) => setOtherLanguage(e.target.value)}
                    placeholder="Type other tools separated by commas..." 
                    className="w-full border-gray-200 rounded-xl shadow-sm border p-3.5 text-gray-900 bg-white/50 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" 
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Complexity Target</label>
                <select value={complexity} onChange={(e) => setComplexity(e.target.value)} className="w-full border-gray-200 rounded-xl shadow-sm border p-3.5 text-gray-900 bg-white/50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                  <option>Beginner (Foundation)</option>
                  <option>Intermediate (Practical)</option>
                  <option>Advanced (Innovation)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Collaboration</label>
                <select value={collaboration} onChange={(e) => setCollaboration(e.target.value)} className="w-full border-gray-200 rounded-xl shadow-sm border p-3.5 text-gray-900 bg-white/50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                  <option>Solo Project</option>
                  <option>Team (2-4 Members)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Future Career Goal</label>
              <input value={goal} onChange={(e) => setGoal(e.target.value)} type="text" placeholder="e.g. Prompt Engineer, AI Researcher, Full-Stack Dev" className="w-full border-gray-200 rounded-xl shadow-sm border p-3.5 text-gray-900 bg-white/50 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
            </div>

            {/* Personal Idea (Optional) */}
            <div className="pt-6 border-t border-gray-100/60">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Have an existing idea? <span className="text-gray-400 font-normal ml-1">(Optional)</span>
              </label>
              <textarea 
                rows={3} 
                value={personalIdea}
                onChange={(e) => setPersonalIdea(e.target.value)}
                placeholder="Briefly describe your concept here and our AI will refine it into a professional final-year standard..." 
                className="w-full border-gray-200 rounded-xl shadow-sm border p-4 text-gray-900 bg-white/50 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
              ></textarea>
            </div>

          </div>

          <div className="flex justify-between items-center pt-6 mt-4">
            <Link href="/" className="text-gray-500 hover:text-gray-800 font-medium transition-colors">
              ← Back
            </Link>
            <button type="submit" className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Generate Ideas ✨
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
