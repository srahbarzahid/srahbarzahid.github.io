import React from 'react';
import { motion as Motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { achievementsData } from '../data/achievements';

const Achievements = () => {
  return (
    <section id="achievements" className="py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <SectionTitle subtitle="Recognition" title="Key Achievements" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((item, i) => (
            <Motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-[3rem] group hover:border-accent-indigo/40 transition-all duration-500 flex flex-col h-full"
            >
              <div className="flex gap-6 items-start mb-6">
                <div className="p-4 bg-dark-900 rounded-2xl border border-white/5 text-accent-indigo group-hover:bg-accent-indigo group-hover:text-white transition-all duration-500 shrink-0">
                  <item.icon size={26} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent-indigo transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">
                    {item.organization}
                  </p>
                </div>
              </div>
              
              <div className="flex-grow">
                <p className="text-slate-400 font-light leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
                  Ref: {item.id < 10 ? `0${item.id}` : item.id}
                </span>
                <span className="px-3 py-1 bg-dark-800 rounded-full text-[10px] text-slate-400 font-mono">
                  {item.date}
                </span>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
