import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter selection:bg-purple-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        <p>
          © {new Date().getFullYear()} • Crafted among the stars. Built with React, Tailwind & Spline.
        </p>
      </footer>
    </div>
  );
}
