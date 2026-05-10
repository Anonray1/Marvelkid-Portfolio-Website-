/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, lazy, Suspense } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import LoadingScreen from './components/LoadingScreen';

// Lazy load below-the-fold sections for better initial TTI
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Services = lazy(() => import('./sections/Services'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll during loading
    document.body.style.overflow = 'hidden';
    
    // Use a multi-stage approach to ensure everything is ready
    const handleLoad = () => {
      setLoading(false);
      document.body.style.overflow = 'auto';
    };

    // Fallback timer to ensure the loader doesn't hang indefinitely
    const timer = setTimeout(handleLoad, 1800); 

    // Also listen for window load for better UX on high-speed connections
    window.addEventListener('load', handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="relative selection:bg-brand-primary selection:text-white bg-bg-deep overflow-hidden">
      {/* Background Blobs - Optimized with lower opacity and reduced complexity */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="bg-blob w-[500px] h-[500px] bg-brand-primary/10 -top-20 -left-20 animate-slow-spin will-change-transform" />
        <div className="bg-blob w-[700px] h-[700px] bg-red-800/10 bottom-0 -right-20 animate-pulse will-change-opacity" style={{ animationDelay: '2s' }} />
        <div className="bg-blob w-[400px] h-[400px] bg-brand-primary/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      
      {!loading && (
        <div className="relative z-10 transition-opacity duration-700 ease-in-out opacity-100">
          <Navbar />
          <main>
            {/* Hero is critical for LCP, so it's loaded immediately */}
            <Hero />
            
            {/* Suspense boundary for below-the-fold content */}
            <Suspense fallback={
              <div className="h-60 flex flex-col items-center justify-center gap-4 text-text-secondary/40">
                <div className="w-10 h-10 rounded-full border-2 border-brand-primary/20 border-t-brand-primary animate-spin" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Initializing content...</span>
              </div>
            }>
              <About />
              <Skills />
              <Projects />
              <Services />
              <Contact />
              <Footer />
            </Suspense>
          </main>
        </div>
      )}
    </div>
  );
}
