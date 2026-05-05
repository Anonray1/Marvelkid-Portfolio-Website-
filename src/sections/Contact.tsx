/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Section from '../components/Section';
import { PERSONAL_INFO } from '../constants';
import { Mail, Github, Linkedin, Send, Instagram, Phone } from 'lucide-react';
import React, { useState } from 'react';

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

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'ac727fdf-9c33-4ce5-a162-29010209aee8', // User should replace this with their key from web3forms.com
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New Portfolio Message from ${formState.name}`,
          from_name: 'Marvelkid Portfolio'
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" subtitle="05. Get In Touch" title="Start a Conversation">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-display font-medium mb-8 leading-tight text-text-primary">
            Have a project in mind? <br />
            <span className="text-text-secondary opacity-60">Let's build something exceptional together.</span>
          </h3>

          <div className="flex flex-col gap-6 mb-12">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-xl hover:translate-x-2 transition-transform duration-300 text-text-primary">
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-brand-primary/20">
                <Mail size={20} className="text-brand-primary" />
              </div>
              {PERSONAL_INFO.email}
            </a>
            
            <div className="flex flex-wrap gap-4 mt-4">
              {[
                { icon: Github, href: PERSONAL_INFO.github, label: 'GitHub' },
                { icon: Linkedin, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
                { icon: Instagram, href: PERSONAL_INFO.instagram, label: 'Instagram' },
                { icon: XIcon, href: PERSONAL_INFO.twitter, label: 'X' },
                { icon: Phone, href: PERSONAL_INFO.whatsapp, label: 'WhatsApp', color: 'text-green-500' },
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all border border-brand-primary/10 ${social.color || 'text-brand-primary'}`}
                  title={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 p-8 md:p-12 bento-card shadow-2xl transition-all duration-500 overflow-hidden relative"
        >
          {submitted ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                <Send className="text-green-500" size={32} />
              </div>
              <h4 className="text-3xl font-display font-bold mb-4">Message Sent!</h4>
              <p className="text-text-secondary">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-brand-primary font-bold uppercase tracking-widest text-[10px] hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] uppercase tracking-[0.4em] text-text-secondary font-bold ml-1 opacity-60">Full Name</label>
                <input
                  required
                  type="text"
                  disabled={isSubmitting}
                  placeholder="Your Name"
                  className="bg-bg-deep/50 glass border-border-subtle rounded-2xl p-5 focus:outline-none focus:border-brand-primary/50 transition-all text-sm text-text-primary disabled:opacity-50"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] uppercase tracking-[0.4em] text-text-secondary font-bold ml-1 opacity-60">Email Address</label>
                <input
                  required
                  type="email"
                  disabled={isSubmitting}
                  placeholder="email@example.com"
                  className="bg-bg-deep/50 glass border-border-subtle rounded-2xl p-5 focus:outline-none focus:border-brand-primary/50 transition-all text-sm text-text-primary disabled:opacity-50"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] uppercase tracking-[0.4em] text-text-secondary font-bold ml-1 opacity-60">Message</label>
                <textarea
                  required
                  rows={4}
                  disabled={isSubmitting}
                  placeholder="Tell me about your project..."
                  className="bg-bg-deep/50 glass border-border-subtle rounded-2xl p-5 focus:outline-none focus:border-brand-primary/50 transition-all text-sm resize-none text-text-primary disabled:opacity-50"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              {error && (
                <p className="text-red-500 text-xs font-bold px-2">
                  Oops! Something went wrong. Please try again or email me directly at {PERSONAL_INFO.email}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 px-10 py-6 bg-brand-primary text-white font-bold rounded-2xl hover:scale-[0.98] active:scale-95 transition-all flex items-center justify-center gap-4 shadow-[0_15px_40px_rgba(239,68,68,0.3)] text-base disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <>Sending... <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /></>
                ) : (
                  <>Send Inquiry <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
              </button>
            </>
          )}
        </motion.form>
      </div>
    </Section>
  );
}
