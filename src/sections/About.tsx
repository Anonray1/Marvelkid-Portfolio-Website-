/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Section from '../components/Section';
import { PERSONAL_INFO } from '../constants';
import { Download } from 'lucide-react';

export default function About() {
  return (
    <Section id="about" subtitle="ABOUT ME" title="Why I Standout">
      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 bento-card p-0 md:p-0! overflow-hidden relative"
        >
          <div className="p-8 md:p-14">
            {/* Subtle background decoration if any */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
            
            <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
              <div className="relative shrink-0">
                <div className="w-36 h-36 rounded-3xl overflow-hidden border-2 border-brand-primary/20 shadow-2xl transition-all duration-500 group-hover:border-brand-primary/50 group-hover:scale-105">
                  <img 
                    src={PERSONAL_INFO.avatar} 
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-brand-primary rounded-full border-4 border-bg-deep flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tighter">
                  A little about me
                </h4>
                <p className="text-brand-primary font-bold tracking-[0.2em] uppercase text-[10px]">
                  {PERSONAL_INFO.title} &mdash; Based in Nigeria
                </p>
              </div>
            </div>

            <div className="space-y-8 text-text-secondary">
              <p className="text-xl md:text-2xl leading-relaxed font-light opacity-80">
                I’m a <span className="text-text-primary font-medium">Full Stack Developer</span> with 8+ years of experience building and maintaining web applications. I work with technologies like <span className="text-text-primary">React, Node.js, Express.js, MongoDB, and WebSockets</span>, and I’m comfortable handling everything from frontend interfaces to backend systems and APIs.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed font-light opacity-80">
                Over time, I’ve contributed to different types of projects, including management systems and user-focused platforms, often involving integrations and real-world functionality. I aim to write clean, reliable code and create applications that are easy to use and perform well.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-10 mt-16">
              <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-10 py-5 bg-text-primary text-bg-deep rounded-2xl font-bold text-sm shadow-xl hover:shadow-brand-primary/20 hover:-translate-y-1 transition-all"
              >
                <Download size={20} /> Download Resume
              </a>
              <a
                href="#contact"
                className="group flex items-center gap-3 text-text-primary font-bold text-xl hover:gap-6 transition-all"
              >
                Get In Touch <span className="text-3xl transition-transform group-hover:translate-x-2 text-brand-primary">→</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Stats Sidebar */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="lg:w-80 flex flex-col gap-6"
        >
          {[
            { label: 'Years of Experience', value: '8+' },
            { label: 'Completed Project', value: '20+' },
            { label: 'Client Satisfaction', value: '95%' },
          ].map((stat, i) => (
            <div 
              key={stat.label}
              className="flex-1 bento-card flex flex-col items-center justify-center text-center gap-4 hover:shadow-brand-primary/10"
            >
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-text-secondary opacity-60">{stat.label}</span>
              <span className="text-6xl font-display font-bold text-text-primary transition-all group-hover:text-brand-primary">{stat.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
