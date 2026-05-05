/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Section from '../components/Section';
import { PROJECTS, CATEGORIES } from '../constants';
import { ExternalLink, X, Maximize2, Monitor, Smartphone, Globe } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  const filteredProjects = PROJECTS.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <Section id="projects" subtitle="03. Portfolio" title="Selected Works">
      <div className="flex flex-wrap gap-4 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-brand-primary text-white'
                : 'bg-bg-card text-text-secondary border border-border-subtle hover:border-brand-primary/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[300px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            // Determine grid span based on index for a bento feel
            let spanClass = "col-span-1 md:col-span-3 lg:col-span-4 row-span-1";
            if (idx === 0) spanClass = "col-span-1 md:col-span-6 lg:col-span-8 row-span-2";
            if (idx === 1) spanClass = "col-span-1 md:col-span-3 lg:col-span-4 row-span-1";
            if (idx === 2) spanClass = "col-span-1 md:col-span-3 lg:col-span-4 row-span-1";
            if (idx === 3) spanClass = "col-span-1 md:col-span-3 lg:col-span-6 row-span-1";
            if (idx === 4) spanClass = "col-span-1 md:col-span-3 lg:col-span-6 row-span-1";

            return (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`${spanClass} bento-card group p-0! h-full`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/40 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <p className="text-[10px] font-bold text-brand-primary mb-3 uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {project.category}
                    </p>
                    <h3 className="text-2xl md:text-4xl font-display font-bold mb-6 text-text-primary group-hover:text-white transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center justify-between gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-[9px] px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-bold text-text-secondary">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="w-14 h-14 rounded-full bg-brand-primary flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all shadow-xl shadow-brand-primary/20"
                        title="View Project Preview"
                      >
                        <ExternalLink size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Project Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 pointer-events-auto"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />
            
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="relative w-full h-full max-w-7xl bg-bg-deep rounded-[32px] overflow-hidden border border-border-subtle flex flex-col shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle bg-bg-card">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                    <Globe size={18} className="text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-text-primary leading-tight">{selectedProject.title}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-text-secondary opacity-60">{selectedProject.url}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* View Mode Toggles */}
                  <div className="hidden sm:flex items-center bg-bg-deep rounded-lg border border-border-subtle p-1 mr-4">
                    <button 
                      onClick={() => setViewMode('desktop')}
                      className={`p-1.5 rounded ${viewMode === 'desktop' ? 'bg-brand-primary text-white' : 'text-text-secondary hover:text-text-primary'}`}
                      title="Desktop View"
                    >
                      <Monitor size={14} />
                    </button>
                    <button 
                      onClick={() => setViewMode('mobile')}
                      className={`p-1.5 rounded ${viewMode === 'mobile' ? 'bg-brand-primary text-white' : 'text-text-secondary hover:text-text-primary'}`}
                      title="Mobile View"
                    >
                      <Smartphone size={14} />
                    </button>
                  </div>

                  <a 
                    href={selectedProject.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-bg-deep border border-border-subtle text-text-secondary hover:text-brand-primary hover:border-brand-primary transition-all"
                    title="Open in new tab"
                  >
                    <Maximize2 size={18} />
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg bg-bg-deep border border-border-subtle text-text-secondary hover:text-brand-primary hover:border-brand-primary transition-all"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Iframe Content */}
              <div className="flex-1 bg-slate-100 dark:bg-slate-900 relative overflow-hidden flex justify-center items-start pt-4 sm:pt-8">
                <div 
                  className={`bg-white shadow-2xl transition-all duration-500 overflow-hidden relative ${
                    viewMode === 'desktop' ? 'w-full h-full' : 'w-[375px] h-[750px] rounded-[40px] border-[12px] border-slate-800 self-center mb-8'
                  }`}
                >
                  <iframe 
                    src={selectedProject.url} 
                    className="w-full h-full border-none"
                    title={selectedProject.title}
                    referrerPolicy="no-referrer"
                  />
                  
                  {viewMode === 'mobile' && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-slate-800 rounded-b-2xl z-10" />
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
