import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ZbxuTuCsFbT2izmF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* soft vignette + stars overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black"></div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl items-center px-4">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight"
          >
            Building reliable software for the cosmic scale
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
            className="mt-5 text-lg text-white/80"
          >
            I’m a software engineer focused on performant web apps, clean systems design, and smooth user experiences—
            with a soft spot for space.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2 font-medium shadow/50 shadow-white/10 hover:shadow-white/20 transition-shadow"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 font-medium text-white hover:bg-white/10 transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
