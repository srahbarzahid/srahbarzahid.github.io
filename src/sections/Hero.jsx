import React, { useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { heroData } from '../data/hero';
import { HiArrowRight } from 'react-icons/hi';
import { FiArrowDown } from 'react-icons/fi';
import heroImg from '../assets/rahbar.jpeg';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Subtle parallax effect for the image
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section 
      ref={containerRef} 
      id="home" 
      style={{ position: 'relative' }}
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-10 z-10">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-6"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-teal/10 text-accent-teal text-[10px] font-bold uppercase tracking-widest rounded-full border border-accent-teal/20 w-fit">
              <span className="w-1.5 h-1.5 bg-accent-teal rounded-full animate-pulse" />
              {heroData.status}
            </div>

            {/* Subheader */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-[1px] bg-accent-teal" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-teal">
                {heroData.role}
              </span>
            </div>

            <h1 className="text-7xl md:text-[120px] font-serif font-black leading-[0.8] tracking-tighter text-white">
              <span className="block italic">{heroData.firstName}</span>
              <span className="block text-accent-indigo ml-4 md:ml-12">{heroData.lastName}</span>
            </h1>

            {/* Tagline */}
            <p className="max-w-xl text-base text-slate-400 leading-relaxed font-light">
              {heroData.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href={heroData.cta.primary.link} className="btn-primary">
                {heroData.cta.primary.text} <HiArrowRight />
              </a>
              <a href={heroData.cta.secondary.link} className="btn-outline">
                {heroData.cta.secondary.text}
              </a>
            </div>
          </Motion.div>
        </div>

        {/* Right Content - Profile Photo with Parallax */}
        <Motion.div
           style={{ y, opacity }}
           className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border border-white/5">
            <img 
              src={heroImg} 
              alt={`${heroData.firstName} ${heroData.lastName}`} 
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60" />
            
            {/* Name Label */}
            <div className="absolute bottom-10 left-10 right-10 p-4 bg-dark-900/40 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-accent-teal">
                {heroData.firstName} {heroData.lastName}
              </span>
            </div>
          </div>

          {/* Abstract Glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-indigo/10 blur-[80px] rounded-full -z-10" />
        </Motion.div>
      </div>

      {/* Scroll Indicator */}
      <Motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-12 flex items-center gap-4"
      >
        <FiArrowDown className="text-slate-500 animate-bounce" />
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-600">Scroll</span>
      </Motion.div>
    </section>
  );
};

export default Hero;
