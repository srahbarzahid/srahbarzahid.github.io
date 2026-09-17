import React from 'react';
import { motion as Motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { aboutData } from '../data/about';
import { FiBriefcase, FiCode, FiLayers, FiCpu, FiCompass } from 'react-icons/fi';

const highlightIcons = [FiBriefcase, FiCompass, FiLayers];
const statIcons = [FiBriefcase, FiCode];

const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <SectionTitle subtitle="About Me" title="My Professional Journey" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Main Bio Card */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 md:p-10 rounded-[2rem] border border-white/10 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Header Badge */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent-indigo/10 text-accent-indigo text-[11px] font-mono font-semibold uppercase tracking-widest rounded-full border border-accent-indigo/20">
                <FiCpu className="text-accent-indigo" />
                <span>Full-Stack & Systems Architecture</span>
              </div>

              {/* Bio Paragraphs - Clean Left Alignment */}
              <div className="space-y-5 text-left">
                <p className="text-slate-200 font-normal leading-relaxed text-sm sm:text-base md:text-lg">
                  {aboutData.mainText}
                </p>
                <div className="w-full h-[1px] bg-white/10 my-4" />
                <p className="text-slate-400 font-light leading-relaxed text-xs sm:text-sm md:text-base">
                  {aboutData.subText}
                </p>
              </div>
            </div>

            {/* Decorative background glow */}
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-accent-indigo/10 blur-[80px] rounded-full pointer-events-none -z-10" />
          </Motion.div>

          {/* Right Column - Stats & Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Stat Cards Row */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {aboutData.stats.map((stat, index) => {
                const Icon = statIcons[index] || FiCode;
                const isIndigo = index === 0;
                return (
                  <Motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative overflow-hidden glass-card p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 group flex flex-col justify-between shadow-xl"
                  >
                    {/* Background Radial Glow */}
                    <div 
                      className={`absolute -top-10 -right-10 w-28 h-28 blur-2xl rounded-full transition-all duration-500 pointer-events-none opacity-40 group-hover:opacity-100 ${
                        isIndigo ? 'bg-accent-indigo/20' : 'bg-accent-teal/20'
                      }`} 
                    />

                    {/* Card Header: Icon Badge */}
                    <div className="flex items-center justify-between mb-5 z-10">
                      <div className={`p-2.5 rounded-xl bg-dark-900/90 border transition-colors duration-300 ${
                        isIndigo 
                          ? 'border-accent-indigo/30 text-accent-indigo group-hover:bg-accent-indigo/10' 
                          : 'border-accent-teal/30 text-accent-teal group-hover:bg-accent-teal/10'
                      }`}>
                        <Icon size={18} />
                      </div>
                      <span className={`w-2 h-2 rounded-full animate-pulse ${isIndigo ? 'bg-accent-indigo' : 'bg-accent-teal'}`} />
                    </div>

                    {/* Card Content: Number & Label */}
                    <div className="z-10">
                      <h4 className={`text-4xl sm:text-5xl font-sans font-black tracking-tight text-white mb-1 transition-colors duration-300 ${
                        isIndigo ? 'group-hover:text-accent-indigo' : 'group-hover:text-accent-teal'
                      }`}>
                        {stat.value}
                      </h4>
                      <p className="text-[11px] font-mono font-medium uppercase tracking-wider text-slate-400">
                        {stat.label}
                      </p>
                    </div>

                    {/* Bottom Animated Accent Line */}
                    <div className={`w-8 h-[2px] rounded-full mt-4 transition-all duration-500 group-hover:w-full ${
                      isIndigo ? 'bg-accent-indigo/40 group-hover:bg-accent-indigo' : 'bg-accent-teal/40 group-hover:bg-accent-teal'
                    }`} />
                  </Motion.div>
                );
              })}
            </div>

            {/* Executive Highlights */}
            <div className="space-y-4">
              {aboutData.highlights.map((item, idx) => {
                const Icon = highlightIcons[idx] || FiBriefcase;
                return (
                  <Motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    className="glass-card p-5 sm:p-6 rounded-2xl border border-white/5 hover:border-accent-indigo/30 transition-all duration-300 flex items-start gap-4 group"
                  >
                    <div className="p-3 bg-dark-900 rounded-xl border border-white/10 text-accent-indigo group-hover:bg-accent-indigo group-hover:text-white transition-all duration-300 shrink-0">
                      <Icon size={20} />
                    </div>
                    <div className="text-left space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h5 className="font-bold text-white text-sm sm:text-base group-hover:text-accent-indigo transition-colors">
                          {item.role}
                        </h5>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-accent-teal border border-white/5">
                          {item.company}
                        </span>
                      </div>
                      <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </Motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

