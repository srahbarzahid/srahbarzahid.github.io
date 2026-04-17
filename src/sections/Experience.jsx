import React from 'react';
import { motion as Motion } from 'framer-motion';
import { experienceData } from '../data/experience';
import SectionTitle from '../components/SectionTitle';

const Experience = () => {
  return (
    <section id="experience" className="relative py-32">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <SectionTitle subtitle="Professional" title="Work Experience" />

        <div className="space-y-8">
          {experienceData.map((exp, i) => (
            <Motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-[2rem] p-8 md:p-12 relative overflow-hidden group hover:border-accent-indigo/30 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-accent-teal">
                        {exp.company}
                      </span>
                      <span className="w-1 h-1 bg-dark-700 rounded-full" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-slate-400 font-light leading-relaxed">
                        <span className="text-accent-indigo mt-1 text-sm">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-shrink-0">
                  <div className="px-4 py-2 bg-dark-900/50 rounded-xl border border-white/5 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-accent-indigo transition-colors">
                    {exp.duration}
                  </div>
                </div>
              </div>

              {/* Decorative Accent Link */}
              <div className="absolute left-0 top-0 w-1 h-full bg-accent-indigo opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
