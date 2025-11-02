import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.15)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold"
        >
          Let’s collaborate
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-3 text-white/80"
        >
          Have a project, an idea, or just want to say hi? I’m open to freelance, consulting, and full‑time opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2 font-medium shadow/50 shadow-white/10 hover:shadow-white/20 transition-shadow"
          >
            <Mail className="h-4 w-4" />
            Email me
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 font-medium text-white hover:bg-white/10 transition-colors"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 font-medium text-white hover:bg-white/10 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
