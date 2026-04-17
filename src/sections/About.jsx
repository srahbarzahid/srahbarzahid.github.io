import React from 'react';
import { motion as Motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { aboutData } from '../data/about';

const About = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <SectionTitle subtitle="About Me" title="My Professional Journey" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-xl text-slate-300 font-light leading-relaxed text-justify">
              {aboutData.mainText}
            </p>
            <p className="text-slate-400 leading-relaxed font-light text-justify">
              {aboutData.subText}
            </p>
          </Motion.div>

          {/* Stats or Facts */}
          <div className="grid grid-cols-2 gap-6">
            {aboutData.stats.map((stat, index) => (
              <div key={index} className="glass-card p-8 rounded-3xl">
                <h4 className={`text-4xl font-serif font-black ${index === 0 ? 'text-accent-indigo' : 'text-accent-teal'} mb-2`}>
                  {stat.value}
                </h4>
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
