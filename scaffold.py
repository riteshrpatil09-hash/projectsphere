import os

files = {
    'tsconfig.json': '''{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}''',
    'next.config.mjs': '''/** @type {import('next').NextConfig} */
const nextConfig = {};
export default nextConfig;''',
    'tailwind.config.ts': '''import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;''',
    'postcss.config.mjs': '''/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};
export default config;''',
    'src/app/globals.css': '''@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
}''',
    'src/app/layout.tsx': '''import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProjectMentor | AI-Powered Student Project Platform",
  description: "Generate, refine, and develop practical academic project ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}''',
    'src/app/page.tsx': '''import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Turn Your Skills Into Your Final-Year Project.
        </p>
      </div>

      <div className="relative flex place-items-center flex-col gap-6">
        <h1 className="text-6xl font-bold text-center">
          AI-Powered Project Mentor
        </h1>
        <p className="text-xl text-center max-w-2xl">
          Discover project ideas based on your interests, skills, and career goals. We guide you from an initial idea to a complete, practical final-year project.
        </p>
        <Link href="/onboarding" className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
          Generate My Project
        </Link>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-4">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">Personalized Ideas</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">Get project ideas tailored to your unique skills and goals.</p>
        </div>
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">Detailed Roadmaps</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">Step-by-step implementation plans and timelines.</p>
        </div>
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">AI Mentor</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">Chat with an AI assistant to debug and get guidance.</p>
        </div>
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">Improvement Engine</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">Analyze and improve your existing project ideas.</p>
        </div>
      </div>
    </main>
  );
}''',
    'src/lib/utils.ts': '''import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}'''
}

for path, content in files.items():
    dir_name = os.path.dirname(path)
    if dir_name:
        os.makedirs(dir_name, exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print('Boilerplate files created successfully.')
