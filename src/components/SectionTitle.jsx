import React from 'react';
import { motion as Motion } from 'framer-motion';

const SectionTitle = ({ subtitle, title, color = "text-accent-indigo" }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-4 mb-20"
    >
      <div className="flex items-center gap-4">
        <div className="w-8 h-[1px] bg-accent-teal" />
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent-teal">{subtitle}</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-black text-white">
        {title}<span className={color}>.</span>
      </h2>
    </Motion.div>
  );
};

export default SectionTitle;
