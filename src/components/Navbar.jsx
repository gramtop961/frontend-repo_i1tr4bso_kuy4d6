import React from 'react';
import { Rocket, Github } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-backdrop-blur:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
            <Rocket className="h-4 w-4 text-white" />
          </span>
          <span className="text-white/90 group-hover:text-white transition-colors font-semibold tracking-wide">Astro Engineer</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10 transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
