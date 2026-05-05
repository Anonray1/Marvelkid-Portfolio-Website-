/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll during loading
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative selection:bg-brand-primary selection:text-white bg-bg-deep overflow-hidden">
      {/* Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="bg-blob w-[500px] h-[500px] bg-brand-primary/20 -top-20 -left-20 animate-slow-spin" />
        <div className="bg-blob w-[700px] h-[700px] bg-red-800/10 bottom-0 -right-20 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="bg-blob w-[400px] h-[400px] bg-brand-primary/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <LoadingScreen />
      
      {!loading && (
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Services />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}
