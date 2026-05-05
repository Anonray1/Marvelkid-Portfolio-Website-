/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Section from '../components/Section';
import { SKILLS } from '../constants';
import { Sparkles } from 'lucide-react';
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiRedux, SiSass, SiFramer, SiVuedotjs,
  SiNodedotjs, SiExpress, SiPython, SiDjango, SiPhp, SiLaravel, SiGraphql, SiSocketdotio,
  SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiRedis, SiSqlite,
  SiWordpress, SiWoocommerce, SiShopify, SiElementor, SiWebflow, SiWix,
  SiGit, SiGithub, SiVercel, SiNetlify, SiCpanel, SiDocker, SiPostman, SiLinux
} from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaAws, FaGoogle } from 'react-icons/fa';
import { 
  MdDevices, MdSearch, MdSpeed, MdDesignServices, 
  MdOutlineLibraryAddCheck, MdOutlineArchitecture, MdGroups
} from 'react-icons/md';

const SKILL_ICONS: Record<string, any> = {
  // Frontend
  "HTML": FaHtml5, "CSS": FaCss3Alt, "JavaScript": SiJavascript, "TypeScript": SiTypescript, "React": SiReact, "Next.js": SiNextdotjs, "Tailwind CSS": SiTailwindcss, "Bootstrap": SiBootstrap, "Redux": SiRedux, "Sass": SiSass, "Framer Motion": SiFramer, "Vue.js": SiVuedotjs,
  // Backend
  "Node.js": SiNodedotjs, "Express.js": SiExpress, "Python": SiPython, "Django": SiDjango, "PHP": SiPhp, "Laravel": SiLaravel, "GraphQL": SiGraphql, "Socket.io": SiSocketdotio,
  // Database
  "MongoDB": SiMongodb, "MySQL": SiMysql, "PostgreSQL": SiPostgresql, "Firebase": SiFirebase, "Redis": SiRedis, "SQLite": SiSqlite,
  // CMS
  "WordPress": SiWordpress, "WooCommerce": SiWoocommerce, "Shopify": SiShopify, "Elementor": SiElementor, "Webflow": SiWebflow, "Wix": SiWix,
  // Tools
  "Git": SiGit, "GitHub": SiGithub, "Vercel": SiVercel, "Netlify": SiNetlify, "cPanel": SiCpanel, "Docker": SiDocker, "AWS": FaAws, "Google Cloud": FaGoogle, "Postman": SiPostman, "Linux": SiLinux,
  // Others
  "Responsive Design": MdDevices, "SEO Optimization": MdSearch, "Performance Optimization": MdSpeed, "UI/UX Best Practices": MdDesignServices, "Unit Testing": MdOutlineLibraryAddCheck, "Microservices": MdOutlineArchitecture, "Agile": MdGroups, "UI/UX Design": MdDesignServices
};

const CATEGORY_COLORS: Record<string, string> = {
  'Interfaces': 'text-red-400',
  'Architecture': 'text-blue-400',
  'Persistence': 'text-amber-400',
  'Platforms': 'text-purple-400',
  'Operations': 'text-emerald-400',
  'Optimization': 'text-pink-400',
};

export default function Skills() {
  return (
    <Section id="skills" subtitle="02. Expertise" title="Main Skills">
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-fr">
        {SKILLS.map((skillGroup, i) => {
          const colorClass = CATEGORY_COLORS[skillGroup.category] || 'text-text-primary';
          
          // Bento layout spans
          let spanClass = "col-span-1 md:col-span-3 lg:col-span-4";
          if (i === 0) spanClass = "col-span-1 md:col-span-6 lg:col-span-8";
          if (i === 4) spanClass = "col-span-1 md:col-span-6 lg:col-span-6";
          if (i === 5) spanClass = "col-span-1 md:col-span-6 lg:col-span-6";
          
          return (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`${spanClass} bento-card`}
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 flex items-center justify-between border-b border-border-subtle pb-4">
                <span className="text-text-secondary opacity-60">Group 0{i+1} &mdash; {skillGroup.category}</span>
                <Sparkles size={14} className={colorClass} />
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-y-12 gap-x-6">
                {skillGroup.items.map((skill) => {
                  const Icon = SKILL_ICONS[skill] || Sparkles;
                  return (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.15, rotate: 2 }}
                      className="group/item flex flex-col items-center gap-3"
                      title={skill}
                    >
                      <div className="w-16 h-16 rounded-2xl bg-bg-deep/50 backdrop-blur-xl flex items-center justify-center border border-border-subtle group-hover/item:border-brand-primary group-hover/item:bg-brand-primary/10 transition-all duration-500 relative">
                        <Icon size={30} className="text-text-secondary group-hover/item:text-brand-primary transition-colors duration-500" />
                        
                        <div className="absolute inset-0 bg-brand-primary/20 rounded-2xl blur-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                      </div>
                      <span className="text-[10px] text-text-secondary font-bold uppercase text-center transition-all group-hover/item:text-brand-primary w-full leading-tight h-6 flex items-center justify-center tracking-tighter">
                        {skill}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
