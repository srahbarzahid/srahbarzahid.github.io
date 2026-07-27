import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Motion = motion;

const ProjectCard = ({ project, index }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative bg-dark-900 p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-accent-indigo/40 hover:bg-dark-800/50 transition-all duration-500 overflow-hidden flex flex-col justify-between h-full min-h-[350px]"
    >
      {/* Project Number (Subtle) */}
      <div className="absolute top-8 right-8 text-5xl font-black text-white/5 group-hover:text-accent-indigo/10 transition-colors pointer-events-none">
        {project.id}
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-accent-teal">
            {project.subtitle}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent-indigo transition-colors duration-500 leading-tight">
            {project.title}
          </h3>
        </div>

        <p className="text-slate-400 font-light leading-relaxed max-w-sm text-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-dark-800 rounded-lg border border-white/5 text-[9px] font-bold uppercase text-slate-500 group-hover:text-accent-mint transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-8">
        {project.github && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-dark-800 hover:bg-dark-700 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white rounded-xl transition-all duration-300 text-xs font-bold uppercase tracking-widest shadow-lg shadow-black/20"
          >
            <FiGithub size={18} /> Source Code
          </a>
        )}
        {project.live && (
          <a 
            href={project.live} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-indigo/10 hover:bg-accent-indigo/20 border border-accent-indigo/30 hover:border-accent-indigo/60 text-accent-indigo hover:text-white rounded-xl transition-all duration-300 text-xs font-bold uppercase tracking-widest shadow-lg shadow-indigo-500/10"
          >
            <FiExternalLink size={18} /> View Live
          </a>
        )}
      </div>

      {/* Side Accent Line */}
      <div className="absolute left-0 bottom-0 w-1 h-0 bg-accent-indigo group-hover:h-full transition-all duration-500" />
    </Motion.div>
  );
};

export default ProjectCard;
