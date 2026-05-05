/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import { ArrowDown, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Full Stack Developer & WordPress Expert";
  const speed = 100;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-brand-primary text-[10px] uppercase font-bold tracking-[0.3em]">
            <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse shadow-[0_0_10px_#ef4444]"></span>
            Available for new projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-8xl lg:text-[10rem] font-display font-bold leading-[0.85] tracking-tighter mb-10 text-text-primary"
        >
          Full Stack <br />
          <span className="text-gradient">Developer.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-lg md:text-xl font-display font-light max-w-2xl mx-auto mb-14 text-text-secondary leading-relaxed opacity-80"
        >
          Creative mind & skilled developer specializing in building 
          <span className="text-text-primary font-medium"> premium digital experiences</span> and high-performance systems with precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#projects"
            className="px-10 py-5 bg-brand-primary text-white font-bold rounded-2xl hover:scale-105 transition-transform inline-flex items-center gap-2 shadow-[0_10px_30px_rgba(239,68,68,0.3)]"
          >
            View Projects
          </a>
          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 glass text-text-primary font-semibold rounded-2xl hover:bg-brand-primary hover:text-white transition-all inline-flex items-center gap-2"
          >
            <Download size={18} /> Download CV
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-20"
        >
          <a href="#about" className="flex flex-col items-center gap-4 text-brand-primary group transition-all duration-300">
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold opacity-30 group-hover:opacity-100 transition-opacity">Scroll Down</span>
            <motion.div
              animate={{ 
                y: [0, 8, 0],
                opacity: [0.4, 1, 0.4],
                scale: [0.95, 1.05, 0.95]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex justify-center items-center"
            >
              <div className="p-2 rounded-full border border-brand-primary/20 bg-brand-primary/5 logo-glow">
                <ArrowDown size={16} />
              </div>
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
