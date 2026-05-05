/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const XIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.482 3.239H4.293L17.607 20.65z" />
  </svg>
);

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Sync theme with document element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-xl font-display font-bold tracking-tight"
         >
           <a href="#hero" className="flex items-center gap-3 group">
             <div className="w-10 h-10 flex items-center justify-center overflow-hidden logo-glow transition-all duration-300 bg-slate-950 rounded-xl p-1.5">
               <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
             </div>
             <span className="hidden sm:inline text-text-primary transition-colors uppercase tracking-[0.25em] font-mono font-bold text-lg group-hover:text-brand-primary">Marvelkid</span>
           </a>
         </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`text-[10px] uppercase font-bold tracking-widest transition-colors hover:text-brand-primary ${
                  link.name === 'Home' ? 'text-brand-primary' : 'text-text-secondary'
                }`}
              >
                {link.name}
              </motion.a>
          ))}
          
          <div className="h-4 w-[1px] bg-border-subtle mx-2" />

          <button 
            onClick={toggleTheme}
            className="p-2 hover:bg-brand-primary/10 rounded-full transition-colors text-brand-primary flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-brand-primary border border-brand-primary rounded-full text-white text-[10px] uppercase tracking-widest hover:bg-transparent hover:text-brand-primary transition-all font-bold"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 hover:bg-brand-primary/10 rounded-full transition-colors text-brand-primary flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-text-primary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border-subtle bg-bg-deep/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-display text-text-primary hover:text-brand-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-6 mt-4 border-t border-border-subtle pt-6">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-brand-primary transition-colors"><Github size={20} /></a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-brand-primary transition-colors"><Linkedin size={20} /></a>
                <a href={PERSONAL_INFO.twitter} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-brand-primary transition-colors"><XIcon size={18} /></a>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-text-primary hover:text-brand-primary transition-colors"><Mail size={20} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
