import React from 'react';
import { heroData } from '../data/hero';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-white/5 bg-dark-950/40">
      <div className="max-w-7xl mx-auto px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-serif font-black text-white">
            {heroData.firstName} {heroData.lastName}<span className="text-accent-indigo">.</span>
          </h2>
          <p className="text-xs font-mono font-bold uppercase tracking-[0.4em] text-slate-600">
            {heroData.role}
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex items-center gap-8">
            <a href="#home" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Work</a>
          </div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-700">
            &copy; {currentYear} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
