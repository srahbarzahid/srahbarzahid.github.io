import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/education';
import SectionTitle from '../components/SectionTitle';

const Motion = motion;

const Education = () => {
  return (
    <section id="education" className="py-32 bg-dark-950/20">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <SectionTitle subtitle="Academic" title="Education" />

        <div className="space-y-8">
          {educationData.map((edu, i) => (
            <Motion.div
              key={edu.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-[3rem] p-10 md:p-14 relative overflow-hidden group hover:border-accent-indigo/30 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="space-y-6 text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                {edu.degree}
              </h3>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <span className="text-accent-teal font-mono font-bold uppercase tracking-[0.2em] text-[10px]">
                  {edu.institution}
                </span>
                <span className="hidden md:block w-1.5 h-1.5 bg-dark-700 rounded-full" />
                <span className="text-slate-500 font-mono font-bold uppercase tracking-[0.2em] text-[10px]">
                  {edu.duration}
                </span>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="px-8 py-3 rounded-full border border-accent-indigo/20 bg-accent-indigo/5 text-accent-indigo font-serif italic text-base">
                {edu.major}
              </div>
            </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-indigo/5 blur-[60px] rounded-full pointer-events-none" />
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
