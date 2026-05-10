/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-20 flex items-center justify-center bg-slate-950 rounded-2xl p-3 border border-white/5 shadow-2xl"
        >
          <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
        </motion.div>
        
        <div className="w-32 h-[2px] bg-white/5 overflow-hidden rounded-full relative">
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-brand-primary to-transparent"
          />
        </div>
        
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20"
        >
          Marvelkids Digital
        </motion.span>
      </div>
    </motion.div>
  );
}
