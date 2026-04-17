import React from 'react';
import { motion } from 'framer-motion';

const Motion = motion;

const SkillCard = ({ category, index }) => {
  const Icon = category.icon;
  
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-dark-900 p-10 space-y-8 hover:bg-dark-800/50 transition-colors h-full"
    >
      <div className="flex items-center gap-4">
        {Icon && <Icon className="text-accent-indigo" size={24} />}
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-slate-500">
          {category.name}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.items.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-dark-800 rounded-lg border border-white/5 text-xs text-slate-300 font-medium hover:border-accent-indigo/40 hover:text-white transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </Motion.div>
  );
};

export default SkillCard;
