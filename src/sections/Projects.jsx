import React from 'react';
import { projectsData } from '../data/projects';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <SectionTitle subtitle="Work" title="Featured Projects" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
