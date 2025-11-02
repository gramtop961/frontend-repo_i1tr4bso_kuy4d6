import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Star } from 'lucide-react';

const projects = [
  {
    title: 'Deep Space Dashboard',
    description: 'Real‑time telemetry visualization with WebSockets and stream processing.',
    stack: ['React', 'FastAPI', 'WebSockets', 'D3'],
  },
  {
    title: 'Orbital Planner',
    description: 'Constraint‑based scheduling engine with REST API and worker queues.',
    stack: ['Python', 'Redis', 'Celery', 'PostgreSQL'],
  },
  {
    title: 'Stellar UI Kit',
    description: 'Accessible component library with motion primitives and dark‑first design.',
    stack: ['TypeScript', 'Storybook', 'Radix', 'Tailwind'],
  },
];

function ProjectCard({ title, description, stack, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: 0.05 * index, duration: 0.5 }}
      className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-xl shadow-black/20"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/0 via-purple-500/0 to-pink-500/0 opacity-0 group-hover:opacity-20 transition-opacity" />
      <div className="relative">
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
          <Star className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-white/70">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(88,28,135,0.25)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-10 flex items-center gap-3">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
            <Rocket className="h-4 w-4" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold">Featured Projects</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} index={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
