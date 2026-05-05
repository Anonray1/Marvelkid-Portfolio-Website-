/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Section from '../components/Section';
import { SERVICES } from '../constants';
import { Globe, ShoppingBag, Zap, Laptop } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Layout: Laptop,
  Globe: Globe,
  ShoppingBag: ShoppingBag,
  Zap: Zap,
};

export default function Services() {
  return (
    <Section id="services" subtitle="04. What I Do" title="Services">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {SERVICES.map((service, i) => {
          const Icon = ICON_MAP[service.icon] || Zap;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bento-card flex flex-col items-start gap-6"
            >
              <div className="w-16 h-16 bg-bg-deep border border-border-subtle rounded-2xl flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all duration-500 shadow-[0_0_20px_rgba(239,68,68,0)] group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                <Icon size={28} className="group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h5 className="text-2xl font-display font-medium mb-4 text-text-primary uppercase tracking-tight">{service.title}</h5>
                <p className="text-sm text-text-secondary leading-relaxed max-w-sm opacity-80">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
