import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-outfit font-bold bg-gradient-to-r from-accent-indigo to-accent-cyan bg-clip-text text-transparent">
            Portfolio
          </div>
          
          <div className="text-slate-500 text-sm font-medium">
            &copy; {currentYear} Developed with ❤️ by Rahman
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="text-xs font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors">Home</a>
            <a href="#projects" className="text-xs font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors">Projects</a>
            <a href="#contact" className="text-xs font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
