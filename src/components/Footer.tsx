/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PERSONAL_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border-subtle mt-12 bg-bg-deep text-text-secondary">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-bold tracking-[0.2em]">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden logo-glow transition-all duration-300 bg-slate-950 rounded-xl p-1.5">
            <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <p className="text-text-secondary opacity-60">
            © {new Date().getFullYear()} Designed and developed by MARVELKID
          </p>
        </div>

        <div className="flex items-center gap-4 text-brand-primary/20">
           {/* Clean divider or spacing */}
        </div>

        <p className="text-text-secondary opacity-60">Marvelkid &mdash; Portfolio</p>
      </div>
    </footer>
  );
}
